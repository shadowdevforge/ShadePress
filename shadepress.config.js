export default {
  title: "ShadePress",
  logo: "ShadePress",

  // Repository Settings
  repo: "https://github.com/shadowdevforge/ShadePress",
  branch: "main",
  dir: "",

  // Top Navigation
  nav: [
    { text: "Home", link: "#/" },
    { text: "Guide", link: "#/guide" },
    { text: "Architecture", link: "#/advanced/architecture" },
    {
      text: "GitHub",
      link: "https://github.com/shadowdevforge/ShadePress",
      external: true,
    },
  ],

  // Sidebar Configuration
  sidebar: [
    {
      text: "Introduction",
      items: [
        { text: "What is ShadePress?", link: "#/" },
        { text: "Getting Started", link: "#/guide" },
      ],
    },
    {
      text: "Core Features",
      items: [
        { text: "Markdown Extensions", link: "#/features/markdown" },
        { text: "Runtime Search", link: "#/features/search" },
        { text: "Theming System", link: "#/features/theming" },
      ],
    },
    {
      text: "Advanced",
      collapsed: true, // Demonstrate the collapse feature
      items: [
        { text: "Architecture", link: "#/advanced/architecture" },
        { text: "Customization", link: "#/advanced/customization" },
      ],
    },
  ],
};
