<template>
  <div class='finish_room'>
    <div class='finish_room2'>
      <div v-for='(item ,index) in imgs' class='room_img' :key="index">
        <img :src="item">
      </div>
      <div class='room_add_btn'>
        <span>上传图片</span>
        <input @change='add_img'  type="file"> 
      </div>
    </div>
  </div>
</template> 
<script >
export default{
  name: 'upLoadImg',
  data () {
    return {
      imgs: [],
    }
  },
  props: {},
  methods: {
    add_img(event) {
      var reader = new FileReader()
      var img1 = event.target.files[0]
      reader.readAsDataURL(img1)
      var that = this
      reader.onloadend=function() {
        that.imgs.push(reader.result) 
      }
    }
  }
}
</script>
