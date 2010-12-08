var selectionText = "Nothing selected.";

function showSelectionText(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  console.log("selectionText: " + info.selectionText);

  selectionText = info.selectionText;

  chrome.windows.create({url: "collection.html#" + selectionText, type: "popup"});
}

var collect_menu = chrome.contextMenus.create({"title": "Collect it",
                                                "type": "normal",
                                                "contexts":["selection"],
                                                "onclick": showSelectionText});
