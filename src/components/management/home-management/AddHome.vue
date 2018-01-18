<template>
  <div>
    <base-go-back-button text="返回房屋管理"></base-go-back-button>
    <Card>
      <p slot="title">
        <Icon type="plus-round"></Icon>
        <span class="home-name">创建新房屋</span>
      </p>
      <Row type="flex" justify="center">
        <Col span="14">
        <Steps :current="step" class="step">
          <Step title="房屋信息" content="房屋基本信息"></Step>
          <Step title="房间信息" content="房间基本信息"></Step>
          <Step title="其他信息" content="房屋其他信息"></Step>
          <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        </Steps>
        </Col>
      </Row>

      <home-form v-if="step===0" @next="next"></home-form>
      <room-form v-if="step===1" @prev="prev" @next="next"></room-form>
      <cost-form v-if="step===2" @prev="prev" @next="next"></cost-form>
    </Card>
  </div>
</template>

<script>
  import HomeForm from "./components/HomeForm.vue";
  import RoomForm from "./components/RoomForm.vue";
  import CostForm from "./components/CostForm.vue";
  import BaseGoBackButton from "@/components/common-components/BaseGoBackButton.vue";
  export default {
    components: {
      HomeForm,
      RoomForm,
      CostForm,
      BaseGoBackButton
    },
    data() {
      return {
        step: 0
      };
    },
    methods: {
      prev() {
        this.step--;
      },
      next() {
        this.step++;
      }
    }
  };
</script>

<style scoped>
  .step {
    margin: 20px;
  }
  .home-name {
    margin-left: 20px;
  }
</style>
