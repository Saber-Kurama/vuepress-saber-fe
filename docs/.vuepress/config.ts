/*
 * @Author: saber
 * @Date: 2022-03-14 09:59:34
 * @LastEditTime: 2022-03-15 17:42:59
 * @LastEditors: saber
 * @Description: 
 */
import path from 'path';
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import svgLoader from 'vite-svg-loader';

console.log('__dirname', __dirname)
function getNavbar (lang = '/') {
  return {
    nav: [
      {
        text: '设计',
        link: `docs/guide/`,
      },
      {
        text: '设计',
        link: `docs/guide/`,
      }
    ]
  }
}
export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: '你好， VuePress ！',
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
      plugins: [svgLoader()]
    }
  }, 
  // theme: '@vuepress/theme-default/lib/node/index.js'
});
