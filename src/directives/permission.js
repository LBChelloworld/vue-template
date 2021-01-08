
//*1 自定义一个权限数组
//*2 判断用户的权限是否在这个数组内，如果是则显示，否则则移除 Dom
//*3 显示    <button v-permission="'1'">权限按钮1</button>
//*4 不显示  <button v-permission="'10'">权限按钮2</button>

function checkArray(key) {
  let arr = ['1', '2', '3', '4']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}

const permission = {
  inserted: function (el, {value}) {
    if (value && checkArray(value)) {
      // 没有权限 移除Dom元素
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
}

export default permission