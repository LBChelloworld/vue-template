import Vue from 'vue'
import App from './App.vue'
import router from './router'

//* 重置样式
import '@/assets/css/reset.css'
//* 重置vantUI样式
import '@/assets/css/resetui.css'

//* 导入公用组件
import components from './components'
Vue.use(components)

//* 导入自定义指令
import directives from './directives'
Vue.use(directives)

//* 导入一次封装的 axios
import {get, post} from '@/assets/js/http'
Vue.prototype.$get = get
Vue.prototype.$post = post

//* 导入公用函数
import utils from '@/assets/js/util';
Vue.prototype.$utils = utils

//* 引入全局状态管理
import {store, mutations} from '@/store'
Vue.prototype.$store = store
Vue.prototype.$mutations = mutations

//* 按需引入vant
import '@/assets/js/vant'
//* vant移动端适配--本项目暂时无需
// import 'amfe-flexible/index.js'

//* 微信自定义分享
import WXConfig from './assets/js/wx'
Vue.prototype.$WXConfig = WXConfig

//* 关闭生产环境提示
Vue.config.productionTip = process.env.NODE_ENV === 'production';

//* 时间过滤2位
Vue.filter('dateFormat', function (originValue) {
  return originValue < 10? "0" + originValue : originValue
})

//* 全局钩子
router.beforeEach((to,from,next)=>{
  // 添加标题
  document.title = to.meta.title
  // 是否分享
  if(utils.appOrBrowser()){
    to.meta.share ? utils.ifShare(true) : utils.ifShare(false)
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
