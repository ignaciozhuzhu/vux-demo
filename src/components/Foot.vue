<template>
  <tabbar :active="tabActive">  
      <tabbar-item link="/first" selected>  
        <img  slot="icon" class="a" src="../assets/img_trans.gif">  
        <img  slot="icon-active" class="a1" src="../assets/img_trans.gif">  
        <span slot="label">首页</span>  
      </tabbar-item>  
      <tabbar-item link="/second">  
        <img  slot="icon" class="b" src="../assets/img_trans.gif">  
        <img  slot="icon-active" class="b1" src="../assets/img_trans.gif">  
        <span slot="label">要提问</span>  
      </tabbar-item>  
      <tabbar-item link="/third">  
        <img  slot="icon" class="c" src="../assets/img_trans.gif">  
        <img  slot="icon-active" class="c1" src="../assets/img_trans.gif">  
        <span slot="label">阴阳师</span>  
      </tabbar-item>  
      <tabbar-item link="/forth">  
        <img  slot="icon" class="d" src="../assets/img_trans.gif">  
        <img  slot="icon-active" class="d1" src="../assets/img_trans.gif">  
        <span slot="label" v-on:click="tabBarClick">我的</span>  
      </tabbar-item> 
  </tabbar>  

</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

$("tabbar-item").click=function(){
  console.log(77)
}

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      title:'ssss',
      tabActive: 0 // tabActive 组件内部不控制，便于和 vuex做配合
    }
  },
  methods: {
    tabBarClick (index) {
      console.log(index)
      $(".b1").addClass("b");
      $(".b").removeClass("b1");
      console.log(1)
      this.tabActive = index  // 响应点击事件
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.a{
  background-image: url(../assets/dashen.jpg);
  background-position: 0 0;
}
.a1{
  background-image: url(../assets/dashen.jpg);
  background-position: 0 25px;
}
.b{
  background-image: url(../assets/dashen.jpg);
  background-position: -27px 0;
}
.b1{
  background-image: url(../assets/dashen.jpg);
  background-position: -27px 25px;
}
.c{
  background-image: url(../assets/dashen.jpg);
  background-position: -58px 1px;
}
.c1{
  background-image: url(../assets/dashen.jpg);
  background-position: -58px 25px;
}
.d{
  background-image: url(../assets/dashen.jpg);
  background-position: -85px 0;
}
.d1{
  background-image: url(../assets/dashen.jpg);
  background-position: -85px 25px;
}
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
  color: rgb(0,188,212);
}
</style>
