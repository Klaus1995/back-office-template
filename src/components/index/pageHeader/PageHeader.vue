<template>
  <Row class="row" type="flex" align="middle">
    <Col span="1">
    <Button v-if="sidebarMenuConf.shrink" type="text" @click="toggleMenu">
      <Icon type="navicon-round" size="25"></Icon>
    </Button>
    </Col>
    <Col offset="20" span="1">
    <Dropdown>
      <Button type="text">
        <Badge dot>
          <Icon type="chatbubbles" size="25"></Icon>
        </Badge>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>
          <span>未读信息 （10）</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </Col>
    <Col class="ml-10" span="1">
    <Avatar shape="square" icon="person" />
    </Col>
  </Row>
</template>

<script>
  import { sidebarMenuConf } from "@/components/index/index";

  export default {
    name: "pageHeader",
    data() {
      return {
        sidebarMenuConf
      };
    },
    methods: {
      toggleMenu() {
        this.$emit("toggleMenu");
      }
    }
  };
</script>

<style scoped>
  .row {
    position: relative;
    z-index: 1000;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 1px 1px hsla(0, 0%, 39%, 0.1);
  }
  .ml-10 {
    margin-left: 10px;
  }
</style>
