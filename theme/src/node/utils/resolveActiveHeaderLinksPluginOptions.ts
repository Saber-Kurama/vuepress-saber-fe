/*
 * @Author: saber
 * @Date: 2022-03-14 21:36:29
 * @LastEditTime: 2022-03-14 21:36:29
 * @LastEditors: saber
 * @Description: 
 */
import type { ActiveHeaderLinksPluginOptions } from '@vuepress/plugin-active-header-links'
import type { DefaultThemePluginsOptions } from '../../shared'

/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
export const resolveActiveHeaderLinksPluginOptions = (
  themePlugins: DefaultThemePluginsOptions
): ActiveHeaderLinksPluginOptions | boolean => {
  if (themePlugins?.activeHeaderLinks === false) {
    return false
  }

  return {
    headerLinkSelector: 'a.sidebar-item',
    headerAnchorSelector: '.header-anchor',
    // should greater than page transition duration
    delay: 300,
  }
}
