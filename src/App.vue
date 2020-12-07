<template>
  <div id="app">
    <transition name="el-zoom-in-top" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Layout v-if="$route.meta.keepAlive"></Layout>
  </div>
</template>

<script>
  import Layout from '@/layout';
  export default {
    name:"App",
    components:{
      Layout:Layout,
    }
  }
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  /*滚动条的宽度*/
  ::-webkit-scrollbar {
    width:5px;
    height:9px;
  }
  /*外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果*/
  ::-webkit-scrollbar-track {
    display: none;
  }
  /*滚动条的设置*/
  ::-webkit-scrollbar-thumb {
    background-color:#606d71;
    background-clip:padding-box;
    /*min-height:28px;*/
    height: 10px;
    border-radius:2em;
  }
  /*滚动条移上去的背景*/
  ::-webkit-scrollbar-thumb:hover {
    background-color:#304156;
  }
</style>
