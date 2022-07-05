import { isArray } from "@/utils/is";

/**
 * @description 获取localStorage
 * @param key Storage名称
 * @returns {String} Storage值
 */
export function localGet(key: string) {
	const value = window.localStorage.getItem(key);
	try {
		return JSON.parse(window.localStorage.getItem(key) as string);
	} catch (error) {
		return value;
	}
}
