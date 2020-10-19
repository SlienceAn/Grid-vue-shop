import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './route'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/main.css'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet'
import { Icon } from 'leaflet'
Vue.use(ElementUI)
Vue.component("l-map", LMap)
Vue.component("l-tile-layer", LTileLayer)
Vue.component("l-popup", LPopup)
Vue.component("l-icon", LIcon)
Vue.component("l-marker", LMarker)
Vue.config.productionTip = false
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
})
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
