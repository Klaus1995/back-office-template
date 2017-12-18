<template>
  <Row class="row">
    <Col class="col" :span="shrink?1:4">
    <sidebar-menu :shrink="shrink">
      <div class="logo" slot="logo">
        <img src="./../../assets/logo.png" height="35"></img>
      </div>
    </sidebar-menu>
    </Col>
    <Col class="col" :span="shrink?23:20">
    <page-header @toggleMenu="toggleMenu"></page-header>
    <div class="content">
      <router-view></router-view>
    </div>
    </Col>
  </Row>
</template>

<script>
  import SidebarMenu from "./sidebarMenu/SidebarMenu.vue";
  import PageHeader from "./pageHeader/PageHeader.vue";

  export default {
    components: {
      SidebarMenu,
      PageHeader
    },
    data() {
      return {
        shrink: false
      };
    },
    methods: {
      toggleMenu() {
        this.shrink = !this.shrink;
      }
    }
  };
</script>

<style scoped>
  .row {
    height: 100%;
  }
  .col {
    height: 100%;
    transition: all 0.5s;
  }
  .logo {
    text-align: center;
    padding: 10px 0;
  }
  .content {
    padding: 10px;
    height: calc(100% - 50px);
    overflow: auto;
  }
</style>