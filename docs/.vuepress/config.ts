/*
 * @Author: saber
 * @Date: 2022-03-14 09:59:34
 * @LastEditTime: 2022-04-24 20:46:41
 * @LastEditors: saber
 * @Description:
 */
import path from "path";
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
// import svgLoader from 'vite-svg-loader';

console.log("__dirname", __dirname);
function getNavbar(lang = "/") {
  return {
    nav: [
      {
        text: "设计",
        link: `/docs/guide/`,
      },
      {
        text: "组件",
        link: `/docs/components/button`,
      },
      {
        text: "指南",
        link: `/docs/guide/`,
      },
      {
        text: "规范",
        link: `/docs/guide/`,
      },
      {
        text: "插件",
        link: `/docs/guide/`,
      },
      {
        text: "物料开发",
        link: `https://arco.design/material/group/?groupId=73`,
      },
      {
        text: "生态系统",
        link: `/docs/guide/`,
      },
      {
        text: "...",
        link: `/docs/guide/`,
      },
    ],
  };
}
export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "前端开发服务平台",
  description: "这是我的第一个 VuePress 站点",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no",
      },
    ],
  ],
  // // 主题和它的配置
  // // theme: '@vuesax/vuepress-theme-vuesax',
  theme: path.resolve(__dirname, "../../theme/lib/node/index.js"),
  // // theme: path.resolve(__dirname, '../../theme-default/lib/node/index.js'),
  // theme: '@vuepress/theme-default',
  themeConfig: {
    nprogress: false,
    logo: "https://vuejs.org/images/logo.png",
    locales: {
      "/": {
        ...getNavbar(),
        sidebar: {
          "/docs/components/": [
            {
              text: "组件",
              // type: 'group',
              title: '组件',
              children: ["/docs/components/README.md", "/docs/components/button/index.md"],
            },
          ],
        },
      },
    },
  },
  bundler: "@vuepress/vite",
  bundlerConfig: {
    viteOptions: {
      plugins: [],
    },
  },
  templateBuild: path.resolve(
    __dirname,
    "../../theme/templates/index.build.html"
  ),
  plugins: [
    [
      "vuepress-plugin-demo-block-vue3",
      {
        componentsDir: path.resolve(__dirname, "./../examples"),
      },
    ],
  ],
});
