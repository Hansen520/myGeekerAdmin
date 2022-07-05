import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export function isDevFn(mode: string): boolean {
	return mode === "development";
}

export function isProdFn(mode: string): boolean {
	return mode === "production";
}

/**
 * 是否生成包
 */
export function isReportMode(): boolean {
	return process.env.VITE_REPORT === "true";
}

// 读取 所有环境遍历配置文件增加到process.env中
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};
	console.log(envConf, "vite", 23);
	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/, "\n"); // 编译换行
		realName = realName === "true" ? true : realName === "false" ? false : realName;
		if (envName === "VITE_PORT") {
			realName = Number(realName);
		}
		if (envName === "VITE_PROXY") {
			try {
				realName = JSON.parse(realName);
			} catch (error) {}
		}
		ret[envName] = realName;
		process.env[envName] = realName;
	}
	console.log(ret, 39, "vite");
	return ret;
}
