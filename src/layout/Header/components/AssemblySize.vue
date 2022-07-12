<template>
	<el-dropdown trigger="click" @command="setAssemblySize">
		<span>
			<el-tootip effect="dart" :content="12" placement="bottom">
				<i class="iconfont icon-contentright icon-style"></i>
			</el-tootip>
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item v-for="item in assemblySizeList" :key="item" :disabled="assemblySize === item" :command="item">
					{{ assemblySizeListCh[item] }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { GlobalStore } from "@/store";

const globalStore = GlobalStore();
const assemblySize = computed((): string => globalStore.assemblySize);

const assemblySizeListCh = reactive<{ [propName: string]: any }>({
	default: "默认",
	large: "大型",
	small: "小型"
});

const assemblySizeList = reactive<string[]>(["default", "large", "small"]);

const setAssemblySize = (item: string) => {
	if (assemblySize.value === item) return;
	globalStore.setAssemblySizeSize(item);
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
