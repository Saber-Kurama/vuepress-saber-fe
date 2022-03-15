/*
 * @Author: saber
 * @Date: 2022-03-15 10:57:13
 * @LastEditTime: 2022-03-15 16:13:39
 * @LastEditors: saber
 * @Description: 
 */
import { defineClientAppEnhance } from '@vuepress/client'
import 'boxicons/css/boxicons.min.css'
import './styles/index.scss'

// 先执行这个钩子
export default defineClientAppEnhance (() => {
  console.log('defineClientAppEnhance=====111');
})