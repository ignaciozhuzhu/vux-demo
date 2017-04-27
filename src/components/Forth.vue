<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <group title="头像">
      <cell title="姓名" value="蓝精灵" is-link></cell>
      <cell title="性别" value="男" @click.native="click"></cell>
      <cell title="年龄" value="19岁" is-link></cell>
      <cell title="职业" value="IT" is-link></cell>
      <cell title="家庭住址" value="浙江省西湖区" is-link link="/my/address"></cell>
      <cell title="邮箱地址" value="未填写" is-link link="/my/email"></cell>
      <cell title="所在医院" value="浙江省第一人民医院" is-link></cell>
    </group>
    <br />
    <group>
      <cell title="帮助与反馈" is-link></cell>
      <cell title="客服电话" value="400-XXXX-XXXX" is-link></cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  components: { Group, Cell },
  name: 'hello',
  data() {
    return {
      msg: '我的信息'
    }
  },
  methods: {
    click: function() {
      alert('这里将会弹出选择性别')
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
