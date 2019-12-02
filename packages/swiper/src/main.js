import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$log = function (log) {
  console.log(log)
}

new Vue({
  render: h => h(App)
}).$mount('#app')
