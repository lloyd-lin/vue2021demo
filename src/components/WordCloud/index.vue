<template>
  <div class="echart-word-could" id="my-echart-word-could"></div>
</template>

<script>
import 'echarts-wordcloud'

export default {
  props: {
    option: Object
  },
  mounted () {
    const chart = this.$echarts.init(document.getElementById('my-echart-word-could'))
    chart.setOption(this.option)
  }
}
</script>

<style lang="scss" scoped>
  .echart-word-could {
    width: 100%;
    height: 100%;
  }
</style>
