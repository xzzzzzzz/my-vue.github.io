<template>
  <div class="header gradient">
    <div class="prev" @click="prev" v-show="isShowPrev"></div>
    <div class="content">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.header{
  width:100%;
  height:100%;
  position: relative;
}
.prev{
  width:100px;
  height:100%;
  position: absolute;
  left:0;
  top:0;
  background: url(https://m.xgqq.com/static/img/back.png) no-repeat center center;
  background-size:18px 34px;
}
</style>

<script>
export default {
  data () {
    return {
      title: '首页'
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/invest/invest') {
        this.title = to.query.title
      } else {
        this.title = to.meta.title
      }
    }
  },
  computed: {
    isShowPrev () {
      const routePath = this.$route.path
      return routePath === '/' ? false : true
    }
  },
  methods: {
    prev () {
      return window.history.go(-1)
    }
  }
}
</script>
