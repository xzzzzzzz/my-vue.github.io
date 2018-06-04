<template>
  <div>
    <select2 :valuelist="list[0].task" @my-eventclick="onmyeventclick"></select2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import select2 from './select-timea2'
  export default{
    components: {
      select2
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        list:state => state.home.newList
      })
    },
    methods: {
      onmyeventclick(list){

      }
    }
  }
</script>