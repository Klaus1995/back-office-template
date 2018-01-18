<template>
  <div>
    <Card class="mb-10">
      <p slot="title">
        <Icon type="ios-home"></Icon>
        <span class="home-name">房屋一</span>
      </p>
      <a href="#" slot="extra">
        <Icon type="edit"></Icon>
        <span class="mr-10">编辑</span>
      </a>
    </Card>
    <Card class="mb-10">
      <Row type="flex" justify="center">
        <Col span="4">
        <Button long type="dashed" @click="addHome">
          <Icon type="plus-round"></Icon>
          添加新房屋
        </Button>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      addHome() {
        this.$router.push("/index/management/add-home");
      }
    }
  };
</script>

<style scoped>
  .home-name {
    margin-left: 20px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mr-10 {
    margin-right: 10px;
  }
</style>
