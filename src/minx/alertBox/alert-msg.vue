<template>
  <transition :name="fadeIn">
  <div class="alertBox" v-show="show">
   <div class="alert-mask" v-show="isShowMask"></div>
   <transition :name="translate">
    <div class="box" :class="position" v-show="show">
     <div class="box-title">
       <div class="fl">
         {{title}}
       </div>
       <div class="fr">
         X
       </div>
     </div>
     <div class="box-content">
       <p class="box-p">{{text}}</p>
       <input type="text" class="box-input">
     </div>
     <div class="button">
       <el-button>取消</el-button>
       <el-button>确定</el-button>
     </div>
    </div>
   </transition>
  </div>
 </transition>
</template>

<style>
input[type=button], input[type=submit], input[type=file],input, button { cursor: pointer; -webkit-appearance: none; }
input::-webkit-input-placeholder {color:#8f8f94;opacity:1;}
input:-moz-placeholder{color:#8f8f94;opacity:1;}
input::-moz-placeholder{color:#8f8f94;opacity:1;}
input:-ms-input-placeholder {color:#8f8f94;opacity:1;}
.alertBox{
  position: fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,.4);
  top:0;
  left:0;
  z-index: 4444;
}
.box{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  margin-left: -220px;
  margin-top: -200px;
  background: #fff;
  color: #000;
  font-size: 16px;
  z-index: 5000;
  border-radius: 4px;
  overflow: hidden;
 }
 .box.top{
  top: 50px;
  margin-top: 0;
 }
 .box.center{
  top: 50%;
  margin-top: -200px;
 }
 .box.bottom{
  top: auto;
  bottom: 50px;
  margin-top: 0;
 }
 .box-title{
   height:60px;
   width:100%;
   line-height:60px;
   border-bottom:1px solid #ddd;
 }
 .box .box-content{
   padding:10px 30px ;
   text-align: left;
 }
 .box .box-p{
   padding:20px 0
 }
 .box .box-input{
   width:100%;
   height:30px;
   border-radius: 10px;
   border: 1px solid #000;

 }
 .box .fl{
   float: left;
   padding-left:30px;
 }
  .box .fr{
   float: right;
   width:60px;
   height:100%;
   text-align: center;
 }
 .alert-mask{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0,0,0,.5);
  z-index: 4999;
 }
 .fadeIn-enter-active, .fadeIn-leave-active{
  transition: opacity .3s;
 }
 .fadeIn-enter, .fadeIn-leave-active{
  opacity: 0;
 }
 .translate-top-enter-active, .translate-top-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-top-enter, .translate-top-leave-active{
  transform: translateY(-50%);
  opacity: 0;
 }
 .translate-middle-enter-active, .translate-middle-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-middle-enter, .translate-middle-leave-active{
  transform: translateY(80%);
  opacity: 0;
 }
 .translate-bottom-enter-active, .translate-bottom-leave-active{
  transition: all 0.3s cubic-bezier(.36,.66,.04,1);
 }
 .translate-bottom-enter, .translate-bottom-leave-active{
  transform: translateY(100%);
  opacity: 0;
 }
</style>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    show: { // 是否显示此toast
      default: false
    },
    text: { // 提醒文字
      default: 'loading'
    },
    title: { // 提醒标题
      default: '提示'
    },
    position: { // 提醒容器位置
      default: 'center'
    },
    isShowMask: { // 是否显示遮罩层
      default: false
    },
    time: { // 显示时间
      default: 3000
    },
    transition: { // 是否开启动画
      default: true
    }
  },
  // 更新完成状态
  //  updated() { // 时间控制
  //   setTimeout(() => {
  //    this.show = false
  //   }, 3000)
  //  },
  computed: {
    translate () { // 根据props，生成相对应的动画
      if (!this.transition) {
        return ''
      } else {
        if (this.position === 'top') {
          return 'translate-top'
        } else if (this.position === 'middle') {
          return 'translate-middle'
        } else if (this.position === 'bottom') {
          return 'translate-bottom'
        }
      }
    },
    fadeIn () { // 同上
      if (!this.transition) {
        return ''
      } else {
        return 'fadeIn'
      }
    }
  }
}
</script>
