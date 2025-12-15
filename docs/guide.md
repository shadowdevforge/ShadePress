# Getting Started

Welcome to **ShadePress**: the zero-build documentation engine. No Node.js. No Webpack. Just content.

## 1. Installation

ShadePress is a template, not a library. You do not install it via `npm` or any package manager.

```bash
git clone https://github.com/ShadowDevForge/ShadePress.git my-docs
cd my-docs
```

## 2. Running Locally

To view your documentation, you need to serve the files using a static file server. You can use any static file server, but we recommend one of the following:

### The Easiest Way (Python)

If you have Python installed (most systems do), the built-in server is the quickest:

```bash
python3 -m http.server
```

Open your web browser and navigate to [http://localhost:8000](http://localhost:8000).

### The Node Way (Optional)

If you have Node.js installed:

```bash
npx http-server
```

Open your web browser and navigate to [http://localhost:8080](http://localhost:8080).

### VS Code (Optional)

If you use VS Code, install the "Live Server" extension and click the "Go Live" button at the bottom right of your editor. This provides auto-reload functionality for edits.

## 3. Directory Structure

ShadePress organizes files into an intuitive structure.

```text
/ (Root)
├── index.html              # The App Shell (Entry Point)
├── shadepress.config.js    # Site Configuration
│
├── docs/                   # 📂 YOUR CONTENT
│   ├── index.md            # Landing Page (#/)
│   ├── guide.md            # This Guide (#/guide)
│   ├── assets/             # Images
│   └── api/
│       └── v1.md           # Nested Page (#/api/v1)
│
└── shade/                  # ⚙️ THE ENGINE (Do not edit)
    ├── main.js
    ├── css/
    └── modules/
```

## 4. Configuration

Customize your site through the `shadepress.config.js` file in the project's root directory.

```javascript
export default {
    title: 'My Documentation',     // The website title
    logo: 'My Docs',          // The logo (text or image URL)
    
    // GitHub Repository Details (enables "Edit this page" link)
    repo: 'https://github.com/user/repo',
    branch: 'main',
    dir: 'docs',             // Set this *only* if your docs are in a subfolder within the repo.
    // For instance if the site lives at github.com/user/repo/docs,
    // then this needs to be set to "docs".

    // Main Navigation (Displayed in the header)
    nav: [
        { text: 'Home', link: '#/' },
        { text: 'Guide', link: '#/guide' },
        { text: 'API', link: '#/api/v1',  }, // example of a link
    ],

    // Sidebar Navigation
    sidebar: [
        {
            text: 'Basics',
            items: [
                { text: 'Introduction', link: '#/' },
                { text: 'Installation', link: '#/guide' }
            ]
        },
        {
            text: 'API',
            collapsed: true, // A group starts closed
            items: [
                { text: 'Version 1', link: '#/api/v1' }
            ]
        }
    ]
}
```

## 5. Writing Content

ShadePress extends standard Markdown with additional features.

### Routing Logic

ShadePress utilizes hash-based routing. Links defined in your `shadepress.config.js` sidebar map directly to files located within the `docs/` directory.

| Config Link | File Loaded |
| :--- | :--- |
| `#/` | `/docs/index.md` |
| `#/guide` | `/docs/guide.md` |
| `#/api/v1` | `/docs/api/v1.md` |

::: warning FILE EXTENSIONS
Do not include the `.md` file extension in your configuration links. For example, use `#/guide` instead of `#/guide.md`.
:::

### Admonitions (Callouts)

Use these callout blocks to highlight important information.

```markdown
::: tip PRO TIP
This is a helpful hint.
:::

::: warning CAUTION
Be careful with this setting.
:::

::: danger DANGER ZONE
This action is irreversible.
:::

::: info NOTE
Just some extra context.
:::
```

### Code Blocks

Syntax highlighting is automatically applied to code blocks using PrismJS.

```rust
fn main() {
    println!("Hello, World!");
}
```

### Images

To display images, place them in the `docs/assets/` directory and use relative paths in your Markdown:

```markdown
![My Screenshot](./assets/screenshot.png)
```

## 6. Deployment

Since ShadePress generates no build artifacts, deployment is straightforward.

### GitHub Pages

1.  Push your code to a public GitHub repository.
2.  Go to your repository's **Settings > Pages**.
3.  Set the **Source** to deploy from the `main` branch.
4.  Make sure the **root** directory is selected.
5.  If your `index.html` is in a subfolder of your repo, set the Source as `/project/ShadePress/`
6.  The GitHub Pages deployment may take a few minutes.

### Netlify / Vercel

1.  Connect your Git repository to your Netlify or Vercel account.
2.  **Build Command:** Leave this field blank.
3.  **Output Directory:** Set this to `.` (the project root directory).
4.  Deploy.

::: tip CACHING
Because ShadePress dynamically fetches Markdown files, browsers aggressively cache the content in production. If you update a page and don't see changes immediately, perform a hard refresh (e.g., Ctrl + Shift + R) to clear the cache.
:::
