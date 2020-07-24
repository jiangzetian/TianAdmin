<template>
    <div class="article-detail">
      <el-row class="btn-row" type="flex" justify="space-between" align="center">
        <el-col :span="22">
          <h2>编辑文章</h2>
        </el-col>
        <el-col :span="2">
          <router-link :to="{ path:'show'}">
            <el-button plain type="primary">文章列表</el-button>
          </router-link>
        </el-col>
      </el-row>
      <mavon-editor
          v-model="content"
          ref="md"
          @change="change"
          style="min-height: 600px"
      />
      <el-button plain type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "Detail",
      components: {
        mavonEditor,
      },
      data() {
        return {
          content:'', // 输入的markdown
          html:'',    // 及时转的html
        }
      },
      methods: {
        // 所有操作都会被解析重新渲染
        change(value, render){
          // render 为 markdown 解析后的结果[html]
          this.html = render;
        },
        // 提交
        submit(){
          console.log(this.content);
          console.log(this.html);
        }
      },
      mounted() {

      }
    }
</script>

<style scoped>
.btn-row{
  margin: 20px 0;
}
</style>