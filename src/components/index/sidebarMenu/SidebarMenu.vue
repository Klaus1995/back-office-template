<template>
  <div class="sidebar_menu">
    <Menu class="menu" width="auto">
      <slot class="logo" name="logo"></slot>
      <template v-for="menuItemLevelOne in appRouter">
        <Submenu v-if="menuItemLevelOne.children" :name="menuItemLevelOne.path" :key="menuItemLevelOne.title">
          <template slot="title">
            <Icon :type="menuItemLevelOne.icon"></Icon>
            {{menuItemLevelOne.title}}
          </template>
          <MenuItem v-for="menuItemLevelTwo in menuItemLevelOne.children" :name="menuItemLevelTwo.path" :key="menuItemLevelTwo.title">
          <Icon :type="menuItemLevelTwo.icon" :key="menuItemLevelTwo.icon"></Icon>
          {{menuItemLevelTwo.title}}
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="menuItemLevelOne.path" :key="menuItemLevelOne.title">
        <Icon :type="menuItemLevelOne.icon" :key="menuItemLevelOne.icon"></Icon>
        {{menuItemLevelOne.title}}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
  import appRouter from "@/router/appRouter";

  export default {
    name: "sidebarMenu",
    data() {
      return {
        appRouter
      };
    }
  };
</script>

<style scoped>
  .sidebar_menu {
    height: 100%;
  }
  .menu {
    height: 100%;
  }
</style>