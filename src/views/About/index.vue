<template>
    <div class="about">
        <transition name="el-zoom-in-top" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
</style>
