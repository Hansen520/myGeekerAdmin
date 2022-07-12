<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img src="@/assets/images/avatar.gif" alt="avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>{{ $t("header.personalData") }}</el-dropdown-item>
				<el-dropdown-item>{{ $t("header.changePassword") }}</el-dropdown-item>
				<el-dropdown-item @click="logout" divided>{{ $t("header.logout") }}</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- infoDialog -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- passwordDialog -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup lang="ts">
import InfoDialog from "./InfoDialog.vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { GlobalStore } from "@/store";
const router = useRouter();
const globalStore = GlobalStore();

// logout
// logout
const logout = () => {
	ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning"
	}).then(() => {
		router.push({ name: "login" });
		globalStore.setToken("");
		ElMessage({
			type: "success",
			message: "退出登录成功！"
		});
	});
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
