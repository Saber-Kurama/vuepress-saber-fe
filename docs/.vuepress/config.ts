/*
 * @Author: saber
 * @Date: 2022-03-14 09:59:34
 * @LastEditTime: 2022-03-17 20:31:06
 * @LastEditors: saber
 * @Description: 
 */
import path from 'path';
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
// import svgLoader from 'vite-svg-loader';

console.log('__dirname', __dirname)
function getNavbar (lang = '/') {
  return {
    nav: [
      {
        text: '设计',
        link: `/docs/guide/`,
      },
      {
        text: '组件',
        link: `/docs/guide/`,
      },
      {
        text: '指南',
        link: `/docs/guide/`,
      },
      {
        text: '规范',
        link: `/docs/guide/`,
      },
      {
        text: '插件',
        link: `/docs/guide/`,
      },
      {
        text: '物料开发',
        link: `/docs/guide/`,
      },
      {
        text: '生态系统',
        link: `/docs/guide/`,
      },
      {
        text: '...',
        link: `/docs/guide/`,
      }

    ]
  }
}
export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: '前端开发服务平台',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
  ],
  // // 主题和它的配置
  // theme: '@vuesax/vuepress-theme-vuesax',
  theme: path.resolve(__dirname, '../../theme/lib/node/index.js'),
  // theme: path.resolve(__dirname, '../../theme-default/lib/node/index.js'),
  // theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales:{
      '/': {
        ...getNavbar(),
      }
    }
  },
  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      plugins: []
    }
  },
  templateBuild: path.resolve(__dirname, '../../theme/templates/index.build.html') 
  // theme: '@vuepress/theme-default/lib/node/index.js'
});
