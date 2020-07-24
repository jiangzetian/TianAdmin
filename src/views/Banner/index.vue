<template>
    <div class="banner">
      <transition name="el-zoom-in-top" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>