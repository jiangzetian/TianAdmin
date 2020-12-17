<template>
    <el-container class="layout-box">
        <!--左侧-->
        <el-aside class="aside" width="initial">
            <Menu class="aside" :menuShow="menuShow"></Menu>
        </el-aside>
        <!--右侧-->
        <el-container style="background: #F3F2F8;">
            <!--右侧头部-->
            <el-header class="header">
                <el-row class="row" type="flex" justify="space-between" align="center">
                    <el-col class="btn" :span="1">
                        <i class="el-icon-s-unfold" v-if="!menuShow"  @click="menuBtn"></i>
                        <i class="el-icon-s-fold" v-if="menuShow"  @click="menuBtn"></i>
                    </el-col>
                    <el-col class="path" :span="8">
                      <el-breadcrumb>
                        <el-breadcrumb-item v-for="(item,index) in levelList" :key="index+item.path" :to='{path:item.path}'>{{item.name}}</el-breadcrumb-item>
                      </el-breadcrumb>
                    </el-col>
                    <el-col class="avatar">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item @click.native="signOutBtn">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <i class="el-icon-full-screen" @click="bigViewBtn"></i>
                    </el-col>
                </el-row>
            </el-header>
            <!--右侧主内容-->
            <el-card class="main-card" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="#fff">
                <el-main class="main">
                    <transition name="el-fade-in" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-card>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from './modul/Menu';
    import LoginAPI from "@/request/api/login";
    import router from "../router";
    import store from "../store";
    import loading from "../store/modul/loading";
    export default {
        name: "Layout",
        components:{
            Menu:Menu
        },
        data(){
            return{
                loading:this.$store.state.loading.isLoading,
                menuShow:true,
                bigView:true,
                levelList:[
                    {path: '/',name: '仪表盘'}
                ]
            }
        },
        methods:{
            menuBtn(){
                this.menuShow = !this.menuShow;
            },
            //全屏窗口
            bigViewBtn(){
                if (this.bigView){
                    var element = document.documentElement;
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.webkitRequestFullscreen) {
                        element.webkitRequestFullscreen();
                    }
                }else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
                this.bigView=!this.bigView;
            },
            //面包屑
            getBreadcrumb() {
              let matched = this.$route.matched.filter(item => item.name);
              const first = matched[0];
              // if (first && first.name !== '仪表盘') {
              //   matched = [{path: '/',name: '仪表盘'}].concat(matched)
              // }
              if(first && first.name === '仪表盘'){
                matched ='';
              }
              this.levelList = matched;
            },
            //退出登录
            async signOutBtn(){
                let confirm = await this.$confirm('你确定要退出登录吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if(confirm){
                    await LoginAPI.signOut({});
                    sessionStorage.clear();
                    router.push({path:'/login'});
                }
            }
        },
      mounted() {
        // console.log(this.$store.state.loading.isLoading);
        this.getBreadcrumb()
      },
      watch:{
          $route(to,form){
              this.getBreadcrumb();
          },
          '$store.state.loading.isLoading':function (to,form) {
              this.loading = this.$store.state.loading.isLoading;
          }
      }
    }
</script>

<style lang="scss" scoped>
    .layout-box{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .aside{
        background: #304156;
        &:not(.el-menu--collapse) {
            width: 200px;
        }
    }
    .header{
        background: #fff;
        .row{
            height: 100%;
        }
        .btn{
            display: flex;
            align-items: center;
            i{
                cursor: pointer;
                color: #000;
                font-size: 30px;
            }
        }
        .path{
            .el-breadcrumb{
                display: flex;
                align-items: center;
                height: 100%;
            }
        }
        .avatar{
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            i{
                cursor: pointer;
                color: #000;
                font-size: 30px;
                margin:0 20px;
            }
        }
    }
    .main{
        padding: 0;
        background: #fff;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .main-card{
        overflow-y: auto;
        box-sizing: border-box;
        margin: 15px;
        height: 100%;
    }
</style>
