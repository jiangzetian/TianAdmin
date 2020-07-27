<template>
  <div>
    <el-button-group class="btnRroup">
      <router-link class="btnItem" :to="{ path:'show'}">
        <el-button type="primary" size="mini" icon="el-icon-view">查看</el-button>
      </router-link>
    </el-button-group>
    <transition name="el-zoom-in-top" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.btnRroup{
  margin-bottom: 10px;
}
.btnItem{
  margin: 0 5px;
}
</style>