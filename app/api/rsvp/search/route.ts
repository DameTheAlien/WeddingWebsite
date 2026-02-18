import { NextResponse } from "next/server";
import { google } from "googleapis";

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

function getSheetsClient() {
  const clientEmail = requiredEnv("GOOGLE_SHEETS_CLIENT_EMAIL");
  const privateKey = requiredEnv("GOOGLE_SHEETS_PRIVATE_KEY").replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// minimal normalization for matching
function norm(s: string) {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    const q = norm(String(query || ""));
    if (q.length < 2) return NextResponse.json({ results: [] });

    const spreadsheetId = requiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
    const sheetName = process.env.GOOGLE_SHEETS_GUEST_SHEET_NAME || "GuestList";

    const sheets = getSheetsClient();

    // Pull columns A-G (GuestID..Updated At)
    const resp = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:G`,
    });

    const rows = resp.data.values || [];
    if (rows.length <= 1) return NextResponse.json({ results: [] });

    const dataRows = rows.slice(1); // skip header

    // Build matches (limit results so you don’t leak too much)
    const matches: Array<{ guestId: string; fullName: string }> = [];

    for (const r of dataRows) {
      const guestId = String(r[0] || "").trim();
      const fullName = String(r[1] || "").trim();
      if (!guestId || !fullName) continue;

      if (norm(fullName).includes(q)) {
        matches.push({ guestId, fullName });
        if (matches.length >= 8) break; // cap results
      }
    }

    return NextResponse.json({ results: matches });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Search failed" }, { status: 500 });
  }
}
