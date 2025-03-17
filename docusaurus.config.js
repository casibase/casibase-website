const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Casibase · Open-Source LangChain-like AI Knowledge Database & Chat Bot with Admin UI and multi-model support (ChatGPT, Claude, Llama 3, DeepSeek R1, HuggingFace, etc.)",
  url: "https://casibase.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "casbin", // Usually your GitHub org/user name.
  projectName: "casibase-website", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "de", "zh", "ja", "ko", "uk", "ar"],
  },
  themeConfig: {
    metadata: [{name: "Casibase", content: "Open-Source LangChain-like AI Knowledge Database & Chat Bot with Admin UI and multi-model support (ChatGPT, Claude, Llama 3, DeepSeek R1, HuggingFace, etc.)"}],
    // algolia: {
    //   appId: "appId",
    //   apiKey: "apiKey",
    //   indexName: "casibase",
    //   contextualSearch: true,
    // },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    hotjar: {
      applicationId: "3575159",
    },
    navbar: {
      title: "Casibase",
      logo: {
        alt: "Casibase Logo",
        src: "img/casibase.png",
      },
      // hideOnScroll: true,
      items: [
        {
          type: "doc",
          docId: "overview",
          position: "left",
          label: "Docs",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          label: "Help",
          to: "/help",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: "<hr style=\"margin: 0.3rem 0;\">",
            },
            {
              to: "https://crowdin.com/project/casibase-website",
              label: "Help translate",
            },
          ],
        },
        {
          href: "https://github.com/casibase/casibase",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "custom-community",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/docs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/casibase/casibase",
            },
            {
              label: "Discord",
              href: "https://discord.gg/devUNrWXrh",
            },
            {
              label: "QQ Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/qq_casibase.png",
            },
            {
              label: "Wechat Group",
              href: "https://cdn.casdoor.com/casdoor/resource/built-in/admin/wechat.jpg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/casibase/casibase",
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casibase&repo=casibase&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casibase</iframe>
              `,
            },
            {
              html: `
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?236a433b817aa402ad3d5276099da3d4";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
`,
            },
            {
              html: "<div class=\"placeholderads\"></div>",
            },
          ],
        },
      ],
      logo: {
        alt: "Casibase Logo",
        src: "img/casibase.png",
        href: "https://casibase.org/",
        width: 50,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casibase contributors.`,
    },
    prism: {
      additionalLanguages: ["nginx", "java", "properties", "groovy", "ruby"],
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    docs: {
      sidebar: {hideable: true},
    },
  },
  // // https://docusaurus.io/docs/markdown-features/diagrams#configuration
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // gtag: {
        //   trackingID: "",
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: ({docPath}) => {
            return `https://github.com/casibase/casibase-website/edit/master/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({blogDirPath, blogPath}) => {
            return `https://github.com/casibase/casibase-website/edit/master/${blogDirPath}/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-hotjar"],
  scripts: [
    {
      src: "/js/isMainland.js",
      async: true,
    },
    {
      src: "/js/casibase.js",
      async: true,
    },
  ],
};
