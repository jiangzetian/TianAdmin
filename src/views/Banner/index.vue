<template>
    <div class="banner">
      <!--操作按钮组-->
      <el-button-group class="btnRroup">
        <router-link class="btnItem" :to="{ path:'show'}">
          <el-button type="primary" size="mini" icon="el-icon-view">查看</el-button>
        </router-link>
        <router-link class="btnItem" :to="{ path:'add'}">
          <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
        </router-link>
      </el-button-group>

      <!--窗口-->
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
.btnRroup{
  margin-bottom: 10px;
}
.btnItem{
  margin: 0 5px;
}
</style>