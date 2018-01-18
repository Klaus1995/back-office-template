<template>
  <div>
    <Row type="flex" justify="center">
      <Col span="16">
      <Form v-for="(item,index) in homeForm.room" :key="index" :label-width="80" :model="item" :ref="'roomForm'+index" :rules="roomFormRules">
        <FormItem label="房间编号">
          <span>{{++index}}</span>
        </FormItem>
        <FormItem label="房间名称" prop="name">
          <Input v-model="item.name" />
        </FormItem>
        <FormItem label="基本房租" prop="rent">
          <InputNumber v-model="item.rent" :min="0" :step="100" />
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input v-model="item.remark" type="textarea" />
        </FormItem>
        <div class="divider" v-if="item.id<homeForm.room.length-1"></div>
      </Form>
      </Col>
    </Row>
    <Row type="flex" justify="center" :gutter="10">
      <Col span="2">
      <Button @click="prev">上一步</Button>
      </Col>
      <Col span="2">
      <Button @click="next">下一步</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        homeForm: {},
        roomFormRules: {
          name: [{ required: true, message: "房间名称不能为空", trigger: "blur" }],
          rent: [
            {
              required: true,
              type: "number",
              message: "基本房租不能为空",
              trigger: "blur"
            }
          ]
        },
        test: {
          name: ""
        }
      };
    },
    methods: {
      prev() {
        this.$store.state.homeForm = this.homeForm;
        this.$emit("prev");
      },
      next() {
        this.check().then(result => {
          if (result) {
            this.$store.state.homeForm = this.homeForm;
            this.$emit("next");
          }
        });
      },
      check() {
        let promiseList = [];
        for (let i = 0; i < this.homeForm.room.length; i++) {
          promiseList.push(
            new Promise((resolve, reject) => {
              this.$refs["roomForm" + i][0].validate(valid => {
                resolve(valid);
              });
            })
          );
        }
        return Promise.all(promiseList).then(validList => {
          return validList.every(item => item);
        });
      }
    },
    created() {
      this.homeForm = this.$store.state.homeForm;
    }
  };
</script>

<style scoped>
  .divider {
    width: 90%;
    border-bottom: 2px dashed #eee;
    margin: 0 auto 30px;
  }
</style>
