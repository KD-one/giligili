<template>
 <el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
  router>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/createVideo">投稿</el-menu-item>
  <el-menu-item index="/about">关于我们</el-menu-item>
</el-menu>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  