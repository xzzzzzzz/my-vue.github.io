<template>
<div id="main">
  <div v-for="(item1,index) in valuelist" :key="index" style="margin: 16px 0 29px 0;">
  <i class="icon" @click="Addanddelete('Add',index)"></i>
  <el-select v-model="item1.time" size="medium" style="width:217px;margin-left: 68px;" placeholder="请选择" >
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.value"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="item1.action" size="medium" style="width:217px; margin-left: 36px;" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-model="item1.place" size="medium" style="width:217px; margin-left: 36px;" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <i class="icon icon2" @click="Addanddelete('delete',index)"></i>
  </div>
  <el-button @click="popupbtntext(Preservation, '确定要保存修改吗？')">保存</el-button>
  <el-button style="width: 180px;left: 30px;" @click="popupbtntext(Preservation, '确定要清空吗？')">清空列表</el-button>
</div>
</template>
<script>
  export default {
    name: 'selectTime',
    data () {
      return {
        options1: [{
          value: '8:30',
          label: '开机'
        },
        {
          value: '9:00',
          label: '上班',
          disabled: true
        },
        {
          value: '9:10',
          label: '定点巡航'
        },
        {
          value: '17:30',
          label: '下班'
        },
        {
          value: '18:00',
          label: '关机'
        }],
        options2: [{
          value: '8:30',
          label: '开机'
        },
        {
          value: '9:00',
          label: '上班',
          disabled: true
        },
        {
          value: '9:10',
          label: '定点巡航'
        },
        {
          value: '17:30',
          label: '下班'
        },
        {
          value: '18:00',
          label: '关机'
        }],
        options3: [{
          value: '8:30',
          label: '原点'
        },
        {
          value: '9:00',
          label: '迎宾点'
        },
        {
          value: '9:10',
          label: '迎宾点'
        },
        {
          value: '17:30',
          label: '充电点'
        },
        {
          value: '18:00',
          label: '原点'
        }],
        src: 'static/background/indexbg.png',
        tasklist: []
      }
    },
    props: ['valuelist'],
    mounted () {
      this.init()
       console.log('============================' + this.valueList)
    },
    watch: {
    },
    methods: {
      init () {
        for (var s = 0; s < this.valuelist.length; s++) {
          this.tasklist.push({ time: '', action: '', place: '' })
          this.tasklist[s].time = this.valuelist[s].time
          this.tasklist[s].action = this.valuelist[s].action
          this.tasklist[s].place = this.valuelist[s].place
        }
      },
      Addanddelete (state, index) {
        if (state === 'Add') {
          if (this.valuelist.length === 1) {
            let deleList = {
              time: '',
              action: '',
              place: ''
            }
            this.tasklist.splice(0, 1, deleList)
          } else {
            this.tasklist.splice(index, 1)
          }
        } else {
          let addList = {
            time: '',
            action: '',
            place: ''
          }
          index = index + 1
          this.tasklist.splice(index, 0, addList)
        }
      },
      Preservation () {
        this.$emit('my-eventclick', this.tasklist)
        this.$message({
          type: 'success',
          message: '保存数据 成功: '
        })
      }
    }
  }
</script>