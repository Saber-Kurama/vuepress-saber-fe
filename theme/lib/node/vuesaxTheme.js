"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vuesaxTheme = void 0;
const plugin_theme_data_1 = require("@vuepress/plugin-theme-data");
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const vuesaxTheme = ({ themePlugins = {}, ...localeOptions }, app) => {
    if (app.options.bundler.endsWith("vite")) {
        // eslint-disable-next-line import/no-extraneous-dependencies
        app.options.bundlerConfig.viteOptions = require("vite").mergeConfig(app.options.bundlerConfig.viteOptions, {
            css: {
                preprocessorOptions: {
                    scss: { charset: false },
                },
            },
        });
    }
    return {
        name: "vuepress2-theme-vuesax",
        layouts: utils_1.path.resolve(__dirname, "../client/layouts"),
        // layouts: {
        //   Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
        //   404: path.resolve(__dirname, '../client/layouts/404.vue'),
        // }
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, "../client/clientAppEnhance.js"),
        clientAppSetupFiles: utils_1.path.resolve(__dirname, "../client/clientAppSetup.js"),
        plugins: [
            [
                "@vuepress/active-header-links",
                (0, utils_2.resolveActiveHeaderLinksPluginOptions)(themePlugins),
            ],
            // ['@vuepress/palette', { preset: 'sass' }],
            // @vuepress/plugin-nprogress
            // @ts-ignore
            // themePlugins?.nprogress !== false ? nprogressPlugin() : [],
            // @vuepress/plugin-palette
            // @ts-ignore
            // palettePlugin({ preset: "sass" }),
            ['@vuepress/palette', { preset: 'sass' }],
            // @vuepress/plugin-prismjs
            // @ts-ignore
            // themePlugins?.prismjs !== false ? prismjsPlugin() : [],
            // @vuepress/plugin-theme-data
            // @ts-ignore
            (0, plugin_theme_data_1.themeDataPlugin)({ themeData: localeOptions }),
            // ['@vuepress/theme-data', { themeData: localeOptions }],
        ],
    };
};
exports.vuesaxTheme = vuesaxTheme;
