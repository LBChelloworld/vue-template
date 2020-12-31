import havaBought from './HavaBought.vue'

const components = {
  havaBought
}
export default {
  install(Vue){
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
    })
  }
}