<template>
  <div class="alertWrap">
    <div class="alert">
      {{ msg }}
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      msg: state => state.loading.alertMsg
    })
  }
}
</script>

<style scoped>
.alertWrap{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
}
.alert{
  position: fixed;
  width: 400px;
  left: 50%;
  top: 50%;
  margin-left:-200px;
  vertical-align: middle;
  background: #000;
  color: #fff;
  font-size: 18px;
  padding:20px 0;
}
</style>
