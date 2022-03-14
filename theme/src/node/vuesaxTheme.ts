/*
 * @Author: saber
 * @Date: 2022-03-14 20:48:41
 * @LastEditTime: 2022-03-14 21:13:41
 * @LastEditors: saber
 * @Description: 
 */
import type { Page, Theme, ThemeConfig } from '@vuepress/core'
import { fs, path } from '@vuepress/utils'

interface VuesaxThemeOptions {
  [key: string]: any
}
export const vuesaxTheme: Theme<VuesaxThemeOptions> = (options, app) => {
  return {
    name: "vuepress2-theme-vuesax",
    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts'),
      404: path.resolve(__dirname, '../client/layouts/404.vue'),
    }
  }
}