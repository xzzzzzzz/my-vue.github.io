<template>
  <div class="pd-select-box" v-show="isShow" @click="hidePd">
    <div class="pd-select-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /**
   *  selectItemBox components
   * */
  export default{
    name: 'pdSelectBox',
    props:{
      show: {
        default: false
      }
    },
    computed: {
      isShow () {
        return this.show
      }
    },
    methods: {
      hidePd () {
        this.$emit('update:show', false)
      }
    }
  }
</script>
<style scoped="">
  .pd-select-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    background:rgba(0,0,0,.5);
    height:100%;
  }
</style>