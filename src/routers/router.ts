import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// * 导入所有router
// 在使用vite 时，发现不能使用require.context 自动导入modules,可以使用import.meta.globEager替换
// 获取modules里面的所有文件
const metaRouters = import.meta.globEager("./modules/*.ts");
// * 处理路由
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});
console.log(routerArray, 15);
// * 处理路由
export const routes: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: { name: "login" }
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...routerArray,
	{
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});
export default router;
