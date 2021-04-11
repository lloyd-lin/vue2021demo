<template>
<div class="top-vew">
  <el-row :gutter="20">
    <el-col :span="12" >
     <el-card shadow="hover">
      <left-chart />
     </el-card>
    </el-col>
     <el-col :span="12">
     <el-card shadow="hover">
       <right-chart />
     </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import LeftChart from '../LeftChart'
import RightChart from '../RightChart'
export default {
  components: {
    LeftChart,
    RightChart
  }
}
</script>

<style scoped>
</style>
