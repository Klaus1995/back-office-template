<template>
  <div>
    <Card>
      <p slot="title">
        <Icon type="stats-bars"></Icon>
        图表
      </p>
      <Row>
        <Col>
        <div id="chart" class="chart"></div>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import echarts from "echarts";

  export default {
    name: "chart",
    mounted() {
      var myChart = echarts.init(document.getElementById("chart"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  };
</script>

<style>
  .chart {
    width: 100%;
    height: 200px;
  }
</style>

