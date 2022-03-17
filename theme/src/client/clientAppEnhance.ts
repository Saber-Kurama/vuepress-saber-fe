/*
 * @Author: saber
 * @Date: 2022-03-15 10:57:13
 * @LastEditTime: 2022-03-16 18:28:06
 * @LastEditors: saber
 * @Description: 
 */
import { defineClientAppEnhance } from '@vuepress/client'
import 'boxicons/css/boxicons.min.css'
// @ts-ignore
// import vsButton from 'vuesax/dist/vsButton'
import Vuesax from 'vuesax3';
// import 'vuesax/dist/vuesax.css'
import 'vuesax3/dist/vuesax.css'
import Card from './global-components/Card1.vue'

import './styles/index.scss'

// 先执行这个钩子
export default defineClientAppEnhance (({app}) => {
  app.component('Card', Card)
  app.use(Vuesax)
  // app.component('VsButton', vsButton)
})