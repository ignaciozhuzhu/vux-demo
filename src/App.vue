<template>
  <div id="app">
    <Foot></Foot>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
//import Home from './components/HelloFromVux.vue'
//import Hello from './components/Hello.vue'

import Foot from './components/Foot.vue'
export default {
  name: 'app',
  components: { Foot }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
</style>
<style>
button.weui-btn,
input.weui-btn {
  width: 70% !important
}

.title {
  text-align: center
}
</style>
