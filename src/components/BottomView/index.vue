<template>
  <div class="chart-wrapper">
    <div class="chart-interest"><v-chart :option="interesting" /></div>
    <div class="chart-label"><word-cloud :option="words"/></div>
  </div>
</template>

<script>
const colors = ['#5085f2', '#8d7fec', '#f8726b', '#efae38', '#78f283', '#4bc1fc', '#3b91e9']
export default {
  data () {
    return {
      interesting: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          show: false
        },
        series: [
          {
            name: '兴趣',
            type: 'pie',
            radius: ['45%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                fontSize: 22
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              smooth: true,
              color: '#123123'
            },
            itemStyle: {
              color: (params) => {
                return colors[params.dataIndex]
              }
            },
            data: [
              { value: 800, name: '游戏' },
              { value: 800, name: '编程' },
              { value: 690, name: '动漫' },
              { value: 500, name: '读书' },
              { value: 400, name: '音乐' },
              { value: 300, name: '运动' }
            ]
          }
        ]
      },
      words: {
        series: [{
          type: 'wordCloud',
          data: [{
            name: 'Farrah Abraham',
            value: 366
          }, {
            name: 'Abraham',
            value: 55
          }, {
            name: 'Abraham',
            value: 55
          }, {
            name: 'Abraham',
            value: 55
          }]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .chart-wrapper {
    display: flex;
    flex-direction: column;
    height: 452px;
    background-color: white;
    .chart-interest {
      height: 452px;
      width: 50%;
    }
    .chart-label {
      height: 452px;
       width: 50%;
    }
  }
</style>
