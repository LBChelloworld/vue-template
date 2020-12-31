// 自定义标题指令
export default{ 
  title: {
    bind(el){
      document.title = el.dataset.title
    }
  }
}