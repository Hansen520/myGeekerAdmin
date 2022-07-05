<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">😊</div>
		</div>
		<div class="login-form">
			<div class="login-logo">
				<img src="" alt="" class="login-icon" />
				<p class="login-text">登入页面</p>
			</div>
			<LoginForm ref="loginRef" :age="'20'" :addredd="['杭州河坊街', '北京恭亲王府']" :obj="obj"></LoginForm>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import { ref, Ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import { LoginFormExpose } from "./interface/index";

// 定义数据类型的两种方法
// const item: Ref<string> = ref("123");
// const item1 = ref<number>(333);

const obj = ref;
</script>
<style></style>
