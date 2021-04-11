<template>
  <common-card
    title="左侧"
    value="￥1234"
  >
    <template>
      <div class="container-wrapper" id="left-chart" :style="{ width: '100%', height: '100%'}">
      </div>
    </template>
    <template v-slot:footer>
      我是底部
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/commonCardMixin'

export default {
  mixins: [CommonCardMixin],
  mounted () {
    const chartDom = document.getElementById('left-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false
      },
      yAxis: {
      },
      series: [{
        data: [435, 161, 56, 978, 12, 436, 93, 49, 650],
        type: 'line'
      }],
      grid: {
        top: 30,
        bottom: 15,
        left: 50,
        right: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .container-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
</style>
