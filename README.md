<div align=center>
  
# ShadePress 

 **The Zero-Build Documentation Engine.**   
 **No Node.js. No Webpack. No React. Just content.**
 
<pre>
<img width="1619" height="843" alt="Landing Page" src="https://github.com/user-attachments/assets/47d93076-cae8-4edc-9b40-5047d8557e14" />
</pre>

    [Live Here](shadowdevforge.github.io/ShadePress)

</div>

---

ShadePress is a **Single Page Application (SPA)** documentation engine that runs entirely in the browser. It compiles Markdown to HTML at runtime, meaning you never have to wait for a build step again.

**Ideal for:** Rust Crates, Lua Scripts, Personal Wikis, and Internal Tools.

## 🚀 Why?

Modern documentation tools (VitePress, Docusaurus) are excellent, but they are heavy. They require a complex toolchain (`npm`, `yarn`, `webpack`, `vite`), produce massive `node_modules` folders, and require CI/CD pipelines to deploy.

**ShadePress is different:**
1.  **Zero Dependencies:** No `package.json`. No `node_modules`.
2.  **Instant Feedback:** Edit a `.md` file, refresh the browser. Done.
3.  **Portable:** Runs on any static file server (Python, Apache, Nginx).
4.  **Hacker Friendly:** Pure Vanilla JS (ES Modules). Easy to fork and modify.

## ✨ Features

*   **Runtime Search:** Client-side crawler builds a full-text search index in memory.
*   **Theming:** Built-in **Catppuccin** (Mocha/Latte) with persistence.
*   **Markdown+:** GitHub Flavored Markdown + Admonitions (`::: tip`).
*   **Code Highlighting:** PrismJS with Autoloader (200+ languages).
*   **Mobile Optimized:** Responsive sidebar, touch-friendly, and fast.
*   **Zero Config Routing:** Hash-based routing (`/#/guide`) requires no server setup.

## 📦 Quick Start

### 1. Clone
```bash
git clone https://github.com/ShadowDevForge/ShadePress.git my-docs
cd my-docs
```

### 2. Run
Because ShadePress uses ES Modules, you must use a local server (browsers block file:// imports for security).

**Python**
```bash
python3 -m http.server
# Open http://localhost:8000
```

**Node (if you have it)**
```bash
npx http-server
# Open http://localhost:8080
```

### 3. Config
Edit `shadepress.config.js` to set your logo, repo, and sidebar links.

## 🛠 Configuration

```javascript
// shadepress.config.js
export default {
    title: 'My Project',
    repo: 'https://github.com/user/project', // Enables "Edit on GitHub"
    
    nav: [
        { text: 'Home', link: '#/' },
        { text: 'Guide', link: '#/guide' }
    ],

    sidebar: [
        {
            text: 'Core',
            items: [
                { text: 'Introduction', link: '#/' },
                { text: 'Installation', link: '#/guide' }
            ]
        },
        {
            text: 'Advanced',
            collapsed: true, // Group is closed by default
            items: [
                { text: 'Architecture', link: '#/advanced' }
            ]
        }
    ]
}
```

## 🏗 Architecture

ShadePress follows a strict **Model-View-Controller** pattern in Vanilla JS:

*   **`shade/main.js`**: Bootstrapper.
*   **`shade/modules/router.js`**: Listens to `hashchange` events.
*   **`shade/modules/renderer.js`**: Fetches Markdown, parses Admonitions, and renders HTML.
*   **`shade/modules/search.js`**: Background worker that indexes content for MiniSearch.

## 🤝 Contributing

We welcome contributions from Systems Engineers, Backend Devs, and anyone who hates `node_modules`.

Refer to [Contribution](CONTRIBUTING.md)

## 📄 License

MIT © [ShadowDevForge](https://github.com/ShadowDevFor)
