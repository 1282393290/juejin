import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')