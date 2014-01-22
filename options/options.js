// Saves options to localStorage.
function save_options() {
  var autoenable = document.getElementById("autoenable").checked ? "checked":"unchecked",
			colour = document.getElementById('colour').value;

	chrome.storage.local.set({'autoenable': autoenable, 'colour':colour}, function() {
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
	
	chrome.storage.local.get("colour", function(value) {
		value = value.colour;
		if (value === undefined || !value) {
			value = '#ff0000'; //red
		}

		var el = document.getElementById("colour");
		el.value = value;
  });
	
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);