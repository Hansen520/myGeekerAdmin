<template>
	<div class="logo flx-center">
		<img src="@/assets/images/logo.svg" alt="logo" />
		<span v-show="!isCollapse">My Geeker</span>
	</div>
</template>

<script setup lang="ts">
// 接受属性
defineProps<{ isCollapse: boolean }>();
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
