<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
      <Form :model="homeForm" ref="homeForm" :rules="homeFormRules" :label-width="80" class="mt-10">
        <FormItem label="房屋名称" prop="name">
          <Input v-model="homeForm.name" />
        </FormItem>
        <FormItem label="房屋地址" prop="addr">
          <al-selector v-model="homeForm.addr" class="addr-select" level="2" />
        </FormItem>
        <FormItem label="详细地址" prop="addrDetail">
          <Input v-model="homeForm.addrDetail" />
        </FormItem>
        <FormItem label="房间数" prop="roomNumber">
          <InputNumber v-model="homeForm.roomNumber" :min="1" />
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input v-model="homeForm.remark" type="textarea" />
        </FormItem>
      </Form>
      <Row type="flex" justify="center">
        <Col span="2">
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
        homeForm: {},
        homeFormRules: {
          name: [{ required: true, message: "房屋名称不能为空", trigger: "blur" }],
          roomNumber: [
            {
              required: true,
              type: "number",
              message: "房屋地址不能为空",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      next() {
        this.$refs.homeForm.validate(valid => {
          if (valid) {
            this.save();
            this.$emit("next");
          }
        });
      },
      save() {
        this.homeForm.addr = this.homeForm.addr.map(item => item.name);
        if (this.homeForm.room.length > this.homeForm.roomNumber) {
          this.homeForm.room.splice(this.homeForm.roomNumber);
        } else {
          for (
            let i = this.homeForm.room.length;
            i < this.homeForm.roomNumber;
            i++
          ) {
            this.homeForm.room[i] = { id: i, name: "", rent: 0, remark: "" };
          }
        }
        this.$store.state.homeForm = this.homeForm;
      }
    },
    created() {
      this.homeForm = this.$store.state.homeForm;
    }
  };
</script>

<style>
  .mt-10 {
    margin-top: 10px;
  }
  .addr-select .ivu-row {
    margin: 0 !important;
  }
</style>
