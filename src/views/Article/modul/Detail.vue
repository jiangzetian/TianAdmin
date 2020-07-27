<template>
    <div class="article-detail">
      <el-row class="btn-row" type="flex"  justify="end">
        <el-button type="primary" size="mini" @click="submit">提交</el-button>
      </el-row>
      <mavon-editor
          v-model="content"
          ref="md"
          @change="change"
          style="min-height: 600px"
      />
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
  margin-bottom: 10px;
}
</style>