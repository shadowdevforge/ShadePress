<style>
/* 1. Hide Sidebar & TOC elements */
.sp-sidebar, .sp-toc, .sp-pagination, .edit-link-wrapper { 
display: none !important; 
}

/* 2. FORCE FULL WIDTH CONTENT */
.sp-content { 
margin-left: 0 !important; 
margin-right: 0 !important;
max-width: 100% !important; 
padding: 0 !important;
width: 100%;
}

/* --- Hero Styles --- */
.hero {
text-align: center;
padding: 6rem 1.5rem 4rem;
background: radial-gradient(circle at center, var(--sidebar-bg) 0%, var(--bg-color) 70%);
}

.hero-title {
font-size: 3.5rem;
font-weight: 800;
margin: 0;
letter-spacing: -1px;
line-height: 1.1;
}

.gradient-text {
background: linear-gradient(120deg, var(--primary-color) 30%, #a6e3a1);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;
}

.hero-tagline {
font-size: 1.5rem;
color: var(--subtext-color);
margin: 1.5rem 0 2.5rem;
max-width: 600px;
margin-left: auto;
margin-right: auto;
line-height: 1.5;
}

/* --- Buttons --- */
.actions {
display: flex;
gap: 1rem;
justify-content: center;
margin-bottom: 3rem;
}

.action-btn {
display: inline-block;
padding: 0.8rem 1.6rem;
border-radius: 99px;
font-weight: 600;
text-decoration: none;
transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary {
background: var(--primary-color);
color: var(--bg-color);
border: 1px solid var(--primary-color);
}
.btn-primary:hover {
transform: translateY(-2px);
box-shadow: 0 4px 15px rgba(0,0,0,0.2);
color: var(--bg-color);
}

.btn-secondary {
background: var(--sidebar-bg);
color: var(--text-color);
border: 1px solid var(--border-color);
}
.btn-secondary:hover {
background: var(--border-color);
color: var(--text-color);
}

/* --- Feature Grid --- */
.features-container {
max-width: 1100px;
margin: 0 auto;
padding: 4rem 1.5rem;
}

.features-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
}

.feature-card {
background: var(--sidebar-bg);
padding: 1.5rem;
border-radius: 12px;
border: 1px solid var(--border-color);
transition: border-color 0.2s;
}
.feature-card:hover { border-color: var(--primary-color); }

.feature-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
.feature-title { font-weight: 700; font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-color); }
.feature-desc { color: var(--subtext-color); font-size: 0.95rem; line-height: 1.6; }

.markdown-body h1 { border-bottom: none; }

/* Mobile Tweaks */
@media (max-width: 600px) {
.hero-title { font-size: 2.5rem; }
.hero-tagline { font-size: 1.2rem; }
.actions { flex-direction: column; width: 100%; }
.action-btn { width: 100%; text-align: center; }
}
.footer {
  margin-top: auto;
  background-color: var(--ctp-crust);
  padding: 40px 0;
  border-top: 1px solid var(--ctp-surface0);
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

.footer-link {
  color: var(--ctp-subtext0);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-link:hover {
  color: var(--ctp-mauve);
}

.footer-note {
  font-size: 0.85rem;
  color: var(--ctp-overlay0);
}
</style>

<div class="hero">
<h1 class="hero-title">Shade<span class="gradient-text">Press</span></h1>
<p class="hero-tagline">The Zero-Build Documentation Engine.<br>No Node.js. No Webpack. Just content.</p>
<div class="actions">
<a href="#/guide" class="action-btn btn-primary">Get Started →</a>
<a href="https://github.com/ShadowDevForge/ShadePress" target="_blank" class="action-btn btn-secondary">View on GitHub</a>
</div>
</div>

<div class="features-container">
<div class="features-grid">
<div class="feature-card">
<span class="feature-icon">🚀</span>
<div class="feature-title">Zero Build Step</div>
<div class="feature-desc">Stop waiting for <code>npm run build</code>. ShadePress compiles markdown in the browser instantly. Just edit and refresh.</div>
</div>
<div class="feature-card">
<span class="feature-icon">🔍</span>
<div class="feature-title">Runtime Search</div>
<div class="feature-desc">Built-in crawler indexes your content on the client-side. Full-text search with fuzzy matching, zero server config required.</div>
</div>
<div class="feature-card">
<span class="feature-icon">🎨</span>
<div class="feature-title">Catppuccin Theme</div>
<div class="feature-desc">Comes with beautiful Mocha (Dark) and Latte (Light) themes out of the box. Toggle state is persisted automatically.</div>
</div>
<div class="feature-card">
<span class="feature-icon">📱</span>
<div class="feature-title">Mobile Optimized</div>
<div class="feature-desc">Responsive sidebar, touch-friendly navigation, and a layout that adapts to any screen size seamlessly.</div>
</div>
<div class="feature-card">
<span class="feature-icon">⚡</span>
<div class="feature-title">Lightweight Core</div>
<div class="feature-desc">Powered by Vanilla JS and ES Modules. No heavy framework overhead. The entire engine is under 50kb.</div>
</div>
<div class="feature-card">
<span class="feature-icon">📝</span>
<div class="feature-title">Markdown +</div>
<div class="feature-desc">GitHub Flavored Markdown support plus custom Admonitions, Syntax Highlighting, and Table of Contents.</div>
</div>
</div>
</div>

<div style="max-width: 800px; margin: 0 auto; padding: 2rem 1.5rem;">
<h2 style="text-align: center; margin-bottom: 2rem;">Quick Start</h2>
<div style="background: var(--sidebar-bg); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
<h3 style="margin-top: 0;">1. Clone & Run</h3>
<p style="color: var(--subtext-color);">Get the template and start a static server.</p>
<pre><code class="language-bash">git clone https://github.com/ShadowDevForge/ShadePress.git my-docs
cd my-docs
python3 -m http.server</code></pre>
<h3 style="margin-top: 1.5rem;">2. That's it.</h3>
<p style="color: var(--subtext-color);">Open <code>http://localhost:8000</code>. Edit any file and refresh to see changes.</p>
</div>
</div>

    
<footer class="footer">
<div class="container">
<div class="footer-links">
<a href="https://github.com/shadowdevforge/ShadowToys" target="_blank" class="footer-link">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<polygon
points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
Star on GitHub
</a>
<a href="mailto:shadowdev.forge+contact@gmail.com" class="footer-link">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round">
<path
d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
</path>
</svg>
Contact 
</a>
</div>
</div>
</footer>
