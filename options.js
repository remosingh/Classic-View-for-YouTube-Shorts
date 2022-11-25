// Saves options to chrome.storage
function save_options() {
    var autoForward = document.getElementById('like').checked;
    console.log(autoForward)
    chrome.storage.local.set({
        autoForward: autoForward
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.local.get({
        autoForward: false
    }, function(items) {
      document.getElementById('like').checked = items.autoForward;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);