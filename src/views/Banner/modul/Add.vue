<template>
    <div class="add">
        <el-row class="btn-row">
            <el-card shadow="never">
              <div slot="header" class="clearfix">
                <span>上传幻灯片</span>
              </div>
                <el-upload
                        action="https://image.tianxiaotian.xyz/api/upload"
                        name="image"
                        drag
                        :headers="imgToken"
                        :multiple="true"
                        :data="postData"
                        :before-upload="beforeUpload"
                        :on-remove="deleteUpload"
                        :on-success="successUpload"
                        :file-list="fileList"
                        list-type="picture">

                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip"></div>

                </el-upload>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                imgToken:{},
                fileList: [],
                postData:{},
            };
        },
        methods:{
            getImgToken(){
              this.$api.banner.getUpImgToken({
                "email": "1139246375@qq.com",
                "password": "13786079813jzt"
              }).then(res=>{
                this.imgToken = res.data;
              })
            },
            beforeUpload(){},
            successUpload(response, file, fileList){
              console.log(response);
              this.$message({
                'message':'图片上传成功',
                type: 'success'
              });
            },
            deleteUpload(file, fileList){
              // console.log(file);
              // let token = this.imgToken.token;
              // this.$api.banner.deleteUpImg({
              //   "id": file.response.data.md5,
              // },{
              //   "content-type": "application/json",
              //   "token":token
              // }).then(res=>{
              // })
            }
        },
        mounted() {
          //获取图片上传接口
          this.getImgToken();
        }
    }
</script>

<style lang="scss" scoped>
    .btn-row{
        margin: 20px 0;
    }
</style>