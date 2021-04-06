<template>
  <div class="home">
    home
    <top-view></top-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView'

export default {
  name: 'Home',
  components: {
    TopView
  }
}
</script>
<style>
  .home {
    width: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
