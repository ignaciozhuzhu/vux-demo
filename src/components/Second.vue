<template>
  <div class="hello">
    <h3 class="title">{{ msg }}</h3>
    <br>
    <x-button type="primary" @click.native="click">我也来问</x-button>
  </div>
</template>
<script>
import { Group, Cell, XButton } from 'vux'
export default {
  name: 'hello',
  components: { XButton },
  data() {
    return {
      msg: '身体小毛病 快速问医生'
    }
  },
  methods: {
    click: function() {
      alert('请提问')
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
