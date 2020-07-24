<template>
    <div class="Article">
      <transition name="el-zoom-in-top" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "Article"
    }
</script>

<style scoped>

</style>