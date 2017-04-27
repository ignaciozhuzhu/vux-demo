<template>
  <div class="hello">
    <h1 class="title">营养师列表</h1>
    <group style="width: 48%;    display: inline-block;">
      <selector :value.sync="value0" placeholder="全部医院" :options="list"></selector>
    </group>
    <group style="width: 48%;    display: inline-block;">
      <selector :value.sync="value0" placeholder="全部科室" :options="list"></selector>
    </group>
    <Docs></Docs>
    <Docs></Docs>
    <Docs></Docs>
    <Docs></Docs>
    <Docs></Docs>
    <Docs></Docs>
    <Docs></Docs>
  </div>
</template>
<script>
import Docs from './Docs.vue'
import { Selector, Group } from 'vux'
export default {
  name: 'hello',
  components: { Docs, Selector, Group },
  data() {
    return {
      defaultValue: '',
      list: [{ key: '0', value: '全部医院' }, { key: '1', value: '省第一医院' }, { key: '2', value: '省第二医院' }],
      list2: [{ key: '0', value: '全部科室' }, { key: '1', value: '口腔' }, { key: '2', value: '胸外' }],
      value0: 0,
    }
  },
  methods: {
    selected(val) {
      this.open = val == "2" ? true : false;
      console.log(22)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
