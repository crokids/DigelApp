import db from "../dbConnect.js";

export const getTableData = async (req, res) => {
 const googleSheets = await db();
 const spreadsheetId = "1AAKKuoqaEk1HFlIuLir9ubi2PncCHXpFW7rorygG_6Q";

 const response = await googleSheets.spreadsheets.values.get({
  spreadsheetId,
  range: "CLIENTES!A:D",
 });

 const keys = response.data.values[0];

 const tableDataObject = response.data.values.slice(1).map(row => {
  const obj = {};
  keys.forEach((key, index) => {
   obj[key] = row[index];
  });
  return obj;
 })

 return res.status(200).json({ data: tableDataObject })

}