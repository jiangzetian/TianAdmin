<template>
    <el-menu
            class="menu"
            background-color="#304156"
            text-color="#BFCBD9"
            active-text-color="#409EFF"
            :default-active="'/' +this.$route.path.split('/')[1]"
            :collapse="!menuShow"
            :collapse-transition="false"
            :router="true"
    >
        <template>
            <h1>Tian<span v-if="menuShow">Admin</span></h1>
        </template>
        <div v-for="item in paths" :key="item.name">
          <el-menu-item v-if="!item.meta.childrenShow && item.meta.menuShow" :index="item.path">
            <i :class="item.meta.iconClass"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <el-submenu   v-if="item.meta.childrenShow && item.meta.menuShow" :index="item.path">
            <template slot="title">
              <i :class="item.meta.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="(val,index) in item.children" :index="item.path+'/'+val.path" :key="index">{{ val.name }}</el-menu-item>
          </el-submenu>
        </div>
    </el-menu>
</template>

<script>
    import router from '@/router'
    export default {
        name: "Menu",
        data(){
          return{
            paths:[],
          }
        },
        props: {
            menuShow: Boolean
        },
        methods:{
          initPath(){
            this.paths = router.options.routes;
            // console.log(router.options.routes);
          },
        },
        mounted() {
          this.initPath()
        }
    }
</script>

<style lang="scss" scoped>
    .menu{
        border: none;
    }
    h1{
        margin: 20px 0;
        text-align: center;
        color: #fff;
    }
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>