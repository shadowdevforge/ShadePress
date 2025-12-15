# Architecture

ShadePress is a **Single Page Application (SPA)** that strictly adheres to the "Zero-Build" philosophy. Unlike Static Site Generators (SSGs) like Jekyll or Hugo, which compile Markdown to HTML on a server/CI, ShadePress compiles Markdown to HTML **in the user's browser**.

## Core Philosophy

1.  **Browser as Compiler:** Modern browsers are incredibly fast. We leverage this by shifting the parsing logic to the client.
2.  **ES Modules (ESM):** We use native ESM (`import`/`export`) for all JavaScript. This removes the need for bundlers like Webpack or Rollup.
3.  **Import Maps:** We use `<script type="importmap">` to manage dependencies (Marked, Prism, MiniSearch) cleanly without `package.json` or `node_modules`.

## Data Flow

When a user visits a ShadePress site, the following sequence occurs:

1.  **Boot:** `index.html` loads. It fetches `shadepress.config.js` and the core modules (`main.js`, `router.js`).
2.  **Routing:** The Router reads the URL Hash (e.g., `#/guide`).
3.  **Fetch:** The application makes an asynchronous `fetch()` request for the corresponding Markdown file (e.g., `/docs/guide.md`).
4.  **Parse:**
    *   **Admonitions:** Custom Regex pass to convert `::: tip` to HTML divs.
    *   **Markdown:** Passed through `marked` to generate standard HTML.
    *   **Post-Process:** Links are sanitized, and the "Edit on GitHub" link is appended.
5.  **Render:** The HTML is injected into the DOM.
6.  **Hydrate:**
    *   **PrismJS:** Scans for code blocks and applies syntax highlighting.
    *   **TOC:** Scans headers to build the Table of Contents.
    *   **UI:** Updates sidebar active states and pagination.

## Module Breakdown

### `shade/modules/router.js`
A lightweight Hash Router. It listens for the `hashchange` event. It does not use the History API (`pushState`) to ensure compatibility with "dumb" static file servers that don't support SPA rewrite rules.

### `shade/modules/renderer.js`
The heavy lifter. It coordinates the fetching, parsing, and DOM injection. It handles 404 errors gracefully by rendering a fallback UI if a fetch fails.

### `shade/modules/search.js`
A client-side crawler. It iterates through the `sidebar` array in your config, fetches every page in the background, strips the markdown syntax, and creates an In-Memory Inverted Index using **MiniSearch**.

## Trade-offs

### Pros
*   **Instant Deployment:** Just upload files. No CI/CD pipelines needed.
*   **Portability:** Runs on any static host, or even locally via Python/Node http-server.
*   **Simplicity:** The entire engine is vanilla JavaScript. Easy to debug.

### Cons
*   **SEO:** Because content is rendered via JavaScript, search engines (Google/Bing) generally index it fine, but social media crawlers (Twitter/Facebook cards) will see the blank `index.html` shell.
*   **Initial Load:** Large documentation sites (>1000 pages) might have a higher bandwidth cost for the search indexer, though this is mitigated by browser caching.
