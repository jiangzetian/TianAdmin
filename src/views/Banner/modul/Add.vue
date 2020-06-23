<template>
    <div class="add">
        <el-row class="btn-row" type="flex" justify="space-between" align="center">
            <el-col :span="22">
                <h2>添加幻灯片</h2>
            </el-col>
            <el-col :span="2">
                <router-link :to="{ path:'show'}">
                    <el-button plain type="primary">查看幻灯片</el-button>
                </router-link>
            </el-col>
        </el-row>
        <el-row class="btn-row" type="flex" justify="center" align="center">
            <el-col :span="12">
                <el-upload
                        class="upload-demo"
                        :multiple="true"
                        action="https://jzt_blog.s3-cn-south-1.qiniucs.com"
                        :before-upload="beforeAvatarUpload"
                        :data="postData"
                        :on-success="handleAvatarSuccess"
                        :file-list="fileList"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ],
                postData:{},
            };
        },
        methods:{
            beforeAvatarUpload(){

            },
            handleAvatarSuccess(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-row{
        margin: 20px 0;
    }
</style>