<template>
    <div class="Article">
<!--      <el-button-group class="btnRroup">-->
<!--        <router-link class="btnItem" :to="{ path:'show'}">-->
<!--          <el-button type="primary" size="mini" icon="el-icon-view">查看</el-button>-->
<!--        </router-link>-->
<!--        <router-link class="btnItem" :to="{ path:'category'}">-->
<!--          <el-button type="primary" size="mini" icon="el-icon-collection-tag">类别</el-button>-->
<!--        </router-link>-->
<!--        <router-link class="btnItem" :to="{ path:'add'}">-->
<!--          <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>-->
<!--        </router-link>-->
<!--      </el-button-group>-->

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