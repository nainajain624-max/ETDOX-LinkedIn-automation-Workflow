const raw = inputData.raw_rows;

const rows = Array.isArray(raw)
  ? raw
  : JSON.parse(raw);

if (!Array.isArray(rows)) {
  throw new Error("Invalid Google Sheets data.");
}

return {
  full_name: rows.map(r => r[0] ?? ""),
  company: rows.map(r => r[2] ?? ""),
  business_email: rows.map(r => r[6] ?? ""),
  personalized_message: rows.map(r => r[8] ?? ""),
  email_status: rows.map(r => r[9] ?? ""),
  follow_up_date: rows.map(r => r[10] ?? ""),
  next_follow_up_date: rows.map(r => r[16] ?? ""),
  sheet_row_number: rows.map((r, i) => i + 2)
};
