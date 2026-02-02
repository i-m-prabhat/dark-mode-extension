# Force Dark Mode Extension

A powerful Chrome extension that forces a beautiful dark mode on any website with advanced customization options.

## Features

-   **Theme Presets**: Choose from **Classic** (Dark Gray), **Midnight** (Blue-ish), or **OLED** (Pure Black).
-   **Visual Interface**: Sleek card-based UI with a modern design and responsive animations.
-   **Deep Customization**:
    -   **Color Pickers**: Manually select your perfect background and text colors.
    -   **Palette Swatches**: Quick-access colors for popular dark themes.
-   **Smart Persistence**: Settings are saved **per domain**. Enable it once on `google.com`, and it stays enabled for all Google tabs even after reloading.
-   **Premium Design**: Custom icons, a space-themed background, and a polished user experience.

## Installation

1.  Clone this repository.
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **"Developer mode"** in the top right.
4.  Click **"Load unpacked"** and select the extension directory (the root folder containing `manifest.json`).

## How to Use

1.  Click the **Moon Icon** in your toolbar.
2.  **Select a Theme** by clicking on a card (Classic, Midnight, OLED).
3.  Or use the **Color Pickers** to define your own style.
4.  Toggle **Enable Dark Mode** to apply changes.
5.  Your settings are automatically saved for the current website!

## Project Structure

The project follows a clean, industry-standard structure:

```text
root/
├── src/
│   ├── assets/       # Images and static assets
│   ├── background/   # Service worker
│   ├── content/      # Content scripts (page injection)
│   ├── popup/        # UI logic and HTML
│   └── icons/        # Extension icons
└── manifest.json     # Configuration
```

## Contributing

We welcome contributions! To get started:

1.  **Fork & Clone**: Fork the repo and clone it locally.
2.  **Make Changes**:
    -   Logic is split into `src/popup`, `src/content`, and `src/background`.
    -   `manifest.json` handles the configuration.
3.  **Test**: Reload the extension in `chrome://extensions` to see your changes.
4.  **Submit PR**: Push your changes and open a Pull Request.

---
For a deep dive into the code structure, permissions, and data flow, please read the [Architecture Documentation](docs/ARCHITECTURE.md).
