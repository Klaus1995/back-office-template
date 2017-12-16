<template>
  <Row class="row">
    <Col class="col" :span="5">
    <Menu class="menu" width="auto">
      <template v-for="menuItemLevelOne in appRouter">
        <Submenu v-if="menuItemLevelOne.children" :key="menuItemLevelOne.title">
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
    </Col>
  </Row>
</template>

<script>
  import { appRouter } from "./index";
  export default {
    data() {
      return {
        appRouter
      };
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
  .menu {
    height: 100%;
  }
</style>