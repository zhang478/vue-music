import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	number:'',
	count:'',
	id:'',
	order:''
}

const mutations = {
	cirnumber:function(state,numb){
		state.number = numb
		// console.log(state.number)
	}
}

const store = new Vuex.Store({
	state,
	mutations
})

export default store