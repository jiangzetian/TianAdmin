<template>
  <div id="app">
    <Login v-if="!$route.meta.keepAlive"></Login>
    <Layout v-if="$route.meta.keepAlive"></Layout>
  </div>
</template>

<script>
  import Layout from '@/layout';
  import Login from  '@/views/Login'
  export default {
    name:"App",
    components:{
      Layout:Layout,
      Login:Login,
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
