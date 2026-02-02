chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type === "TOGGLE_DARK_MODE") {
    if (msg.tabId) {
      chrome.tabs.sendMessage(msg.tabId, msg);
    }
  }
});
