<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> {{msg}}</h1>
    </div>
    <!--     <group title="cell demo">
  <cell title="Vux" value="Cool" is-link></cell>
  <cell title="name" value="Cool2" is-link></cell>
</group> -->
  </div>
</template>
<script>
import { Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello !晴明SAMA',
      title: 'ssss'
    }
  }
}
</script>
<style scoped>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
