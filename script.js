function getword(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  //this code is used for set text on localstorage DB later for render we can get into popup.html
  window.localStorage.setItem('selectionText', info.selectionText)
  console.log(info, tab);
  // Create a new window at the location of the context menu click
  chrome.runtime.sendMessage({ text: info.selectionText }, function (response) {
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 350,
      height: 800,
      left: (screen.width / 1) - (350 / 2),
      top: (screen.height / 2) - (800 / 2),
    });
  });
}

chrome.contextMenus.create({
  title: "DVL %s",
  contexts: ["all"],
  onclick: getword,
});


