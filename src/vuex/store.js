import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store = new vuex.Store({
    state: {
        cate: ["運動","情趣","垃圾","運動","情趣","垃圾","運動","情趣"],
        carousel: [],
        cart: []
    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    actions: {

    }
})

export default store
