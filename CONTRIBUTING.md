# Contributing to ShadePress

First off, thank you for considering contributing to ShadePress!

This project exists because I believe documentation tools have become too complex. Our mission is to provide a robust, production-ready documentation engine that **requires zero build steps** and **zero Node.js dependencies**.

If you share this philosophy, I'd love your help.

## 🧠 Core Philosophy

Before you write code, please understand the constraints of this project.

1.  **Zero Build Step:** If your feature requires a build script (Webpack, Vite, Rollup), it will be rejected. The browser is the compiler.
2.  **Zero Dependencies:** This do not use `package.json`. Libraries are loaded via Import Maps (`index.html`) from CDNs or included as single-file ESM modules.
3.  **Vanilla JS:** This use modern ES Modules. No frameworks (React, Vue, Svelte).
4.  **Portability:** The app must run on any static file server (`python -m http.server`, Apache, Nginx) relative to any directory.

## 🛠 local Development

Developing ShadePress is instantaneous.

1.  **Fork and Clone** the repository.
2.  **Run a Server:**
    ```bash
    # Python
    python3 -m http.server
    
    # or Node
    npx http-server
    ```
3.  **Open Browser:** Go to `http://localhost:8000`.
4.  **Hack:** Edit files in `shade/` and refresh the page.

## 📂 Architecture Guide

I follow a strict Separation of Concerns (SoC). Please place your code in the correct module.

*   **`shade/main.js`**: The bootstrapper. Initializes the app state.
*   **`shade/modules/router.js`**: Hash-based routing logic. Handles URL changes.
*   **`shade/modules/renderer.js`**: The "View" layer. Fetches Markdown, sanitizes input, and injects HTML.
*   **`shade/modules/ui.js`**: Handles Sidebar, Navigation, and Theme toggling.
*   **`shade/modules/search.js`**: The Client-side Crawler and Indexer.
*   **`shade/css/styles.css`**: All styling. Uses CSS Variables for theming.

## 📏 Coding Standards

### JavaScript
*   Use **ES Modules** (`import` / `export`).
*   Use **Relative Paths** for imports (e.g., `../shadepress.config.js`). This ensures the app works in subdirectories.
*   Avoid `document.querySelector` inside loops. Cache your elements.
*   Comment your code if the logic is complex (especially regex).

### CSS
*   Use **CSS Variables** (`var(--primary-color)`) for colors and spacing.
*   Do not hardcode hex values (except in `theme.js`).
*   Ensure **Mobile Responsiveness**. Test your changes on a small screen width.

### Icons
*   Use **Inline SVGs** for icons. Do not use Emojis (they render differently across OSs) or Icon Fonts (extra network request).

## 📥 Submitting a Pull Request

1.  Fork the repo and create your branch from `main`.
2.  If you've added code that should be tested, add examples to `docs/guide.md`.
3.  Ensure your code follows the **Relative Path** rule (test by moving the project folder into a sub-directory and checking if it still loads).
4.  Submit the PR!

## 🐛 Reporting Bugs

If you find a bug, please create an issue including:
1.  Browser and OS version.
2.  Console errors (F12).
3.  Steps to reproduce.

---

**Happy Hacking!**
