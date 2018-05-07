<template>
  <div class="invest-wrap">
     <div class="invest-top gradient">
       <ul class="fix">
         <li class="apr">
           <p class="start">
             参考年化
           </p>
           <p class="value">
             {{apr}}%
           </p>
         </li>
         <li>
           <p class="start">
             锁定期
           </p>
           <p class="value">
             {{date}}天
           </p>
         </li>
         <li>
           <p class="start">
             起投金额
           </p>
           <p class="value">
             {{money}}元
           </p>
         </li>
       </ul>
     </div>
     <div class="pjdetails">
       <ul class="fix">
         <li>
           产品详情
         </li>
         <li>
           多重保障
         </li>
         <li>
           投资记录<span>(4笔)</span>
         </li>
       </ul>
     </div>
     <div>
        <div class="setSelect" @click="showSelect">
          <div class="fl">
            选择城市
          </div>
          <div class="fr">
            <span>
              {{month}}
            </span>
            <span>
              {{day}}
            </span>
            <span>
              {{days}}
            </span>
          </div>
        </div>
        <pd-select-box :show.sync="isSelectShow">
          <pd-select-item :listData="listData" v-model="month"></pd-select-item>
          <pd-select-item :listData="listData2" v-model="day"></pd-select-item>
          <pd-select-item :listData="listData2" type="cycle" v-model="days"></pd-select-item>
        </pd-select-box>
     </div>
     <div>
       <uploadImg></uploadImg>
     </div>
     <div>
       <div class="setSelect" @click="Show1">
          <div class="fl">
            选择时间
          </div>
          <div class="fr">
            <span>{{value}}</span>
          </div>
        </div>
       <Picker :show="show1"
    :selectData="pickData1" v-on:cancel="close"
    v-on:confirm="finish"></Picker>
     </div>
  </div>
</template>
<style scoped>
.backgroundLine{
  width: 150px;
  height: 90px;
  line-height: 90px;
  margin:30px auto;
  font-size:36px;
  border-radius: 15px;
  color:#fff;
  box-shadow: 0 3px 10px #bbdeff;
  background: -webkit-linear-gradient(right bottom, #459df5 , #6177f0)!important; /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right bottom, #459df5 , #6177f0)!important;/* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right bottom, #459df5 , #6177f0)!important; /* Firefox 3.6 - 15 */
    background: linear-gradient(right bottom, #459df5 , #6177f0)!important; /* 标准的语法 */
}
.invest-top{
  padding:30px
}
.invest-top li{
  float: left;
  width:50%;
}
.invest-top li.apr{
  width:100%;
  margin-bottom:30px;
}
.invest-top li .start{
  margin-bottom:20px;
  font-size: 30px;
}
.invest-top li .value{
  margin-bottom:20px;
  font-size: 30px;
}
.pjdetails li{
  float: left;
  width:33.333333333%;
  background: #Fff;
  line-height: 90px;
}
.setSelect {
  padding:30px;
  background: #Fff;
  height:60px;
  line-height:60px;
}
</style>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: '111',
      apr: '',
      date: '',
      money: '',
      listData: Array.from({length: 12}, (value, index) => 1 + index),
      listData2: Array.from({length: 30}, (value, index) => 'customValue' + index),
      month: 0,
      day: 'customValue0',
      days:'ddd',
      isSelectShow: false,
      show1: false,
      value: '2222',

      // 新的picker
      pickData1: {
        columns: 2, // picker的列数
        default: [
          {
            text: 2002,
            value: 2002
          }
        ], // 默认显示哪个
        // 第一列的数据结构
        pData1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          },
          {
            text: 2002,
            value: 2002
          },
          {
            text: 2003,
            value: 2003
          },
          {
            text: 2004,
            value: 2004
          },
          {
            text: 2005,
            value: 2005
          },
        ],
        pData2: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 2001,
            value: 2001
          },
          {
            text: 2002,
            value: 2002
          },
          {
            text: 2003,
            value: 2003
          },
          {
            text: 2004,
            value: 2004
          },
          {
            text: 2005,
            value: 2005
          },
        ]
      },
    }
  },
  computed: {
    ...mapState({
      invest: state => {
        return state.home.investList
      }
    })
  },
  methods: {
    getParams: function () {
      // 取到路由带过来的参数
      let routerParams = this.$route.query.id
      let date = this.$route.query.date
      let apr = this.$route.query.apr
      let money = this.$route.query.money
      // 将数据放在当前组件的数据内
      this.msg = routerParams
      this.apr = apr
      this.date = date
      this.money = money
      console.log(routerParams)
    },
    getDate () {
      var _this = this
      this.$http.get('https://gateway.xgqq.com/vip/vip-vipUsers/selectVipUserGradeInfo').then(function (res) {
        console.log(res.data)
        _this.msg = res.data
      }).catch(function (err) {
        console.log(err)
      })
    },
    showSelect () {
      this.isSelectShow = true
    },
    Show1 () {
      this.show1= true;
    },
    close () {
      this.show1 = false
    },
    finish (value) {
      if(value.select1 != ""){
        this.value = value.select1.text
      }
      if(value.select1 != "" && value.select2 != ""){
        this.value = value.select1.text + '-' +value.select2.text
      }
      if(value.select1 != "" && value.select2 != "" && value.select3 != ""){
        this.value = value.select1.text + '-' + value.select2.text + '-' + value.select3.text
      }
      this.close()
    }
  },
  mounted () {
    this.getParams()
    // this.getDate()
  },
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route' (to, from) {
      to.meta.title = this.$route.meta.title
    }
  }
}
</script>
