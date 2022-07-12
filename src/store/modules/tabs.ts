import { defineStore } from "pinia";
import { TabPaneProps } from "element-plus";
import { TabsState } from "../interface";
import piniaPersistConfig from "@/config/piniaPersist";
import { HOME_URL, TABS_BLACK_LIST } from "@/config/config";
import router from "@/routers/index";

export const TabsStore = defineStore({
	id: "TabsState",
	state: (): TabsState => ({
		tabsMenuValue: HOME_URL,
		// 这是已有菜单，不用删除
		tabsMenuList: [{ title: "首页", path: HOME_URL, icon: "home-filled", close: false }]
	}),
	getters: {},
	actions: {
		// add tabs
		async addTabs(tabItem: Menu.MenuOptions) {
			// not add tabs black list, 黑名单不用添加到数组中去
			if (TABS_BLACK_LIST.includes(tabItem.path)) return;
			const tabInfo: Menu.MenuOptions = {
				title: tabItem.title,
				path: tabItem.path,
				close: tabItem.close
			};
			// 遍历所有，只要数组里面没有这一项就往里面添加
			if (this.tabsMenuList.every(item => item.path !== tabItem.path)) {
				this.tabsMenuList.push(tabInfo);
			}
			// 并设置为当前路由
			this.setTabsMenuValue(tabItem.path);
			router.push(tabItem.path); // 路由跳转
		},
		// 移出tabs
		async removeTabs(tabPath: string) {
			let tabsMenuValue = this.tabsMenuValue;
			const tabsMenuList = this.tabsMenuList;
			console.log(tabPath, tabsMenuValue, 35);
			if (tabsMenuValue === tabPath) {
				tabsMenuList.forEach((item, index) => {
					// 没有找到直接退出
					if (item.path !== tabPath) return;
					// 下一个跳转标签为前或后标签，
					const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
					console.log(nextTab, 45);
					if (!nextTab) return;
					tabsMenuValue = nextTab.path;
					router.push(nextTab.path);
				});
			}
			this.tabsMenuValue = tabsMenuValue;
			this.tabsMenuList = tabsMenuList.filter(item => item.path !== tabPath);
		},
		// change tabs
		async changeTabs(tabItem: TabPaneProps) {
			this.tabsMenuList.forEach(item => {
				if (item.title === tabItem.label) {
					router.push(item.path);
				}
			});
		},
		// Set TabsMenuValue
		async setTabsMenuValue(tabsMenuValue: string) {
			this.tabsMenuValue = tabsMenuValue;
		},
		// Set TabsMenuList
		async setTabsMenuList(tabsMenuList: Menu.MenuOptions[]) {
			this.tabsMenuList = tabsMenuList;
		},
		// close MultipleTab
		async closeMultipleTab(tabsMenuValue?: string) {
			console.log(tabsMenuValue, 65);
			this.tabsMenuList = this.tabsMenuList.filter(item => {
				return item.path === tabsMenuValue || item.path === HOME_URL;
			});
		},
		// go home
		async goHome() {
			router.push(HOME_URL);
			this.tabsMenuValue = HOME_URL;
		}
	},
	persist: piniaPersistConfig("TabsState")
});
