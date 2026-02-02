# Force Dark Mode Extension

A simple Chrome extension that forces dark mode on any website by injecting custom CSS.

## How it Works

The extension operates using three main components:
1.  **Popup (`popup.js`)**: Handles the user interaction for toggling dark mode. It communicates with the background script and persists the state (enabled/disabled) using `chrome.storage.local` keyed by the specific tab ID.
2.  **Background (`background.js`)**: Acts as a messenger. It receives the toggle command from the popup and forwards it to the content script running in the active tab.
3.  **Content Script (`content.js`)**: Injects a `<style>` block into the page's `<head>` that overrides background and text colors to a dark theme (`#1e1e1e` background, `#e0e0e0` text).

## How to Use

1.  **Installation**:
    -   Clone this repository.
    -   Open Chrome and navigate to `chrome://extensions`.
    -   Enable "Developer mode" in the top right.
    -   Click "Load unpacked" and select the extension directory.
2.  **Toggling Dark Mode**:
    -   Click the extension icon in the toolbar.
    -   Click **"Enable Dark Mode"** to darken the current page.
    -   Click **"Disable Dark Mode"** to return the page to normal.

## Contributing

We welcome contributions! To get started:

1.  **Fork & Clone**: Fork the repo and clone it locally.
2.  **Make Changes**:
    -   `manifest.json`: Configuration and permissions.
    -   `content.js`: The styling logic (adjust colors here).
    -   `popup.js` / `popup.html`: The UI logic.
3.  **Test**: Reload the extension in `chrome://extensions` to see your changes.
4.  **Submit PR**: Push your changes and open a Pull Request.

---
**Note**: The background color is currently set to `#1e1e1e` (VS Code Dark). To change it, edit `content.js` and `popup.html`.

For a deep dive into the code structure, permissions, and data flow, please read the [Architecture Documentation](docs/ARCHITECTURE.md).
