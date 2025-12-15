# Runtime Search

ShadePress features a powerful, zero-latency search engine that runs entirely in the user's browser.

## How it Works

Because ShadePress has no build step, we cannot generate a `search-index.json` file on the server. Instead, we use a **Just-In-Time (JIT) Crawler**.

1.  **Boot:** When the application loads, the Search Module reads your `shadepress.config.js`.
2.  **Crawl:** It iterates through every link defined in `config.sidebar`.
3.  **Fetch:** In the background, it fetches the raw `.md` file for each link via `fetch()`.
4.  **Index:** It strips the Markdown syntax (removing `**`, `##`, links, etc.) to create a clean text body.
5.  **Build:** It feeds this text into **MiniSearch**, a lightweight memory-based search library.

::: info PERFORMANCE
This process happens asynchronously and usually completes in **under 2 seconds** for typical documentation sites. Because it's cached by the browser, subsequent page loads are instant.
:::

## The Search Indexer

The search logic is located in `shade/modules/search.js`. It uses a "Fuzzy Match" algorithm, meaning it can find results even if there are minor typos.

*   **Boost:** Page Titles are weighted higher (2x) than body content.
*   **Fuzzy:** A threshold of 0.2 allows for partial matching.

## Why this approach?

1.  **Zero Configuration:** You don't need Algolia, local JSON generators, or server-side plugins.
2.  **Always Up-to-Date:** As soon as you save a Markdown file, it is searchable. No re-indexing command required.
3.  **Privacy:** Search queries never leave the user's browser. There is no "Search API."

## Limitations

This approach is optimized for **Documentation Sites** (approx. 100-500 pages).

If you have a massive wiki with 10,000+ pages, fetching them all on client load would consume too much bandwidth. For such scale, a static site generator with server-side indexing is recommended. For 99% of projects, Runtime Search is superior.

