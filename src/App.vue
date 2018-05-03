<template>
  <div id="app">
    <index-loading v-if="isLoading"></index-loading>
    <alert-msg v-if="isShowAlert"></alert-msg>
    <header>
      <index-header></index-header>
    </header>
      <router-view/>
    <footer v-show="isShowindexNav">
      <index-nav></index-nav>
    </footer>
  </div>
</template>

<script>
import indexNav from './components/index-nav'
import indexHeader from './components/index-header'
import indexLoading from './components/index-loading'
import alertMsg from './components/alert'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    indexNav,
    indexHeader,
    indexLoading,
    alertMsg
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading,
      isShowAlert: state => state.loading.showAlert
    }),
    isShowindexNav () {
      let routeLength = this.$route.path.split('/').length
      return routeLength > 2 ? false : true
    }
  }
}
</script>

<style>
body,html{
  height:100%;
  width:100%;
  padding: 0;
  margin: 0;
  background:#f3f8fc;
  overflow:auto;
  position: relative;
}
body{
   -webkit-overflow-scrolling: touch;
   box-sizing: border-box;
  margin-bottom:90px;
  margin-top:90px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
ul,p,dd,dl{
  -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0;
}
header{
  position: fixed;
  top:0;
  left: 0;
  height:90px;
  width:100%;
  line-height: 90px;
  text-align: center;
  color:#fff;
  z-index: 5;
}
section{
  overflow-y: hidden;
}
footer{
  position: fixed;
  bottom:0;
  height:90px;
  left:0;
  width:100%;
  z-index: 5;
  background:#fff;
}
</style>
