declare const zpub2xpub: (z: string) => string;
declare const zpub2address: (zpub: string, limit?: number) => string | string[];
export { zpub2xpub, zpub2address };
