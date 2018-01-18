<template>
  <div class="sidebar-menu" :style="{background: backgroundColor}">
    <transition name="fade">

      <div v-if="shrink">
        <slot class="logo" name="logo"></slot>
        <template v-for="(menuItemLevelOne,index) in appRouter">
          <Dropdown class="shrink-dropdown" transfer placement="right-start" :key="index" @on-click="changePath">
            <Button class="shrink-button" type="text">
              <Icon class="shrink-icon" :style="{color: iconColor}" :type="menuItemLevelOne.icon"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem v-for="(menuItemLevelTwo,index) in menuItemLevelOne.children" v-if="menuItemLevelTwo.title" :name="menuItemLevelTwo.path" :key="index">
                <Icon :type="menuItemLevelTwo.icon" :key="index"></Icon>
                {{menuItemLevelTwo.title}}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </template>
      </div>

      <Menu v-else class="menu" :open-names="openSubmenu" :active-name="$route.path" width="auto" :theme="sidebarMenuConf.theme" :accordion="sidebarMenuConf.accordion" @on-select="changePath">
        <slot class="logo" name="logo"></slot>
        <template v-for="(menuItemLevelOne,index) in appRouter">
          <Submenu class="submenu" v-if="menuItemLevelOne.children.length>1" :name="menuItemLevelOne.path" :key="index">
            <template slot="title">
              <Icon :type="menuItemLevelOne.icon"></Icon>
              {{menuItemLevelOne.title}}
            </template>
            <MenuItem v-for="(menuItemLevelTwo,index) in menuItemLevelOne.children" v-if="menuItemLevelTwo.title" :name="menuItemLevelTwo.path" :key="index">
            <Icon :type="menuItemLevelTwo.icon" :key="index"></Icon>
            {{menuItemLevelTwo.title}}
            </MenuItem>
          </Submenu>
          <MenuItem v-else :name="menuItemLevelOne.path" :key="index">
          <Icon :type="menuItemLevelOne.icon" :key="index"></Icon>
          {{menuItemLevelOne.title}}
          </MenuItem>
        </template>
      </Menu>

    </transition>
  </div>
</template>

<script>
  import appRouter from "@/router/appRouter";
  import { sidebarMenuConf } from "@/components/index/index";

  export default {
    name: "sidebarMenu",
    props: {
      shrink: Boolean
    },
    data() {
      return {
        appRouter,
        sidebarMenuConf
      };
    },
    computed: {
      backgroundColor() {
        return this.sidebarMenuConf.theme === "dark" ? "#495060" : "#fff";
      },
      iconColor() {
        return this.sidebarMenuConf.theme === "dark"
          ? "rgba(255, 255, 255, 0.7)"
          : "#495060";
      },
      openSubmenu() {
        return appRouter
          .filter(item => {
            if (item.children && item.children.length > 1) {
              return (
                item.children.findIndex(item => {
                  return item.path === this.$route.path;
                }) >= 0
              );
            }
            return false;
          })
          .map(item => {
            return item.path;
          });
      }
    },
    methods: {
      changePath(path) {
        this.$router.push(path);
      }
    }
  };
</script>

<style scoped>
  .sidebar-menu {
    height: 100%;
  }
  .menu {
    height: 100%;
  }
  .shrink-dropdown {
    width: 100%;
  }
  .shrink-button {
    display: block;
    width: 100%;
    padding: 14px 0;
  }
  .shrink-icon {
    font-size: 20px;
  }
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave-active {
    display: none;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>