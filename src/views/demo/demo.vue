<template>
  <div class="wrap">
    <div class="fl">
      <lists :childList="childrenList"></lists>
    </div>
    <div class="fl">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="set(index)" :class="{'active': index === active}">
          <i @click="dete(index)"  @click.stop>x</i>
          {{item.value}}
        </li>
      </ul>
      <el-button @click="click">新建</el-button>
      <el-button @click="alertbox('点我干嘛')">点我弹窗</el-button>
    </div>
  </div>
</template>
<style>
  .active{
    background: red;
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
      dataList: [
        {
          value: '工作日',
          dataerList: [
            {
              time: '9:00',
              xw: '去大厅'
            },
            {
              time: '9:00',
              xw: '去大厅'
            }
          ]
        }
      ],
      childrenList: [
        {
          time: '9:00',
          xw: '去大厅'
        },
        {
          time: '9:00',
          xw: '去大厅'
        }
      ],
      active: 0
    }
  },
  methods: {
    click () {
      this.$prompt('请输入邮箱', '提示', {
        inputPattern: /[a-zA-Z]?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$instance.show({
          text: '更改成功',
          position: 'center'
        })
        let newList = {
          value: value,
          active: '-1',
          dataerList: [
            {
              time: '9：00',
              xw: '请选择'
            }
          ]
        }
        this.dataList.push(newList)
      }).catch(() => {
        this.$instance.show({
          text: '取消更改',
          position: 'center'
        })
      })
    },
    set (index) {
      this.active = index
      this.childrenList = this.dataList[index].dataerList
    },
    dete (index) {
      this.dataList.splice(index, 1)
      this.active = 0
    },
    alertbox (msg) {
      _.alert(msg)
    }
  }
}
</script>
