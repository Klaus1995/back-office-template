<template>
  <div>
    <Row :gutter="10" type="flex">
      <Col :lg="{span:16,order:1}" :md="{span:24,order:2}" :sm="{span:24,order:2}">
      <table-list class="mb-10"></table-list>
      </Col>
      <Col :lg="{span:8,order:2}" :md="{span:24,order:1}" :sm="{span:24,order:1}">
      <Row :gutter="10" type="flex">
        <Col :lg="24" :md="12" :sm="24">
        <table-filter class="mb-10"></table-filter>
        </Col>
        <Col :lg="24" :md="12" :sm="24">
        <chart class="mb-10"></chart>
        </Col>
      </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  import TableFilter from "@/components/main_components/filter/Filter.vue";
  import TableList from "@/components/main_components/table/Table.vue";
  import Chart from "@/components/main_components/chart/Chart.vue";
  export default {
    components: {
      TableFilter,
      TableList,
      Chart
    }
  };
</script>

<style scoped>
  .mb-10 {
    margin-bottom: 10px;
  }
</style>

