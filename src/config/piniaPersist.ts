import { PersistedStateOptions } from "pinia-plugin-persistedstate";

// pinia持久化参数配置(这是一个做持久化的东西)
const piniaPersistConfig = (key: string) => {
	const persist: PersistedStateOptions = {
		key,
		storage: window.localStorage
	};
	return persist;
};
export default piniaPersistConfig;
