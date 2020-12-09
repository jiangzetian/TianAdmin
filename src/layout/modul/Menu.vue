<template>
    <el-menu
            class="menu"
            background-color="#304156"
            text-color="#BFCBD9"
            active-text-color="#409EFF"
            :default-active="this.$route.path"
            :collapse="!menuShow"
            collapse-transition
            unique-opened
            router
    >
        <template>
            <h1>Tian<span v-if="menuShow">Admin</span></h1>
        </template>
        <sidebar-item :menuShow="menuShow" :menu="paths"/>
    </el-menu>
</template>

<script>
    import router from '@/router'
    import SidebarItem from  './SidebarItem'
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
        components:{
            'sidebar-item':SidebarItem
        },
        methods:{
            initPath(){
                this.paths = router.options.routes;
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
