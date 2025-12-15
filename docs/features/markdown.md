# Markdown Extensions

ShadePress supports **GitHub Flavored Markdown (GFM)** out of the box, along with several custom enhancements designed for technical documentation.

## Admonitions (Callouts)

We support four distinct types of callout blocks to highlight content. These are parsed at runtime using custom Regex.

::: tip PRO TIP
Use tips to guide users towards best practices or shortcuts.
:::

::: info INFORMATION
General information that provides context but isn't critical.
:::

::: warning WARNING
Alert users to potential pitfalls or important configuration details.
:::

::: danger DANGER ZONE
Critical alerts for irreversible actions or security risks.
:::

### Syntax
To create an admonition, wrap your text in `:::` followed by the type.

```markdown
::: tip MY TITLE
Content goes here...
:::
```

## Syntax Highlighting

Code blocks are automatically highlighted using **PrismJS**. We use the **Autoloader** plugin, which fetches languages on-demand from a CDN. This means you don't need to configure languages in advance—if Prism supports it, it works.

**JavaScript**
```javascript
const hello = "world";
console.log(hello);
```

**Rust**
```rust
fn main() {
    println!("Zero Build Systems are the future.");
}
```

**Bash**
```bash
git clone https://github.com/ShadowDevForge/ShadePress
```

## Tables

Standard GFM tables are supported and styled automatically.

| Feature | Support | Implementation |
| :--- | :---: | :--- |
| **Italics** | ✅ | `*text*` |
| **Bold** | ✅ | `**text**` |
| **Strikethrough** | ✅ | `~~text~~` |

## Task Lists

Perfect for tracking progress.

- [x] Create a Zero-Build Engine
- [x] Implement Runtime Search
- [ ] Take over the world

## Images & Links

Links are automatically routed. If you link to another markdown file using `#/path/to/file`, the router handles it without a page reload.

[Go to Search Features](#/features/search)
