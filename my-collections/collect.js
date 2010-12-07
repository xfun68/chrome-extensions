var selectionText = "No selection text";

function showSelectionText(info, tab) {
  selectionText = info.selectionText;
  chrome.windows.create("url": "collection.html", "type": "popup");
}

var id = chrome.contextMenus.create({"title": "myCollections",
                                    "type": "normal",
                                    "contexts": ["selection"],
                                    "onclick": showSelectionText});

var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
                                         "onclick":radioOnClick});
