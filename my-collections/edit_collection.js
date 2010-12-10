var selectionText = "Nothing selected.";

function editSelectionText(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
  console.log("selectionText: " + info.selectionText);

  selectionText = info.selectionText;

  popup = chrome.windows.create({url: "http://xfun68.github.com/", type: "popup"});
  popup_document = popup.document;
  var element = popup_document.createElement("input");
  element.setAttrivute("type", "button");
  element.setAttrivute("value", "button");
  element.setAttrivute("name", "button");
  var home = popup_document.getElementById("home");
  home.appendChild(element);
}

var collect_menu = chrome.contextMenus.create({"title": "Edit Collection",
                                                "type": "normal",
                                                "contexts":["selection"],
                                                "onclick": editSelectionText});
