// Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// Vite
declare type Recordable<T = any> = Record<string, T>;

// declare这时候这个这个interface就是全局的, 同理对于namesapce也是一样的
// VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码
declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_GLOB_APP_TITLE: string;
	VITE_DROP_CONSOLE: boolean;
	VITE_PROXY_URL: string;
	VITE_BUILD_GZIP: boolean;
	VITE_REPORT: boolean;
}
