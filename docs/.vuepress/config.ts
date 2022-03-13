import path from 'path';
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

console.log('__dirname', __dirname)
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
  // themeConfig: {
  //   logo: 'https://vuejs.org/images/logo.png',
  // },
  theme: path.resolve(__dirname, '../../theme-default/src/node/index.ts'),
  // theme: '@vuepress/theme-default/lib/node/index.js'
});
