<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
      <Form :label-width="100">
        <FormItem label="电费模式" prop="electricityFeeMode">
          <RadioGroup v-model="homeForm.electricityFeeMode">
            <Radio label="null">无</Radio>
            <Radio label="simple">简单模式</Radio>
            <Radio label="complex">复杂模式</Radio>
          </RadioGroup>
          <Tooltip>
            <Icon type="ios-help" :size="14" class="help"></Icon>
            <div slot="content">
              <p>无：不需要缴纳电费</p>
              <p>简单模式：电费固定</p>
              <p>复杂模式：根据每月电费动态调整</p>
            </div>
          </Tooltip>
        </FormItem>
        <FormItem label="电费/度" prop="electricityFeePerDegree" v-show="homeForm.electricityFeeMode==='simple'">
          <InputNumber :v-model="homeForm.electricityFeePerDegree" :min="0" :step="0.1" />
        </FormItem>
        <FormItem label="水费模式" prop="waterFeeMode">
          <RadioGroup v-model="homeForm.waterFeeMode">
            <Radio label="null">无</Radio>
            <Radio label="simple">简单模式</Radio>
            <Radio label="complex">复杂模式</Radio>
          </RadioGroup>
          <Tooltip>
            <Icon type="ios-help" :size="14" class="help"></Icon>
            <div slot="content">
              <p>无：不需要缴纳水费</p>
              <p>简单模式：水费固定</p>
              <p>复杂模式：根据每月水费动态调整</p>
            </div>
          </Tooltip>
        </FormItem>
        <FormItem label="水费/吨" prop="waterFeePerTon" v-show="homeForm.waterFeeMode==='simple'">
          <InputNumber :v-model="homeForm.waterFeePerTon" :min="0" :step="0.1" />
        </FormItem>
        <FormItem label="天然气费模式" prop="gasFeeMode">
          <RadioGroup v-model="homeForm.gasFeeMode">
            <Radio label="null">无</Radio>
            <Radio label="simple">简单模式</Radio>
            <Radio label="complex">复杂模式</Radio>
          </RadioGroup>
          <Tooltip>
            <Icon type="ios-help" :size="14" class="help"></Icon>
            <div slot="content">
              <p>无：不需要缴纳天然气费</p>
              <p>简单模式：天然气费固定</p>
              <p>复杂模式：根据每月天然气费动态调整</p>
            </div>
          </Tooltip>
        </FormItem>
        <FormItem label="天然气费/立方米" prop="gasFeePerTon" v-show="homeForm.gasFeeMode==='simple'">
          <InputNumber :v-model="homeForm.gasFeePerTon" :min="0" :step="0.1" />
        </FormItem>
        <FormItem label="网费模式" prop="webFeeMode">
          <RadioGroup v-model="homeForm.webFeeMode">
            <Radio label="null">无</Radio>
            <Radio label="simple">简单模式</Radio>
            <Radio label="complex">复杂模式</Radio>
          </RadioGroup>
          <Tooltip>
            <Icon type="ios-help" :size="14" class="help"></Icon>
            <div slot="content">
              <p>无：不需要缴纳网费</p>
              <p>简单模式：网费固定</p>
              <p>复杂模式：根据每月网费动态调整</p>
            </div>
          </Tooltip>
        </FormItem>
        <FormItem label="网费/月" prop="webFeePerMonth" v-show="homeForm.webFeeMode==='simple'">
          <InputNumber :v-model="homeForm.webFeePerMonth" :min="0" :step="10" />
        </FormItem>
        <FormItem label="其他费用/月" prop="otherFeePerMonth">
          <InputNumber :v-model="homeForm.otherFeePerMonth" :min="0" :step="1" />
        </FormItem>
      </Form>
      <Row type="flex" justify="center" :gutter="10">
        <Col span="3">
        <Button @click="prev">上一步</Button>
        </Col>
        <Col span="3">
        <Button @click="next">下一步</Button>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        homeForm: {}
      };
    },
    methods: {
      prev() {
        this.$emit("prev");
      },
      next() {
        console.log(this.homeForm);
      }
    },
    created() {
      this.homeForm = this.$store.state.homeForm;
    }
  };
</script>

<style scoped>
  .help {
    cursor: pointer;
  }
</style>
