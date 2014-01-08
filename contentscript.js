var result = document.evaluate("//a[contains(@href,\"http\") and not(contains(@href, \"" + location.host + "\")) and not(contains(@rel, \"nofollow\"))]",
																document.documentElement,
																null,
																XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

for (var i=0; i<result.snapshotLength; i++) {
	//console.log(result.snapshotItem(i).innerHTML);
	result.snapshotItem(i).style.border='1px dashed red';
}


