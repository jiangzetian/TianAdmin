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
        <el-menu-item index="/">
            <i class="el-icon-stopwatch"></i>
            <span slot="title">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="/banner">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">幻灯片</span>
        </el-menu-item>
        <el-menu-item index="/about">
            <i class="el-icon-postcard"></i>
            <span slot="title">关于我</span>
        </el-menu-item>
        <el-menu-item index="/article">
            <i class="el-icon-document"></i>
            <span slot="title">文章管理</span>
        </el-menu-item>
<!--        <el-submenu index="1">-->
<!--            <template slot="title">-->
<!--                <i class="el-icon-user"></i>-->
<!--                <span>用户管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group title="分组一">-->
<!--                <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--        </el-submenu>-->
        <el-menu-item index="5">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">留言管理</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            menuShow: Boolean
        },
        methods:{
        },
        mounted() {
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