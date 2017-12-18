<template>
  <Card>
    <p slot="title">
      <Icon type="ios-settings-strong"></Icon>
      筛选
    </p>
    <Row class="row" :gutter="10">
      <Col span="8">
      <Select placeholder="筛选条件一">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      </Col>
      <Col span="8">
      <Select placeholder="筛选条件二">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      </Col>
      <Col span="8">
      <Select placeholder="筛选条件三">
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      </Col>
    </Row>
    <Row class="row" :gutter="10">
      <Col span="8">
      <Input placeholder="搜索条件"></Input>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col>
      <Button type="primary">搜索</Button>
      <Button class="ml-10" type="default">取消</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  export default {
    name: "tableFilter"
  };
</script>

<style scoped>
  .row {
    margin-bottom: 20px;
  }
  .long {
    width: 90%;
  }
  .ml-10 {
    margin-left: 10px;
  }
</style>
