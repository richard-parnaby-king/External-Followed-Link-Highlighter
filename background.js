/*
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */
 
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
		chrome.storage.local.get("autoenable", function(value) {
			value = value.autoenable;
			if(value == "checked") {
				chrome.tabs.executeScript(null, {file: "contentscript.js"});
			}
		});
  }
})
 
//When user clicks on button, run script
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "contentscript.js"});
});