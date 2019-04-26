import Vue from 'vue'
import router from './src/router/index'
import App from './src/App.vue'

Vue.config.productionTip = false

new Vue({
    router,
	render: h => h(App)
}).$mount('#root')