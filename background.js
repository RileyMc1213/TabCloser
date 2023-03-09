chrome.tabs.onActivated.addListener(function(activeInfo) {
  var tabId = activeInfo.tabId;
  chrome.tabs.get(tabId, function(tab) {
    var lastUsed = new Date(tab.lastAccessed);
    var now = new Date();
    var timeDifference = (now - lastUsed) / 1000 / 60;
    if (timeDifference >= 10) {
      chrome.tabs.remove(tabId);
    }
  });
});
