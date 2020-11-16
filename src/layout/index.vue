<template>
    <el-container class="layout-box">
        <!--左侧-->
        <el-aside class="aside" width="initial">
            <Menu class="aside" :menuShow="menuShow"></Menu>
        </el-aside>
        <!--右侧-->
        <el-container>
            <!--右侧头部-->
            <el-header class="header" height="auto">
                <el-row class="row" type="flex" justify="space-between" align="center">
                    <el-col class="btn" :span="2">
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
            <el-main class="main">
              <transition name="el-fade-in" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from './modul/Menu';
    import {signOut} from "../request/api/login";
    import router from "../router";
    export default {
        name: "Layout",
        components:{
            Menu:Menu
        },
        data(){
            return{
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
              if (first && first.name !== '仪表盘') {
                matched = [{path: '/',name: '仪表盘'}].concat(matched)
              }
              if(first && first.name === '仪表盘'){
                matched ='';
              }
              this.levelList = matched;
            },
            //退出登录
            async signOutBtn(){
                await signOut({});
                await sessionStorage.clear();
                await router.push({path:'/login'})
            }
        },
      mounted() {
        this.getBreadcrumb()
      },
      watch:{
            $route(to,form){
                this.getBreadcrumb();
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
        //border-bottom: 1px solid #eee;
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
              line-height: 40px;
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
        background: #fff;
        overflow: auto;
    }
    //.fade-enter {
    //  transform: translateX(0);
    //  opacity:0;
    //}
    //.fade-leave{
    //  transform: translateX(100%);
    //  opacity:1;
    //}
    //.fade-enter-active{
    //  transition:opacity .4s;
    //}
    //.fade-leave-active{
    //  opacity:0;
    //  transition:opacity .3s;
    //}
</style>
