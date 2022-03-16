//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入store
import store from './store'
// 引入公共样式
import './assets/css/base.css'
import './assets/css/icomoon/style.css'
import animated from 'animate.css' // npm install animate.css --save安装，在引入



//关闭Vue的生产提示
Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)

Vue.use(animated)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	router,
	beforeCreate () { 
		// 尽量早的执行挂载全局事件总线对象的操作 
		Vue.prototype.$bus = this 
	},
})
