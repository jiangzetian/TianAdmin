<template>
    <div>
        <!--按钮-->
        <el-row class="row btns" type="flex">
            <div>
                <el-button
                        :disabled="disabled"
                        icon="el-icon-check"
                        type="primary"
                        @click="submitBtn"
                >提交
                </el-button>
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
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import {mavonEditorOption} from '../option.js'
    import {resumeAPI} from "@/request/api/about";
    export default {
        name: "resume",
        components: {
            mavonEditor,
        },
        data(){
            return{
                editorOption:mavonEditorOption,
                resumeData:[],
                disabled:true,
                content:'', // 输入的markdown
                codeStyle:'monokai',//代码高亮主题
            }
        },
        methods:{
            change(e){
                if(e === this.resumeData.content){
                    this.disabled = true;
                }else {
                    this.disabled = false;
                }
            },
            async getData(){
                let res = await resumeAPI.index({id:'601a41b9eb10d'});
                this.resumeData = res.data;
                this.content = res.data.content;
                console.log(res.data);
            },
            async submitBtn(){
                await resumeAPI.update({id:this.resumeData.id,content:this.content});
                this.disabled = true;
                this.getData();
                this.$message.success('更新成功！');
            }
        },
        created() {
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        margin: 5px 0 20px 0;
    }
</style>
