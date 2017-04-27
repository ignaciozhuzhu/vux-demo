<template>
  <div class="hello">
    <group>
      <cell title="请输入您的邮箱地址"></cell>
    </group>
    <br>
    <br>
    <br>
    <x-button type="primary" @click.native="click">保存</x-button>
  </div>
</template>
<script>
import { Group, Cell, XButton } from 'vux'
export default {
  components: { Group, Cell, XButton },
  name: 'hello',
  data() {
    return {
      msg: '邮箱地址'
    }
  },
  methods: {
    click: function() {
      alert('已保存')
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
