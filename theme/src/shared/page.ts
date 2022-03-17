/*
 * @Author: saber
 * @Date: 2022-03-14 21:32:36
 * @LastEditTime: 2022-03-17 17:36:40
 * @LastEditors: saber
 * @Description: 
 */
import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface DefaultThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface DefaultThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
  heroText?: string
  tagline?: string
  actionText?: string
  actionLink?: string
  features?: any[]
}

export interface DefaultThemeHomePageFrontmatter
  extends DefaultThemePageFrontmatter {
  home: true
  heroImage?: string
  heroImageDark?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  features?: {
    title: string
    details: string
  }[]
  footer?: string
  footerHtml?: boolean
}

export interface DefaultThemeNormalPageFrontmatter
  extends DefaultThemePageFrontmatter {
  home?: false
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}
