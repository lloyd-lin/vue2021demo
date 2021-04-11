# vue2021demo
vue demo


### git
```
git config --global user.name "xxx"
git config --global user.email "xxx@xx.com"


ssh-keygen -t rsa -C "xxx"
```

# statics

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

vue config
>? Please pick a preset: Manually select features  
? Check the features needed for your project: Babel, Router, CSS Pre-processors, Linter  
? Use history mode for router? (Requires proper server setup for index fallback in production) No  
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)  
? Pick a linter / formatter config: Standard  
? Pick additional lint features: Lint on save  
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files  
? Save this as a preset for future projects? No  

element config
```main.js
import Echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = Echarts
```

### vue router
routes数组每个对象是一个单页，每个单页可以包含compoent或者多个components， compoents里default为默认，后续router-view使用名字来决定组件名字
```router.js
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      test: Home1
    }
  }
]
```
```App.vue
<template>
  <div id="app">
    <router-view></router-view>
    <!-- <router-view name="test"></router-view> -->
  </div>
</template>
```


### mixins
```
// mixin file
import CommonCard from '../components/CommonCard'

export default {
  components: {
    CommonCard
  }
}
// use file
export default {
  mixins: [CommonCardMixin],
}
```

### vue-echarts and component
```
// main.js  import
import VueEcharts from 'vue-echarts'
// regist
Vue.component('v-chart', VueEcharts)
```
vue-chart运行最新版本在vue2需要安装  
```
cnpm i -D @vue/composition-api
```