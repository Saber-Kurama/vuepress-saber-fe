/*
 * @Author: saber
 * @Date: 2022-03-15 10:57:13
 * @LastEditTime: 2022-03-15 11:01:19
 * @LastEditors: saber
 * @Description: 
 */
import { defineClientAppEnhance } from '@vuepress/client'

// 先执行这个钩子
export default defineClientAppEnhance (() => {
  console.log('defineClientAppEnhance=====');
})