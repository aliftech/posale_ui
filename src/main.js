import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './plugins/api';

Vue.use(VueAxios, axios)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    console.log(this.$axios ? 'axios plugin works' : 'axios plugin does not work');
  }
}).$mount('#app')
