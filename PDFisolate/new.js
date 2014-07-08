var folder = "PDF_downloads";

chrome.downloads.onDeterminingFilename.addListener( 
  function (item, suggest) {
    if(isPDF(item)) suggest({filename: folder + "/" + item.filename});
    else suggest();
  }
);

function isPDF(item){
  if(item.mime === "application/pdf") return true;
  else if (item.filename.match(/\.pdf$/i)) return true;
  else return false;
}
