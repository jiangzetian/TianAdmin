<template>
    <div class="article-add">
      <!--按钮-->
      <el-row class="row btns" type="flex">
        <div>
          <el-badge :is-dot="!articleStting">
            <el-button @click="drawer = true" icon="el-icon-s-tools" type="primary">设置</el-button>
          </el-badge>
        </div>
        <div>
          <el-button @click="submit" :disabled="!articleStting" icon="el-icon-check"  type="primary">提交</el-button>
        </div>
      </el-row>

      <!--文本编辑器-->
      <mavon-editor
                v-model="content"
                ref="md"
                @change="change"
                :codeStyle="codeStyle"
                :toolbars="editorOption"
                style="min-height: 520px;height:calc(100vh - 220px);margin: 0 5px 5px 5px"
      />

      <!--文章设置栏-->
      <el-drawer
              title="文章设置"
              :visible.sync="drawer"
              @closed="onSubmit()"
      >
        <el-form  label-width="70px" :model="formData" :rules="rules" ref="articleForm">
          <el-row>
            <el-col :span="22" class="upload-box">
              <el-form-item label="封面：" prop="url">
                <el-upload
                        class="upload-content"
                        action="https://image.tianxiaotian.xyz/api/upload"
                        name="image"
                        drag
                        :limit="1"
                        :headers="imgToken"
                        :multiple="false"
                        :before-upload="beforeUpload"
                        :on-remove="deleteUpload"
                        :on-success="successUpload"
                        :file-list="fileList"
                        list-type="picture">

                  <i class="el-icon-upload"></i>
                  <!--                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
                  <!--                  <div class="el-upload__tip" slot="tip"></div>-->
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
                  <el-option v-for="(item,index) in categoryData" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import {mavonEditorOption} from '../option.js'
    import {getUpImgToken,deleteUpImg} from '@/request/api/common'
    import {categoryAPI,articleAPI} from "@/request/api/article";
    export default {
        name: "Add",
        components: {
            mavonEditor,
        },
        data() {
            return {
              id:'',
              editorOption:mavonEditorOption,
              articleStting:false,
              formData:{
                url:'',
                title:'',
                desc:'',
                category:'',
                date:''
              },
              rules: {
                url: [
                  { required: true, message: '请上传文章封面', trigger: 'change' },
                ],
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
                  { required: true, message: '请选择日期', type: 'string',  trigger: 'change' }
                ],
              },
              categoryData:{},//文章分类数据
              content:'', // 输入的markdown
              html:'',    // 及时转的html
              codeStyle:'monokai',//代码高亮主题
              drawer: false,//设置栏目
              imgToken:{},//图片上传token
              fileList: [],//上传文件列表
            }
        },
        methods: {
          //获取图片上传token
          async getImgToken(){
            let res = await getUpImgToken({
              "email": "1139246375@qq.com",
              "password": "13786079813jzt"
            });
            this.imgToken = res.data;
          },
          //获取文章分类
          async getCategory(){
            let res = await categoryAPI.index({});
            this.categoryData = res.data;
            console.log(this.categoryData);
          },
          //获取文章详情
          async getArticleData(data){
            this.id = data.id;
            this.articleStting = true;
            let res = await articleAPI.detail(data);
            if(res.data){
              let {url,title,desc,category,date,content} = res.data;
              this.formData = {url,title,desc,category,date};
              this.content = content;
              this.fileList = [{name:'当前封面',url:url}]
            }
          },
          //上传前
          beforeUpload(){},
          //成功上传
          successUpload(response, file, fileList){
            this.$message({
              'message':'图片上传成功',
              'type': 'success'
            });
            this.formData.url = response.data.url;
          },
          //删除
          deleteUpload(file, fileList){
            this.formData.url = "";
            let token = this.imgToken.token;
            deleteUpImg({
              "id": file.response.data.id,
            },{
              "content-type": "application/json",
              "token":token
            }).then(res=>{
            })
          },
          //保存文章设置
          onSubmit(){
            this.$refs['articleForm'].validate((valid) => {
              if (valid && this.formData.url) {
                this.articleStting = true;
                this.drawer = false;
              } else {
                this.articleStting = false;
              }
            });
          },
          // 所有操作都会被解析重新渲染
          change(value, render){
            // render 为 markdown 解析后的结果[html]
            this.html = render;
          },
          //上传文章
          async submit(){
            this.onSubmit();
            if (this.articleStting && this.content && this.html){
              console.log(this.id)
              if(this.id){
                this.update();
              }else {
                this.create();
              }
            }
          },
          async update(){
            let formData = this.formData;
            let res = await articleAPI.update({
              "id":this.id,
              "title": formData.title,
              "desc": formData.desc,
              "category": formData.category,
              "url": formData.url,
              "date": formData.date,
              "content": this.content,
              "html": this.html,
              // "visits": 0,
              // "likes": 0
            });
            if(res.code === 200){
              this.$message({
                message: '文章修改成功!',
                type: 'success'
              });
            }
          },
          async create(){
            let formData = this.formData;
            let res = await articleAPI.create({
              "title": formData.title,
              "desc": formData.desc,
              "category": formData.category,
              "url": formData.url,
              "date": formData.date,
              "content": this.content,
              "html": this.html,
              // "visits": 0,
              // "likes": 0
            });
            if(res.code === 200){
              this.$message({
                message: '文章发表成功!',
                type: 'success'
              });
            }
          }
        },
        created() {
          this.getImgToken();
          this.getCategory();
          if(this.$route.query.id){
            this.getArticleData({id:this.$route.query.id});
          }
        }
    }
</script>

<style lang="scss" scoped>
    .row{
      margin: 5px 0 20px 0;
    }
    .upload-box{
      margin-bottom: 20px;
      .upload-content{
        width: 100%;
      }
      /deep/.el-upload,/deep/.el-upload-dragger{
        width: 100%;
      }
      /deep/.el-upload-dragger{
        display: flex;
        justify-content: center;
        align-items: center;
        .el-icon-upload{
          margin: 0;
        }
      }
    }
  .btns{
    >div{
      margin: 0 10px;
    }
  }
</style>
