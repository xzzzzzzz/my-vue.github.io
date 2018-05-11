<template>
  <div>
    <rili  ref="Calendar" :markDateMore="arr" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></rili>
  </div>
</template>
<style>
.el-picker-panel{
  display: block!important;
}
</style>

<script>
import rili from '../components/rili'
import * as _ from '../util/alert'
  export default{
    components: {
      rili
    },
    data() {
            return {
                arr: [{
                    date: '2018/4/1',
                    className: "mark1"
                }, {
                    date: '2018/4/2',
                    className: "mark1"
                }, {
                    date: '2018/4/13',
                    className: "mark2"
                }]
            }
        },
        methods: {
            clickDay(data) {
                console.log('选中了', data) //选中某天
                 _.alert('选中了' + data)
            },
            clickToday(data) {
                console.log('跳到了本月', data) //跳到了本月
            },
            changeDate(data) {
                  _.alert('切换到的月份为' + data)
                console.log('左右点击切换月份', data) //左右点击切换月份
            },
            demo() {
                // this.$refs.Calendar.ChoseMonth('2017-12-12',false); //跳到12月12日 但是不选中12月12日
                this.$refs.Calendar.ChoseMonth('2017-12-12'); //跳到12月12日
            }
        },
        created() {
            function format(date, index) {
                date = new Date(date);
                return `${date.getFullYear()}/${date.getMonth() + 1}/${index}`;
            }
            this.arr = [{
                date: format(new Date(), 1),
                className: "mark1"
            }, {
                date: format(new Date(), 2),
                className: "mark1"
            }, {
                date: format(new Date(), 13),
                className: "mark2"
            }]
        }
  }
</script>

<style>
    h3 {
        text-align: center;
        width: 90%;
        margin: auto;
    }
    .div {
        margin: auto;
        width: 220px;
        height: 44px;
        line-height: 44px;
        background: #0fc37c;
        color: #fff;
        font-size: 17px;
        text-align: center;
        margin-top: 20px;
    }
    .mark1 {
        background-color: red;
    }
    .mark2 {
        background-color: blue;
    }
</style>