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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const guestId = String(body.guestId || "").trim();
    const attending = body.attending === true ? "Yes" : body.attending === false ? "No" : "";
    const notes = body.notes ? String(body.notes).trim() : "";

    if (!guestId) {
      return NextResponse.json({ error: "Missing guestId" }, { status: 400 });
    }

    const spreadsheetId = requiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
    const sheetName = process.env.GOOGLE_SHEETS_GUEST_SHEET_NAME || "GuestList";

    const sheets = getSheetsClient();

    // Fetch all rows to locate the row index for this GuestID
    const resp = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:G`,
    });

    const rows = resp.data.values || [];
    if (rows.length <= 1) {
      return NextResponse.json({ error: "Guest list is empty" }, { status: 400 });
    }

    let foundRowNumber: number | null = null; // 1-indexed row in the sheet
    for (let i = 1; i < rows.length; i++) {
      const rowGuestId = String(rows[i][0] || "").trim();
      if (rowGuestId === guestId) {
        foundRowNumber = i + 1; // because i=1 corresponds to row 2
        break;
      }
    }

    if (!foundRowNumber) {
      return NextResponse.json({ error: "Guest not found" }, { status: 404 });
    }

    const updatedAt = new Date().toISOString();

    // Columns E-G: Attending, Notes, Updated At
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!E${foundRowNumber}:G${foundRowNumber}`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[attending, notes, updatedAt]] },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message || "Update failed" }, { status: 500 });
  }
}
