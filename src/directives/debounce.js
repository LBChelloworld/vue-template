
//*1 定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
//*2 将时间绑定在 click 方法上。
//*3 使用：给 Dom 加上 v-debounce 及回调函数即可

const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}

export default debounce