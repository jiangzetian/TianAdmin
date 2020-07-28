<template>
  <div class="home">
    <el-row :gutter="20">
        <el-col :span="6">
          <el-card>
            <h2>浏览总数：</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>文章总数：</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>用户总数：</h2>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card>
            <h2>评论总数：</h2>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      'text':'11111'
    }
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
.btn{
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background: #ccc;
}
</style>