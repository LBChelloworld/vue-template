//参考官方文档  一次封装 注释已写好 https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
export default {
  wxShowMenu: async function (that) {
    let url = window.location.href.split('#')[0]
    url = "/weixin/jsapi_config?url=" + encodeURIComponent(url);
    const {data: res} = await that.$get(url)
    const getMsg = res;
    // eslint-disable-next-line no-undef
    wx.config({
      debug: true,  //生产环境需要关闭debug模式   测试环境下可以设置为true  可以在开发者工具中查看问题
      appId: getMsg.appid, //appId通过微信服务号后台查看
      timestamp: getMsg.timestamp, //生成签名的时间戳
      nonceStr: getMsg.noncestr, //生成签名的随机字符串
      signature: getMsg.signature, //签名
      jsApiList: [ //需要调用的JS接口列表
        'updateAppMessageShareData', //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
        'updateTimelineShareData', //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      ]
    });
    // eslint-disable-next-line no-undef
    wx.checkJsApi({
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 需要检测的JS接口列表
      success: function() {
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    });
    // eslint-disable-next-line no-undef
    wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
      // eslint-disable-next-line no-undef
      wx.updateAppMessageShareData({
        title: '超级课堂', // 分享标题
        desc: '超级课堂拼团活动开始啦', //分享描述
        link: window.location.href.split('#')[0],// 分享链接
        imgUrl: '//assets.cjkt.com/img/favicon.ico', // 分享图标
        success () {
          that.$Toast.loading('分享成功')
        },
        error: () => {
          that.$Toast.loading('已取消分享')
        }
      });
      // eslint-disable-next-line no-undef
      wx.updateTimelineShareData({
        title: '超级课堂', // 分享标题
        desc: '超级课堂拼团活动开始啦', //分享描述
        link: window.location.href.split('#')[0],// 分享链接
        imgUrl: '//assets.cjkt.com/img/favicon.ico', // 分享图标
        success () {
          that.$Toast.loading('分享成功')
        },
        error: () => {
          that.$Toast.loading('已取消分享')
        }
      })
    });
    // eslint-disable-next-line no-undef
    wx.error(function () {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
  }
}