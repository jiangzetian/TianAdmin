<template>
    <div class="menu-wrapper">
        <template v-for="item in menu">
            <!-- 最后一级菜单 -->
            <el-menu-item
                    v-if="!item.children && item.meta.keepAlive && item.meta.menuShow"
                    :key="item.path"
                    :index="parent ? parent + '/' + item.path : item.path"
            >
                <i :class="item.meta.iconClass"></i>
                <span slot="title">{{ item.name }}</span>
            </el-menu-item>

            <!-- 此菜单下还有子菜单 -->
            <el-submenu
                    v-if="item.children  && item.meta.keepAlive && item.meta.menuShow"
                    :key="item.path"
                    :index="parent ? parent + '/' + item.path : item.path"
            >
                <template slot="title">
                    <i :class="item.meta.iconClass"></i>
                    <span v-show="menuShow">{{ item.name }}</span>
                </template>
                <!-- 递归 -->
                <sidebar-item
                        :menu="item.children"
                        :parent="parent ? parent + '/' + item.path : item.path"
                />
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
        name: "SidebarItem",
        props: ["menuShow","menu", "parent"],
    }
</script>

<style scoped>

</style>