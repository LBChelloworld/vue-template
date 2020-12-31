<template>
  <div class="home" msg='by 花村村长' v-title data-title="超级课堂">
  
  </div>
</template>

<script>
// 声明 player
// eslint-disable-next-line no-unused-vars
var player = null;
export default {
  data() {
    return {
      
    }
  },
  created() {

  },
  mounted() {
    this.modMeans({goShare: this.goShare})
  },
  computed: {

  },
  methods: {
    modMeans(means) {
      // 给原生挂载方法到 window 
      //? window['goWeChat'] = () => this.goWeChat()
      Object.keys(means).forEach(key => window[means[key]] = () => means[key]())
    },
    goShare() {
      console.info('share-success')
    }
  },
}
</script>
<style scoped lang='scss'>
  $bg: #fff;
  .home{
    background: #F0F2F5;
  }
</style>