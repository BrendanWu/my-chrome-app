function getword(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  console.log(info, tab);
  // Create a new window at the location of the context menu click
  chrome.runtime.sendMessage({ text: info.selectionText }, function(response) {
    chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: 250,
        height: 500,
        left: info.menuX,
        top: info.menuY,
      });
  });
}

chrome.contextMenus.create({
  title: "DVL reply %s",
  contexts: ["selection"],
  onclick: getword,
});


