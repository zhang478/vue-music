import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
	{
		path:'',
		redirect: {
			name: 'Home'
		}
	},
	{
		path:'/home',
		name:'Home',
	    component (resolve) {
	        require(['../page/Home'], resolve)
	    }
	},
	{
		path:'/search',
		name:'Search',
	    component (resolve) {
	        require(['../page/Search'], resolve)
	    }
	},
	{
		path:'/play',
		name:'Play',
	    component (resolve) {
	        require(['../page/PlayAudio'], resolve)
	    }
	},
	{
		path:'/bill',
		name:'Bill',
	    component (resolve) {
	        require(['../page/BillList'], resolve)
	    }
	},
	{
		path:'/song',
		name:'Song',
	    component (resolve) {
	        require(['../page/SongPlay'], resolve)
	    }	
	}
]

const router = new Router({
	mode:'history',
	routes
})

// router.beforeEach((to,from,next) => {
// 	next()
// })

export default router
