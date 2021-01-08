<template>
  <!-- 团购已购买轮播 -->
  <div class="havaBought">
    <div class="float-left">
      <span
      :class="show == index ? 'show' : ''"
      v-for="(item, index) in havabought"
      :key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["havabought"],
  data() {
    return {
      show: -1, // 团购信息展示弹窗
    };
  },
  mounted() {
    this.setInts()
  },
  watch: {
    // 监听父组件传值
    havabought() {
      this.setInts()
    }
  },
  methods: {
    // 定时器展示右侧购买回播
    setInts() {
      if (this.havabought.length>=1) {
        const setInt = setInterval(() => {
          if (this.show < this.havabought.length - 1) {
            var i = this.show;
            this.show = -1;
            const setTimer = setTimeout(() => {
              this.show = i + 1;
              clearTimeout(setTimer);
            }, 3000);
          } else {
            this.show = -1;
            const setTimer = setTimeout(() => {
              this.show = 0;
              clearTimeout(setTimer);
            }, 4000);
          }
        }, 8000);
        this.$once('hook:beforeDestroy', () => clearInterval(setInt))
      }
    },
  }
}
</script>
<style scoped lang='scss'>
.float-left {
  .show {
    visibility: visible;
  }
  span {
    display: block;
    position: absolute;
    padding: 0 0.8rem;
    box-sizing: border-box;
    background: #000;
    opacity: 0.49;
    border-radius: 0px 2.5rem 2.5rem 0px;
    color: #fff;
    font-size: 0.5rem;
    height: 1.1rem;
    line-height: 1.1rem;
    visibility: hidden;
    margin-bottom: 0.4rem;
  }
}
</style>