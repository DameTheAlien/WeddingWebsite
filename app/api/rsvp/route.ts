import { NextResponse } from "next/server";
import { google } from "googleapis";

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = String(body.fullName || "").trim();
    const email = body.email ? String(body.email).trim() : "";
    const attending = Boolean(body.attending);
    const guestCount = Number.isFinite(body.guestCount) ? Number(body.guestCount) : 1;
    const mealChoice = body.mealChoice ? String(body.mealChoice).trim() : "";
    const notes = body.notes ? String(body.notes).trim() : "";

    if (!fullName) {
      return NextResponse.json({ error: "Full name is required." }, { status: 400 });
    }
    if (guestCount < 1 || guestCount > 10) {
      return NextResponse.json({ error: "Guest count must be between 1 and 10." }, { status: 400 });
    }

    // --- Google auth (Service Account) ---
    const clientEmail = requiredEnv("GOOGLE_SHEETS_CLIENT_EMAIL");
    // Important: newline handling for env var private key
    const privateKey = requiredEnv("GOOGLE_SHEETS_PRIVATE_KEY").replace(/\\n/g, "\n");

    const spreadsheetId = requiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "RSVPs";

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();

    // Columns: Timestamp, Full Name, Email, Attending, Guest Count, Meal Choice, Notes
    const values = [[timestamp, fullName, email, attending ? "Yes" : "No", guestCount, mealChoice, notes]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:G`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err?.message || "Failed to submit RSVP." },
      { status: 500 }
    );
  }
}
