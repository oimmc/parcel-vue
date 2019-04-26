import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/home',
    name: 'home',
    meta: {
        title: 'Home'
    },
    component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
}, {
    path: '/workbench',
    name: 'workbench',
    meta: {
        title: 'Workbench'
    },
    component: () => import( /* webpackChunkName: "workbench" */ '../views/Workbench.vue')
}, {
	path: '/',
	name: 'login',
	meta: {
		title: 'Login'
	},
	component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
}]

export default routes