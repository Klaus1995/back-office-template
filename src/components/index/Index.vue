<template>
  <Row class="row">
    <Col class="col" :span="5">
    <sidebar-menu>
      <div class="logo" slot="logo">
        <img src="./../../assets/logo.png" height="50"></img>
      </div>
    </sidebar-menu>
    </Col>
    <Col class="col" span="19">
    <router-view></router-view>
    </Col>
  </Row>
</template>

<script>
  import SidebarMenu from "./sidebarMenu/SidebarMenu.vue";
  export default {
    components: {
      SidebarMenu
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .row {
    height: 100%;
  }
  .col {
    height: 100%;
  }
  .logo {
    text-align: center;
    padding: 20px 0;
  }
</style>