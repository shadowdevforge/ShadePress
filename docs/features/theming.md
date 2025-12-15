# Theming System

ShadePress is built on modern CSS variables and utilizes the beautiful **Catppuccin** color palette by default.

## Color Palettes

We integrate two distinct themes automatically:

*   **Dark Mode:** Catppuccin **Mocha**
*   **Light Mode:** Catppuccin **Latte**

The theme toggle in the header persists the user's choice to `localStorage`, so the preference remains across sessions.

## Customizing Colors

You can override any color variable by editing `shade/css/styles.css`. We use CSS Custom Properties (`--var`) for everything.

### Core Variables

```css
:root {
    --nav-height: 3.6rem;
    --sidebar-width: 16rem;
    --bg-color: #ffffff;      /* Page Background */
    --text-color: #2c3e50;    /* Main Text */
    --primary-color: #3eaf7c; /* Links & Accents */
}
```

### Theme Logic (`ui.js`)

The specific Catppuccin colors are injected via JavaScript in `shade/modules/theme.js`. If you want to change the *base* palette (e.g., switch to Dracula or Nord), you can modify the hex codes in that file.

```javascript
// shade/modules/theme.js
export const CATPPUCCIN_COLORS = {
    mocha: {
        base: "#1e1e2e",
        text: "#cdd6f4",
        mauve: "#cba6f7", // Primary Accent
        // ...
    }
};
```

## Mobile Responsiveness

ShadePress is mobile-first.

1.  **Sidebar:** On screens smaller than `768px`, the sidebar collapses into a backdrop-drawer.
2.  **Navigation:** Top header links (GitHub, Guide) automatically migrate into the top of the Sidebar to save space.
3.  **Typography:** Font sizes scale down slightly to ensure readability on small viewports.

::: tip CUSTOM CSS
Because there is no build step, you can simply add a `<link rel="stylesheet" href="/custom.css">` to `index.html` to apply your own overrides on top of ShadePress.
:::
