//navbar
<template>
  <div id="nav">
      <img src="../assets/logo.png" alt="图片加载失败"/>
      <ul>
        <router-link to="/index" tag="li" active-class='active'><a>首页</a></router-link>
        <router-link to="/list" tag="li" active-class='active'><a>展示</a></router-link>
      </ul>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#nav {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #ccc;
}
#nav img {
    width: 80px;
    margin-left: 200px;
    float: left;
}
#nav ul {
    position: absolute;
    bottom: 20px;
    left: 500px;
    font-size: 24px;
}

.active {
   border-bottom: 2px solid red;
}
</style>