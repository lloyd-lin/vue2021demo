<template>
<div class="sales-view-chart">
  <v-chart
    :option="data"
  />
</div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        dataset: {
          source: [
            ['score', 'years', 'skill'],
            [75, 7, '可视化'],
            [65.6, 3, '小程序'],
            [65, 2, '服务端渲染'],
            [78.4, 4, '工程化'],
            [85.4, 5, '性能优化'],
            [80.4, 4, 'Webpack'],
            [80.1, 5, 'Nodejs'],
            [85.7, 6, 'Http协议相关'],
            [80.1, 7, '浏览器'],
            [85, 4, 'Vue'],
            [90, 5, 'React'],
            [90, 8, 'Html&Css'],
            [91, 8, 'Javascript']
          ]
        },
        grid: {
          containLabel: true,
          left: 15,
          right: 85,
          bottom: 55
        },
        xAxis: {
          name: '经验/年',
          nameTextStyle: {
            padding: [0, 0, 10, 165]
          },
          nameLocation: 'middle',
          position: 'top',
          axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [5, 10]
          },
          min: 0,
          max: 8
        },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 50,
          max: 100,
          text: ['精通', '了解'],
          dimension: 0,
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'years',
              // Map the "product" column to Y axis
              y: 'skill'
            },
            barWidth: '45%'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view-chart {
  margin: 20px 0 20px 0;
  height: 1100px;
  width: 30%;
  background-color: white;
}
</style>
