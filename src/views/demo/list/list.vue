<template>
  <div>
    <ul>
      <li v-for="(item,index) in childList" :key="index">
        <i class="el-icon-remove-outline" @click="deletes(index)"></i>
        <el-time-select
          v-model="item.time"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
        <el-select v-model="item.xw" placeholder="请选择">
          <el-option
            v-for="items in optionss"
            :key="items.value"
            :label="items.value"
            :value="items.value">
          </el-option>
        </el-select>

        <span>{{item.time}}</span>
        <span>{{item.xw}}</span>
        <i class="el-icon-circle-plus-outline" @click="add(index)"></i>
      </li>
    </ul>
    <el-button>保存</el-button>
  </div>
</template>

<style scoped>
  ul{
    width:500px;
    height:500px;
    border:1px solid #ddd;
  }
  .el-date-editor,.el-select{
    width:200px;

  }
</style>

<script>
export default {
  props: ['childList'],
  data () {
    return {
      optionss: [
        {
          value: '去大厅',
          label: '1'
        },
        {
          value: '去充电',
          label: '2'
        }
      ]
    }
  },
  methods: {
    add (index) {
      let newChildList = {
        time: '9:00',
        xw: '去吃饭' + index
      }
      this.childList.splice(index + 1, 0, newChildList)
    },
    deletes (index) {
      this.childList.splice(index, 1)
    }
  }
}
</script>
