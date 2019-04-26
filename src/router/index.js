import Vue from 'vue'
import Router from 'vue-router'
import routes from './route'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

router.beforeEach((to, from, next) => {
	const isLogin = false
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!isLogin) {
			next({
				path: '/login'
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

router.afterEach(route => {
	document.title = route.meta.title
	// NProgress.done()
})

export default router