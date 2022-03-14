/*
 * @Author: saber
 * @Date: 2022-03-14 20:48:41
 * @LastEditTime: 2022-03-14 21:41:24
 * @LastEditors: saber
 * @Description: 
 */
import type { Page, Theme, ThemeConfig } from '@vuepress/core'
import { fs, path } from '@vuepress/utils'
import {
  // assignDefaultLocaleOptions,
  resolveActiveHeaderLinksPluginOptions,
  // resolveContainerPluginOptions,
  // resolveContainerPluginOptionsForCodeGroup,
  // resolveContainerPluginOptionsForCodeGroupItem,
  // resolveContainerPluginOptionsForDetails,
  // resolveExternalLinkIconPluginOptions,
  // resolveGitPluginOptions,
  // resolveMediumZoomPluginOptions,
} from './utils'

interface VuesaxThemeOptions {
  [key: string]: any
}
export const vuesaxTheme: Theme<VuesaxThemeOptions> = ({ themePlugins = {}, ...localeOptions }, app) => {
  return {
    name: "vuepress2-theme-vuesax",
    layouts: path.resolve(__dirname, '../client/layouts'),
    // layouts: {
    //   Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
    //   404: path.resolve(__dirname, '../client/layouts/404.vue'),
    // }
    plugins: [
      [
        '@vuepress/active-header-links',
        // resolveActiveHeaderLinksPluginOptions(themePlugins),
      ],
    ]
  }
}