<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">😊</div>
		</div>
		<div class="login-form" style="margin-left: -300px">
			<div class="login-logo">
				<img src="" alt="" class="login-icon" />
				<p class="login-text">登入页面</p>
			</div>
			<LoginForm ref="loginRef" :age="'20'" :addredd="['杭州河坊街', '北京恭亲王府']" :obj="obj"></LoginForm>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import { ref, reactive, provide } from "vue";
import LoginForm from "./components/LoginForm.vue";
import { LoginFormExpose } from "./interface/index";
import { Login } from "@/api/interface/index";

// 定义数据类型的两种方法
// const item: Ref<string> = ref("123");
// const item1 = ref<number>(333);

// 使用子组件数据
const loginRef = ref<LoginFormExpose | null>(null);

const obj = reactive<Login.ReqLoginForm>({
	username: "admin",
	password: "123456"
});
// 使用toRefs解构数据（在template中直接用）
// const { username, password } = toRefs(obj);
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
