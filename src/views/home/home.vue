<template>
  <div class="index">
     <el-carousel :interval="5000" arrow="never" :autoplay="true">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <a :href="item.url">
            <img :src="item.img" alt="">
          </a>
        </el-carousel-item>
      </el-carousel>
     <div class="newlist-wrap">
       <el-carousel :interval="5000" arrow="never" indicator-position="none" :autoplay="true" class="newlist">
          <el-carousel-item v-for="(item,index) in newList" :key="index">
            <a :href="item.url">
              <div>{{item.content}}</div>
            </a>
          </el-carousel-item>
        </el-carousel>
     </div>

    <div class="new">
      <a href="http://m.xgqq.com/#activity/novice">
      <img src="http://m.xgqq.com/static/img/home/novice.png" alt="">
      </a>
    </div>
    <div class="mengx">
      <div class="mengx-head">
        <a href="http://m.xgqq.com/#saving/rule">查看说明</a>
      </div>
      <div class="money-content">
    <ul class="fix">
        <li class="drjx">
            <p>
                无资金站岗<br> 当日计息
            </p>
        </li>
        <li class="lgl">
            <p>
                每日复利<br> 利滚利
            </p>
        </li>
        <li class="bjx">
            <p>
                金额不局限<br> 每分可生息
            </p>
        </li>
    </ul>
    <a href="https://m.xgqq.com/#tender/list~classify=cxg"></a>
</div>
</div>
<div class="invesList">
    <div class="xsb">
       <div v-for="(item,index) in investList" :key="index" class="invest" :data-title="item.title" :data-id="item.dataid" @click="goInvest(item)">
        <div class="invest-top fix">
            <div class="fl" :class="item.iconClass">
                {{item.title}}
            </div>
            <div class="pf fr"></div>
        </div>
        <div class="bq" style="font-size:0.6rem;line-height:1.5rem;color:#1e93ff">
        </div>
        <div class="invest-mid">
            <ul class="value fix">
                <li class="ll"><span>{{item.apr}}</span>%</li>
                <li><span>{{item.date}}</span>天</li>
                <li><span>{{item.money}}</span>元</li>
            </ul>
            <ul class="status fix">
                <li>历史年化</li>
                <li v-if="item.pid == '2' || item.pid == '5'">投资期限</li>
                <li v-else>锁定期限</li>
                <li>起投金额</li>
            </ul>
        </div>
        <div class="invest-bottom">
            <div class="information fix">
                <p class="fl">
                    剩余<span>
                        {{item.invest_amount}}
                      </span>元可投
                </p>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      bannerList: state => {
        return state.home.bannerlist
      },
      newList: state => {
        return state.home.newList
      },
      investList: state => {
        return state.home.investList
      }
    })
  },
  methods: {
    goInvest: function (e) {
      // let id = e.currentTarget.getAttribute('data-id')
      // let title = e.currentTarget.getAttribute('data-title')
      this.$router.push({
        path: '/invest/invest',
        query: {
          id: e.dataid,
          title: e.title,
          apr: e.apr,
          date: e.date,
          money: e.money
        }
      })
    }
  }
}
</script>

<style>
.el-carousel__container{
  height:390px;
}
.el-carousel__container img{
 width:100%;
 height:100%;
}
.el-carousel__button{
  width:20px;
  height:20px;
  border-radius:50%;
}
.newlist-wrap{
  padding-left:120px;
  background:#fff url(https://m.xgqq.com/static/img/home/xiaoxi.png) no-repeat 30px center;
  background-size:60px 60px;
}
.newlist {background: #Fff;margin-bottom:30px;text-align: left;}
.newlist .el-carousel__container{
  height:100px;
  line-height: 100px;
}
.newlist .el-carousel__container a{
  color:#4f4f4f
}
.new{
  width:100%;
  height:200px;
}
.new img{
  width:100%;
  height:200px;
}
.mengx{
  width:90%;
  height:450px;
  margin:30px auto;
  background: url(https://m.xgqq.com/static/img/money-box/money-boxbg.png) no-repeat center center;
  background-size:100% 100%;
}
.mengx-head{
  height: 130px;
    line-height: 100px;
    padding-right: 30px;
    background: url(https://m.xgqq.com/static/img/money-box/money-boxtitle.png) no-repeat center center;
    background-size: 183px 57px;
}
.mengx-head a{
  float: right;
  color:#4f4f4f;
  font-size: 16px;
}
.money-content ul{
  overflow: hidden;
  margin-bottom:10px;
}
.money-content li{
  float: left;
  width:33.3333333%;
  text-align: center;
  padding-top:115px;
}
.money-content li.drjx{
      background: url(http://m.xgqq.com/static/img/money-box/drjx.png) no-repeat center top;
    background-size: 126px 108px;
}
.money-content li.lgl{
      background: url(http://m.xgqq.com/static/img/money-box/lgl.png) no-repeat center top;
    background-size: 126px 108px;
}
.money-content li.bjx{
      background: url(http://m.xgqq.com/static/img/money-box/bjx.png) no-repeat center top;
    background-size: 126px 108px;
}
.money-content a{
     display: block;
    width: 340px;
    height: 68px;
    margin: 25px auto 0;
    background: url(http://m.xgqq.com/static/img/money-box/toinvest.png) no-repeat;
    background-size: 100% 100%;
}

.invest{
  padding:30px;
  background: #fff;
  margin-bottom:30px;
}
.invest .invest-top{
  margin-bottom:30px;
}
.invest .invest-mid{
  margin-bottom:30px;
}
.invest .invest-mid li{
  float: left;
  width:33.333333%;
  text-align:center;
}
.invest .invest-mid li:first-child{
  text-align:left;
}
.invest .invest-mid .value li {
    color: #444f4f;
    font-size: 30px;
}
.invest .invest-mid .value li.ll {
    color: #fd5e5e;
    font-weight: bold;
}
.invest .invest-mid .value li span {
    font-size: 42px;
}
.invest .invest-mid .status li {
    color: #949ead;
    font-size: 24px;
}
.invest-bottom .information span {
    color: #0678fc;
}
.titnew{
  padding-left: 75px;
  background: url(https://m.xgqq.com/static/img/user/novice.png) no-repeat left center;
  background-size: 67px 26px;
  font-size: 26px;
}
.tits{
  padding-left: 39px;
  background: url(https://m.xgqq.com/static/img/user/img_shang.png) no-repeat left center;
  background-size: 26px 26px;
  font-size: 26px;
}
.tit{
  padding-left: 39px;
  background: url(https://m.xgqq.com/static/img/user/investitbg.png) no-repeat left center;
  background-size: 26px 26px;
  font-size: 26px;
}
</style>
