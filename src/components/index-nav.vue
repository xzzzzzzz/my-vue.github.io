<template>
  <nav>
     <router-link v-for="(item,index) in indexNav" :key="index" :to="item.path" >
        <span class="icon" :class="item.iconClass" ></span>
        {{ item.text }}
     </router-link>
  </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      // 返回查看的数据
      indexNav: state => {
        return state.indexNav.list
      }
    })
  }
}
</script>

<style scoped>
nav {
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 90px;
    background: #f9f9f9;
    font-size: 12px;
}

nav a {
    user-select: none;
    -webkit-user-select: none;
    flex-grow: 1;
    text-align: center;
    line-height: 1;
    color: #4f4f4f;
    box-sizing: border-box;
}

nav a.router-link-exact-active {
    color: #2564ef;
}
.icon{
    display: block;
    width:50px;
    height:50px;
    margin:5px auto 5px;
}
/*index-nav*/
.icon-home{
  background:url(https://m.xgqq.com/static/img/icon.png) no-repeat;
  background-position:-0px 0;
  background-size: 200px auto;
}
.icon-invest{
  background:url(https://m.xgqq.com/static/img/icon.png) no-repeat;
  background-position:-100px 0;
  background-size: 200px auto;
}
.icon-find{
  background:url(https://m.xgqq.com/static/img/icon.png) no-repeat;
  background-position:-0px -50px;
  background-size: 200px auto;
}
.icon-me{
  background:url(https://m.xgqq.com/static/img/icon.png) no-repeat;
  background-position:-100px -50px;
  background-size: 200px auto;
}
nav a.router-link-exact-active .icon-home{
    background-position:-50px 0;
}
nav a.router-link-exact-active .icon-invest{
    background-position:-150px 0;
}
nav a.router-link-exact-active .icon-find{
    background-position:-50px -50px;
}
nav a.router-link-exact-active .icon-me{
    background-position:-150px -50px;
}
</style>
