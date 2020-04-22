// 主页
<template>
  <div id="main">
    <div class="pics">
      <img src="../assets/cisdi.jpg" ref="image" alt="图片加载失败">
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },  
}
</script>

<style>
#main {
  padding-top: 80px;
  width: 100%;
}
#main .pics {
  position: relative;
}
#main img {
  position: absolute;
  min-height: 300px;
  width: 100%;
}
#main .content {
  margin: 20px 200px;
  background-color: #ccc;
}
</style>
