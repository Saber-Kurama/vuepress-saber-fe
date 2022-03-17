export declare const hashRE: RegExp;
export declare const extRE: RegExp;
export declare const endingSlashRE: RegExp;
export declare const outboundRE: RegExp;
export declare function normalize(path: any): string;
export declare function getHash(path: any): any;
export declare function isExternal(path: any): boolean;
export declare function isMailto(path: any): boolean;
export declare function isTel(path: any): boolean;
export declare function ensureExt(path: any): any;
export declare function isActive(route: any, path: any): boolean;
export declare function resolvePage(pages: any, rawPath: any, base: any): any;
/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export declare function resolveSidebarItems(page: any, regularPath: any, site: any, localePath: any): any;
export declare function groupHeaders(headers: any): any;
export declare function resolveNavLinkItem(linkItem: any): any;
/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
export declare function resolveMatchingConfig(regularPath: any, config: any): {
    base: string;
    config: any;
} | {
    base?: undefined;
    config?: undefined;
};
