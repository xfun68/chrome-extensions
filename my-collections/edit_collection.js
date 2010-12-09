var selectionText = "Nothing selected.";

function editSelectionText(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  console.log("selectionText: " + info.selectionText);

  selectionText = info.selectionText;

  chrome.windows.create({url: "collection.html#" + selectionText, type: "popup"});
}

var collect_menu = chrome.contextMenus.create({"title": "Edit Collection",
                                                "type": "normal",
                                                "contexts":["selection"],
                                                "onclick": editSelectionText});
