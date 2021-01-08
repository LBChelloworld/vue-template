
//* 设置路由动态标题
//* v-title = "title" 使用
//* bind三个值分别为el-节点  binding-绑定属性  vNode-虚拟节点
//* binding.value即为需要的值
const title = {
  bind(el, {value}){
    document.title = value
  },
  // 当传进来的值更新的时候触发
  update(el, {value}) {
    document.title = value
  }
}
export default title