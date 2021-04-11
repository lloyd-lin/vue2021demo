import Vue from 'vue'
import App from './App.vue'
import * as Echarts from 'echarts'
import router from './router'
import VueECharts from 'vue-echarts'
import './plugins/element.js'
import './plugins/wordcloud.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
// 组件引用
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
