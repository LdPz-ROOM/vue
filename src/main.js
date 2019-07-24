import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import VCharts from 'v-charts'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI, { locale })
Vue.use(iView)
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
