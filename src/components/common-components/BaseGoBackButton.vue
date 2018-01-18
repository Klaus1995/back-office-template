<template>
  <div>
    <a class="go-back-button" @click="goBack">
      <Icon type="chevron-left"></Icon>
      <span class="ml-10">{{text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      text: String
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style scoped>
  .go-back-button {
    display: inline-block;
    font-size: 16px;
    margin: 10px;
  }
  .ml-10 {
    margin-left: 10px;
  }
</style>
