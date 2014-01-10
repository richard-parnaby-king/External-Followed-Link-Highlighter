/*
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "contentscript.js"});
});