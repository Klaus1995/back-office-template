<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "app",
    created() {
      console.log(this.$route);
    }
  };
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    width: 100%;
    height: 100%;
  }
</style>
