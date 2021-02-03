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
.btnRroup{
  margin-bottom: 40px;
}
.btnItem{
  margin: 0 5px;
}
</style>
