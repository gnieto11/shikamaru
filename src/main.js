import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import router from './router/router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
