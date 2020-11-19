<template>
    <div class="article-add">
      <el-drawer
              title="文章设置"
              :visible.sync="drawer"
      >
        <el-form  label-width="70px" :model="formData" :rules="rules" ref="articleForm">
          <el-row>
            <el-col :span="24">
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
            </el-col>
            <el-col :span="22">
              <el-form-item label="标题：" prop="title">
                <el-input v-model="formData.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="22">
              <el-form-item label="描述：" prop="desc">
                <el-input v-model="formData.desc" type="textarea"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="类别：" prop="category">
                <el-select value="shanghai" v-model="formData.category">
                  <el-option label="前端开发" value="0"></el-option>
                  <el-option label="后端开发" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="日期：" prop="date">
                <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd"
                        v-model="formData.date"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="6">
              <el-button type="primary" @click="onSubmit">保存设置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-drawer>
      <mavon-editor
                v-model="content"
                ref="md"
                @change="change"
                style="min-height: 550px"
      />
      <el-row class="row" type="flex"  justify="end">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          设置
        </el-button>
        <el-button type="primary" :disabled="!articleStting" @click="submit">提交</el-button>
<!--        <el-button type="primary" @click="submit">提交</el-button>-->
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
              articleStting:false,
              formData:{
                title:'',
                desc:'',
                category:'',
                date:''
              },
              rules: {
                title: [
                  { required: true, message: '请输入文章标题', trigger: 'blur' },
                ],
                desc: [
                  { required: true, message: '请填写文章详情', trigger: 'blur' }
                ],
                category: [
                  { required: true, message: '请选择文章类别', trigger: 'change' }
                ],
                date: [
                  { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
                ],
              },
              content:'', // 输入的markdown
              html:'',    // 及时转的html
              drawer: false,
            }
        },
        methods: {
          //保存文章设置
          onSubmit(){
            this.$refs['articleForm'].validate((valid) => {
              if (valid) {
                this.articleStting = true;
                this.drawer = false;
                console.log(this.formData)
              } else {
                this.articleStting = false;
                return false;
              }
            });
          },
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
