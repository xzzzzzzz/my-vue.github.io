<template>
  <div class="wrap">
    <div class="contents">
        <input type="text" v-model="value" maxlength="5">
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
      <div class="contents-top">
        <div class="item walking_mode">
          
          <div class="fl">
            <div class="start">
              行走模式：
            </div>
            <div class="value">
              {{ walkingMode }}
            </div>
          </div>
        </div>
        <div class="item electric">
          <div class="fl">
            <div class="start">
              电量提示：
            </div>
            <div class="value">
              {{ electric }}
            </div>
          </div>
        </div>
        <div class="item switch">
          <div class="fr">
            <div class="start">
              急停开关状态：
            </div>
            <div class="value">
              {{ switchs }}
            </div>
          </div>
        </div>
        <div class="item charging_state">
          <div class="fr">
            <div class="start">
              充电状态：
            </div>
            <div class="value">
              {{ chargingState }}
            </div>
          </div>
        </div>
      </div>
      <ul class="content-bottom">
        <li>
          设备ID：
        </li>
        <li>
          底盘：
        </li>
        <li>
          人脸授权：
        </li>
        <li>
          语音ID：
        </li>
        <li>
          IP：
        </li>
        <li>
          部署信息：
        </li>
      </ul>
    </div>
    <div class="wrap-footer">
      <div class="el-icon-circle-check-outline">&nbsp;连接成功</div>
      <el-button size="small">断开</el-button>
      <span class="text">mac地址：112.011.122.111</span>
      <span class="text">版本号：1.1.2003.1</span>
      <span class="text">机构名称：北京银行</span>
      <span class="text">机构号：000000005</span>
      <span class="text">终端号：000000079</span>
      <span class="">已授权</span>
    </div>
  </div>
</template>
<style >
  .contents{
    width:1571px;
    height:806px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    margin:37px 0 37px 170px;
    background:#fff;
  }
  .contents-top{
    width:100%;
    height:606px;
    background:#fff url(~@/assets/td.png) no-repeat center top;
    position: relative;
  }
  .item{
    position: absolute;
    width:327px;
    background:url(~@/assets/itembg.png) no-repeat;
    overflow: hidden;
  }
  .item .fl{
    float: left;
  }
  .item .fr{
    float: right;
  }
  .start{
    color:#666666;
    font-size: 24px;
    text-align: left;
  }
  .value{
    color:#439ff5;
    font-size: 24px;
    text-align: left;
  }
  .walking_mode{
    background-position: right 15px;
    left:256px;
    top:292px;
  }
  .electric{
    background-position: right 15px;
    left:256px;
    top:426px;
  }
  .switch{
    background-position: left 15px;
    right:239px;
    top:347px;
    width:385px;
  }
  .charging_state{
    background-position: left 15px;
    right:289px;
    top:522px;
    width:339px;
  }
  .content-bottom{
    width:100%;
    height:199px;
    background:#f8f9fa;
    border-top:1px solid #e7e8ea;
    box-sizing: border-box;
    padding:30px 0 0 109px;
    line-height: 69px;
    font-size:24px;
    color:#666666;
  }
  .content-bottom li{
    float: left;
    width:33.33333333%;
    text-align: left;
  }
  .wrap-footer{
    width:100%;
    height:66px;
    color:#fff;
    font-size:22px;
    background:url(~@/assets/footer.png) no-repeat left top;
    line-height: 66px;
    text-align: left;
    padding-left:17px;
    box-sizing: border-box;
  }
  .wrap-footer .el-icon-circle-check-outline{margin-right:28px;}
  .wrap-footer .el-button{
    color:#439ff5;
    font-size: 22px;
    margin-right:68px;;
  }
  .wrap-footer .text{
    margin-right:83px;;
  }
  .setSelect {
  padding:30px;
  background: #Fff;
  height:60px;
  line-height:60px;
}
</style>

<script>
import lists from './list'
import * as _ from '../../util/alert'
export default {
  components: {
    lists
  },
  data () {
    return {
      walkingMode : '定点巡航',
      electric : '50%',
      switchs : '按下',
      chargingState: '桩充成功',
      
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
  watch:{
    value () {
      var reg = /^[\u4e00-\u9fa5\.]+$/
      this.value = this.value.trim()
      if (!reg.test(this.value)) {
          return console.log('输入格式错误 只能输入中文')
      }
      if(this.value.length >　this.$ref.maxlength){
        return console.log('最多五个只')
      }
    }
  },
  methods: {
    Show1 () {
      this.show1 = true
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
  }
}
</script>
