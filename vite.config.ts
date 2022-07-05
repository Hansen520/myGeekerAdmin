import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue"; // 不然地址会报错
import { resolve } from "path";
import { wrapperEnv } from "./src/utils/getEnv";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	console.log(process.cwd(), "vite8"); //终端中执行指令的路径, 项目路径
	const env = loadEnv(mode, process.cwd());
	const viteEnv = wrapperEnv(env);

	return {
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src")
			}
		},
		// server config
		server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: false,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				"/api": {
					// target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
					target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
		plugins: [
			vue(),
			createHtmlPlugin({
				inject: {
					data: {
						title: viteEnv.VITE_GLOB_APP_TITLE
					}
				}
			}),
			// * EsLint 报错信息显示在浏览器界面上
			eslintPlugin(),
			// * name 可以写在 script 标签上
			VueSetupExtend()
		]
	};
});
