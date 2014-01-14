/*
 * Add a red border around external non-nofollowed links.
 * @copyright: Richard Parnaby-King
 * @url: http://richard.parnaby-king.co.uk
 */
 //get all links that contain 'http', are not links to the current host, and do not contain the rel="nofollow" attribute
var result = document.evaluate("//a[contains(@href,\"http\") and not(contains(@href, \"" + location.host + "\")) and not(contains(@rel, \"nofollow\"))]",
																document.documentElement,
																null,
																XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

//add a red border around each link
for (var i=0; i<result.snapshotLength; i++) {
	result.snapshotItem(i).style.border='1px dashed red';
}


