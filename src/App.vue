<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script>
import navBar from './components/nav'
export default {
  components:{
    navBar
  }
}
</script>

<style>
body,
ul,
p{
  padding: 0;
  margin: 0;
}
#app {
  min-width: 1200px;
}

li {
  display: inline-block;
  margin: 0 20px;
  list-style: none;
}
li a {
  color: #000;
  text-decoration: none;
}
</style>
