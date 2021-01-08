export default {
  //* 判断安卓还是IOS
  isAndroid_ios() {
    const u = navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 == true ? true : false;
  },

  //* 判断是在app内还是在浏览器中
  appOrBrowser() {
    //获取 UA信息 判断是否含有和app端约定好的标识
    return navigator.userAgent.toLowerCase().indexOf("cjkt") != -1 ? true : false;
  },

  //* 判断是否分享
  ifShare(bool) {
    // 调用安卓的方法给安卓发送数据 传给安卓的数据能是对象和null，不然安卓拿不到数据
    // 调用ios的方法给ios发送数据，如果不需要传数据，那就传null，千万不能不传，不然ios收不到值
    this.isAndroid_ios() ? window.android.ifShare(bool) : window.webkit.messageHandlers.ifShare.postMessage(bool);
  },

  //* 获取 csrf_token
  async getCsrf_token() {
    const {data: res} = await get("token/csrf")
    return res.csrf_token;
  },

  //* 重写 typeOf
  typeOf(obj) {
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object',
    }
    // 把对象原型的 toString方法传递给所有数据类型
    return map[Object.prototype.toString.call(obj)];
  },

  //* deep-Copy
  deepCopy(data) {
    const t = this.typeOf(data)
    let o;
    // 判断值类型
    if (t === 'array') {
      o = []
    }else if (t === 'object') {
      o = {}
    } else {
      return data
    }
    //遍历添加到新对象
    if (t === 'array') {
      for (let i = 0; i < data.length; i++) {
        o.push(this.deepCopy(data[i]))
      }
    }else if (t === 'object') {
      for (let i in data) {
        o[i] = this.deepCopy(data[i])
      }
    }
    // 结束递归
    return o
  },

  //* 展示时间格式过滤
  ChangeHourMinutestr(str) {
    if (str !== "0" && str !== "" && str !== null) {
      let mm = Math.floor(str / 60)
      if(mm<1){
        return str + "ss"
      }
      let hh = Math.floor(mm / 60)
      if(hh<1){
        return ((Math.floor(str / 60)).toString().length < 2 ? "0" + (Math.floor(str / 60)).toString() : (Math.floor(str / 60)).toString() )+'m' + ((str%60).toString().length<2?'0' +(str%60)+ 's': (str%60)+'s')
      }
      let dd = Math.floor(hh / 24)
      if(dd<1){
        return ((Math.floor(mm / 60)).toString().length < 2 ? "0" + (Math.floor(mm / 60)).toString() : (Math.floor(mm / 60)).toString() )+'h' + ((mm%60).toString().length<2?'0' +(mm%60)+ 'm': (mm%60)+'m')
      }
      return ((Math.floor(hh / 24)).toString().length < 2 ? "0" + (Math.floor(hh / 24)).toString() : (Math.floor(hh / 24)).toString() )+'天' + ((hh%24).toString().length<2?'0' +(hh%24)+ 'h': (hh%24)+'h')
    }
    return "0s";
  }
}
