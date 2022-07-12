<template>
	<div class="tabs-box">
		<div class="tabs-menu">
			<el-tabs v-model="tabsMenuValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
				<el-tab-pane
					v-for="item in tabsMenuList"
					:key="item.path"
					:path="item.path"
					:label="item.title"
					:name="item.path"
					:closable="item.close"
				>
					<template #label>
						<!-- 自定义标题 -->
						<el-icon class="tabs-icon" v-if="item.icon">
							<component :is="item.icon"></component>
						</el-icon>
						{{ item.title }}
					</template>
				</el-tab-pane>
			</el-tabs>
			<MoreButton></MoreButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { TabsStore } from "@/store/modules/tabs";
import { TabsPaneContext } from "element-plus";
import MoreButton from "./components/MoreButton.vue";

const tabStore = TabsStore();
const tabsMenuList = computed(() => tabStore.tabsMenuList);
// 这里其实是设置和读取值
const tabsMenuValue = computed({
	get: () => {
		return tabStore.tabsMenuValue;
	},
	set: val => {
		tabStore.setTabsMenuValue(val);
	}
});
const route = useRoute();
const router = useRouter();
// 监听路由的变化（防止后退前进不变化 tabsMenuValue），往标签数组里面推值
watch(
	() => route.path,
	() => {
		let params = {
			title: route.meta.title as string,
			path: route.path,
			close: true
		};
		tabStore.addTabs(params);
	},
	{
		immediate: true
	}
);

// Tab Click
const tabClick = (tabItem: TabsPaneContext) => {
	let path = tabItem.props.name as string;
	router.push(path);
};

// Remove Tab
const removeTab = (activeTabPath: string) => {
	tabStore.removeTabs(activeTabPath);
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
