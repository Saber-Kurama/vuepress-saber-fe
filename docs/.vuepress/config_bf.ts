module.exports = {
    // 站点配置
    lang: "zh-CN",
    title: "你好11， VuePress ！",
    description: "这是我的第一个 VuePress 站点",
  
    // 主题和它的配置
    theme: "@vuepress/theme-default",
    themeConfig: {
      logo: "https://vuejs.org/images/logo.png",
      navbar: [
        // NavbarItem
        {
          text: "Foo",
          link: "/foo/",
        },
        // NavbarGroup
        {
          text: "Group",
          children: ["/group/foo.md", "/group/bar.md"],
        },
        // 字符串 - 页面文件路径
        "/bar/README.md",
      ],
      sidebar: {
        "/guide/": [
          {
            text: "Guide",
            children: ["/guide/README.md", "/guide/getting-started.md"],
          },
        ],
        "/docs/components/": [
          {
            text: "组件",
            children: ["/docs/components/README.md", "/docs/components/button/index.md"],
          },
        ],
      },
    },
  };
  