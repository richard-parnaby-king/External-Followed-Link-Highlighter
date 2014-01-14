// Saves options to localStorage.
function save_options() {
  var el = document.getElementById("autoenable");
  var value = el.checked ? "checked":"unchecked";
	
	chrome.storage.local.set({'autoenable': value}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById("status");
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
			status.innerHTML = "";
		}, 750);
  });
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	chrome.storage.local.get("autoenable", function(value) {
		value = value.autoenable;
		if (value === undefined || !value) {
			return;
		}
		
		var el = document.getElementById("autoenable");
		el.checked = value == "checked" ? "checked" : '';
  });
	
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);