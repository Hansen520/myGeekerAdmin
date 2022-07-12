<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img src="@/assets/images/avatar.gif" alt="avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>{{ $t("header.personalData") }}</el-dropdown-item>
				<el-dropdown-item>{{ $t("header.changePassword") }}</el-dropdown-item>
				<el-dropdown-item divided>{{ $t("header.logout") }}</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- infoDialog -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- passwordDialog -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<style scoped lang="scss">
@import "../index.scss";
</style>
