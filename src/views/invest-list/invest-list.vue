<template>
  <div class="invest-wrap">
     <div v-for="(item,index) in invest" :key="index" class="invest" :data-id="item.dataid" :data-title="item.title" @click="goInvest($event)">
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
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      invest: state => {
        return state.home.investList
      }
    })
  },
  methods: {
    goInvest: function (e) {
      let id = e.currentTarget.getAttribute('data-id')
      let title = e.currentTarget.getAttribute('data-title')
      this.$router.push({
        path: '/invest/invest',
        query: {
          id: id,
          title: title
        }
      })
    }
  }
}
</script>

<style>

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
