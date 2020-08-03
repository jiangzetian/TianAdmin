<template>
    <div class="article-add">

      <el-row class="row" type="flex"  justify="end">
            <el-button type="primary" size="mini" @click="submit">提交</el-button>
      </el-row>

      <mavon-editor
                v-model="content"
                ref="md"
                @change="change"
                style="min-height: 600px"
      />

      <el-row class="row">
        <el-col :span="12" :xs="24">
          <el-card>
            <el-form label-position="top" label-width="80px">
              <el-form-item label="标题：">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="描述：">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="类别：">
                <el-select value="shanghai">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="日期：">
                <el-date-picker
                    type="date"
                    placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item label="封面：">
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>

    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: "Add",
        components: {
            mavonEditor,
        },
        data() {
            return {
              formLabelAlign:{},
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

<style lang="scss" scoped>
    .row{
      margin: 20px 0;
    }
</style>