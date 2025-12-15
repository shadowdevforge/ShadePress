# Customization

ShadePress is designed to be hackable. Because there is no compilation step, you can modify the engine logic directly and see changes instantly.

## Customizing Styles

### CSS Variables
The easiest way to change the look is to override the CSS variables in `shade/css/styles.css`.

```css
:root {
    --primary-color: #ff5722; /* Change accent to Orange */
    --nav-height: 4rem;       /* Taller header */
    --sidebar-width: 18rem;   /* Wider sidebar */
}
```

### Custom Fonts
To use a custom font (e.g., from Google Fonts):
1.  Add the `<link>` tag to the `<head>` in `index.html`.
2.  Update the `--font-sans` variable in `shade/css/styles.css`.

## Adding Analytics

To add Google Analytics or Plausible, you simply edit `index.html`.

```html
<head>
    <!-- ... existing tags ... -->
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-XXXXX-Y');
    </script>
</head>
```

::: tip SPA TRACKING
Because ShadePress is an SPA, standard page view tracking might not catch route changes. You may need to hook into `shade/modules/router.js` to manually trigger page views on hash change.
:::

## Extending Logic

### Adding New Markdown Plugins
We use `marked` as the parser. If you want to add support for math (KaTeX) or other features, you can update the import map in `index.html` to point to a Marked extension, and then initialize it in `shade/modules/renderer.js`.

### Custom Components
Since we don't use a framework like Vue or React, "components" are just HTML strings or JavaScript functions.

If you want to inject a specific widget (like a newsletter signup) into every page:
1.  Open `shade/modules/renderer.js`.
2.  In the `renderPage` function, simply append your HTML string to `htmlContent` before it is set to `innerHTML`.

```javascript
// Example: Inject a footer on every page
html += `
    <footer class="my-custom-footer">
        <p>Built with ShadePress</p>
    </footer>
`;
```

## Deployment Configuration

### GitHub Pages
GitHub Pages ignores files starting with `_` by default. While ShadePress doesn't strictly use underscores, it is best practice to add an empty `.nojekyll` file to your root directory to bypass Jekyll processing entirely.

### Apache / Nginx
No special configuration is needed. ShadePress relies on Hash Routing (`/#/page`), so you do **not** need to set up `try_files` or rewrite rules. It works on any standard file server.
