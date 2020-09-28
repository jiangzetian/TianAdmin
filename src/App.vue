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

</style>
