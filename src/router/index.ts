import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import LoginFormNew from "../components/LoginForm/LoginFormNew.vue";
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: LoginFormNew,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/login",
		name: "Login",
		component: LoginFormNew,
	},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (store.state.user.token && to.name === "Login") {
        next({ name: "Widgets" });
    } else {
        next();
    }
});

export default router;
