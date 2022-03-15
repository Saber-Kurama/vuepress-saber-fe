/*
 * @Author: saber
 * @Date: 2022-03-14 20:48:41
 * @LastEditTime: 2022-03-15 11:16:37
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
  if (app.options.bundler.endsWith('vite')) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(
      app.options.bundlerConfig.viteOptions,
      {
        css: {
          preprocessorOptions: {
            scss: { charset: false },
          },
        },
      }
    )
  }
  return {
    name: "vuepress2-theme-vuesax",
    layouts: path.resolve(__dirname, '../client/layouts'),
    // layouts: {
    //   Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
    //   404: path.resolve(__dirname, '../client/layouts/404.vue'),
    // }
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),

    clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetup.js'),
    plugins: [
      [
        '@vuepress/active-header-links',
        resolveActiveHeaderLinksPluginOptions(themePlugins),
      ],
      ['@vuepress/theme-data', { themeData: localeOptions }],
    ]
  }
}