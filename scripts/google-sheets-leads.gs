/**
 * Receives "Get in Touch" submissions from the website, appends each one to
 * this spreadsheet and emails a notification.
 *
 * Setup (once):
 *   1. Open the Google Sheet, then Extensions > Apps Script, and paste this file in.
 *   2. Set SECRET below to a long random string. The same value goes in the
 *      LEADS_WEBHOOK_SECRET environment variable on Vercel.
 *   3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *      Copy the web app URL into the LEADS_WEBHOOK_URL environment variable.
 */

const SECRET = "REPLACE_WITH_A_LONG_RANDOM_STRING";
const NOTIFY_EMAIL = "trynotecommerce@gmail.com";
const SHEET_NAME = "Leads";
const HEADERS = ["Submitted at", "Name", "Email", "Company", "Message", "Page"];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "invalid_json" });
  }
  if (data.secret !== SECRET) return reply({ ok: false, error: "unauthorized" });

  const sheet = getSheet();
  sheet.appendRow([
    new Date(),
    safe(data.name),
    safe(data.email),
    safe(data.company),
    safe(data.message),
    safe(data.page),
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: "New website enquiry from " + (data.name || "someone"),
    body: [
      "A new enquiry came in through the website.",
      "",
      "Name: " + data.name,
      "Email: " + data.email,
      "Company: " + (data.company || "-"),
      "",
      "Message:",
      data.message || "-",
      "",
      "All enquiries: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    ].join("\n"),
  });

  return reply({ ok: true });
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Stops a submitted value like "=HYPERLINK(...)" from running as a formula.
function safe(value) {
  const text = String(value || "");
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
