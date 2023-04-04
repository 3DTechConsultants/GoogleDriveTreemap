const driveRoot = DriveApp.getRootFolder();
let chartData = [["Folder", "Parent", "Size"]];
let totalFileCount=0;

//------------------------------------------
function start() {
  recurseFolder(driveRoot, null);
  return {totalFileCount: totalFileCount, chartData: chartData};
}
//------------------------------------------
function recurseFolder(thisDriveFolder, parentId) {

  let thisFolderId = thisDriveFolder.getId();
  let thisFolderName = thisDriveFolder.getName();
  let thisFolderData = [{ v: thisFolderId, f: thisFolderName },
    parentId,
    0
  ];

  let driveFiles = thisDriveFolder.getFiles();
  while (driveFiles.hasNext()) {
    let file = driveFiles.next();
    thisFolderData[2] += file.getSize();
    totalFileCount++;
  }
  let driveSubFolders = thisDriveFolder.getFolders();
  while (driveSubFolders.hasNext()) {
    let driveSubFolder = driveSubFolders.next();
    recurseFolder(driveSubFolder, thisFolderId);
  }
  chartData.push(thisFolderData);
}
//------------------------------------------
function doGet() {
  return HtmlService.createTemplateFromFile('GUI').evaluate();
}
//------------------------------------------
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}
