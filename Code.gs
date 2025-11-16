// Config
const SPREADSHEET_NAME = "AccountsDB";
const SHEET_NAME = "Accounts";
const HEADERS = ["Name","Username","Email","Password","2FA Key","Phone","Recovery","Notes"];

// Get or create sheet
function getSheet() {
  const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  const ss = files.hasNext() ? SpreadsheetApp.open(files.next()) : SpreadsheetApp.create(SPREADSHEET_NAME);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME).appendRow(HEADERS);
  return sheet;
}

// GET all data
function doGet() {
  const [headers, ...rows] = getSheet().getDataRange().getValues();
  const json = rows.map(r => Object.fromEntries(r.map((v,i)=>[headers[i],v])));
  return ContentService.createTextOutput(JSON.stringify(json))
                       .setMimeType(ContentService.MimeType.JSON);
}

// POST: add/update/delete
function doPost(e) {
  const sheet = getSheet();
  const params = JSON.parse(e.postData.contents);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const usernameIdx = headers.indexOf("Username");

  if (params._delete) {
    for (let i=1;i<data.length;i++){
      if(data[i][usernameIdx]===params.Username){sheet.deleteRow(i+1);break;}
    }
    return ContentService.createTextOutput(JSON.stringify({status:"deleted"}))
                         .setMimeType(ContentService.MimeType.JSON);
  }

  const rowIndex = data.findIndex((r,i)=>i && r[usernameIdx]===params.Username);
  const newRow = headers.map(h => params[h]||"");

  if(rowIndex>0) newRow.forEach((val,i)=>sheet.getRange(rowIndex+1,i+1).setValue(val));
  else sheet.appendRow(newRow);

  return ContentService.createTextOutput(JSON.stringify({status:"success"}))
                       .setMimeType(ContentService.MimeType.JSON);
}
