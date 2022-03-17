"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vuesaxTheme = void 0;
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const vuesaxTheme = ({ themePlugins = {}, ...localeOptions }, app) => {
    if (app.options.bundler.endsWith('vite')) {
        // eslint-disable-next-line import/no-extraneous-dependencies
        app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(app.options.bundlerConfig.viteOptions, {
            css: {
                preprocessorOptions: {
                    scss: { charset: false },
                },
            },
        });
    }
    return {
        name: "vuepress2-theme-vuesax",
        layouts: utils_1.path.resolve(__dirname, '../client/layouts'),
        // layouts: {
        //   Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
        //   404: path.resolve(__dirname, '../client/layouts/404.vue'),
        // }
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, '../client/clientAppEnhance.js'),
        clientAppSetupFiles: utils_1.path.resolve(__dirname, '../client/clientAppSetup.js'),
        plugins: [
            [
                '@vuepress/active-header-links',
                (0, utils_2.resolveActiveHeaderLinksPluginOptions)(themePlugins),
            ],
            ['@vuepress/theme-data', { themeData: localeOptions }],
        ]
    };
};
exports.vuesaxTheme = vuesaxTheme;
