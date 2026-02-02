
document.addEventListener('DOMContentLoaded', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (!tab) return; 

  const storageKey = `darkMode_${tab.id}`;
  
  // Load initial state
  const data = await chrome.storage.local.get(storageKey);
  let enabled = data[storageKey] || false;
  
  const updateButton = (isEnabled) => {
    document.getElementById("toggle").innerText = isEnabled ? "Disable Dark Mode" : "Enable Dark Mode";
  };
  
  updateButton(enabled);

  document.getElementById("toggle").onclick = async () => {
    enabled = !enabled;
    await chrome.storage.local.set({ [storageKey]: enabled });
    updateButton(enabled);

    chrome.runtime.sendMessage({
      type: "TOGGLE_DARK_MODE",
      enabled,
      tabId: tab.id
    });
  };
});

