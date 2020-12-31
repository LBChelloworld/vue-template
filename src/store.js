import Vue from 'vue'
export let store = Vue.observable({
  // *默认分享内容
  shareContext: {
    url:'',
    title:'超级课堂',
    desc:'',
    imgUrl:''
  }
})
export let mutations = {
  // *修改分享内容
  setShareContext({ url, title = store.shareContext.title, desc = store.shareContext.desc, imgUrl = store.shareContext.imgUrl } = {} ) {
    store.shareContext = { url, title, desc, imgUrl}
  }
}