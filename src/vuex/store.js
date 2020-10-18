import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store = new vuex.Store({
    state: {
        cate: ["MOBILE PHONES","DESKTOP","LAPTOP","ACCESSORIES","SOFTWARE","SPORTS & FITNESS","FOOTWEAR","JEWELLERY","CLOTHING","HOME DECOR & KITCHEN","BEAUTY & HEALTHCARE"],
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
