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
                    <el-col class="btn">
                        <i class="el-icon-s-unfold" v-if="!menuShow"  @click="menuBtn"></i>
                        <i class="el-icon-s-fold" v-if="menuShow"  @click="menuBtn"></i>
                    </el-col>
                    <el-col class="avatar">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <i class="el-icon-full-screen" @click="bigViewBtn"></i>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-breadcrumb>
                        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to='{path:item.path}'>{{item.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-row>
            </el-header>
            <!--右侧主内容-->
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from './modul/Menu'
    export default {
        name: "Layout",
        components:{
            Menu:Menu
        },
        data(){
            return{
                menuShow:true,
                bigView:true,
                levelList:[{path: '/',name: '首页'}]
            }
        },
        methods:{
            menuBtn(){
                this.menuShow = !this.menuShow;
            },
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
            getBreadcrumb() {
                let routeData = this.$route;
                if(routeData.name == '首页'){
                    this.levelList.splice(1,1);
                }else {
                    this.levelList[1]={
                        path:routeData.path,
                        name:routeData.name,
                    }
                }
                // console.log(this.levelList);
            }
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
        border-bottom: 1px solid #eee;
        .row{
            margin: 10px 0;
            /*height: 100%;*/
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
</style>