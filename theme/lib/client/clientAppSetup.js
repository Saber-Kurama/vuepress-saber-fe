/*
 * @Author: saber
 * @Date: 2022-03-15 10:56:59
 * @LastEditTime: 2022-03-16 18:21:26
 * @LastEditors: saber
 * @Description:
 */
import { defineClientAppSetup } from '@vuepress/client';
import { setupDarkMode, setupSidebarItems } from './composables';
export default defineClientAppSetup(() => {
    setupDarkMode();
    setupSidebarItems();
    console.log('defineClientAppSetup=======sss=');
});
