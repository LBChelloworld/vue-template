import copy from './copy'
import title from './title'
import permission from './permission'
import waterMarker from './waterMarker'
import longpress from './longpress'
import debounce from './debounce'
const directives = {
  copy,
  title,
  permission,
  waterMarker,
  longpress,
  debounce
}
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))
  }
}