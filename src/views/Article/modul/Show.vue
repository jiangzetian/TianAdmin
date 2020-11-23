<template>
    <div class="article-show">
        <avue-crud
                :data="data"
                :option="option"
                :page.sync="page"
                :search.sync="search"
                @on-load="onLoad"
                @search-change="searchChange"
                @refresh-change="getList"
                @row-del = "del"
        >
            <template slot="menuLeft">
                <el-button type="primary" icon="el-icon-plus" size="small" @click="navToAdd({})">写文章</el-button>
            </template>
            <template slot-scope="scope" slot="menu">
                <el-button icon="el-icon-check" :size="scope.size" :type="scope.type" @click="navToAdd({'id':scope.row.id})">去修改</el-button>
            </template>
        </avue-crud>
    </div>
</template>

<script>
    import {showTableOption} from '../option.js'
    import {categoryAPI,articleAPI} from "@/request/api/article";
    export default {
        name: "Show",
        data() {
            return {
                data: [],
                option:showTableOption,
                search:{},
                page: {
                    pageSize: 10,
                    currentPage:1,
                    pagerCount:5,
                },
            }
        },
        methods:{
            async getCategory(){
                let res = await categoryAPI.index({});
                let option = this.option;
                option.column[3]['dicData'] = res.data;
                this.option = option;
                console.log(this.option);
            },
            async onLoad(page){
                this.page = page;
                this.getList();
            },
            async getList(){
                let data={
                    'pageSize':this.page.pageSize,
                    'currentPage':this.page.currentPage,
                    'title':this.search.title?this.search.title:'',
                };
                let res = await articleAPI.list(data);
                this.data = res.data.data;
                this.page.total = res.data.total;
            },
            async searchChange(params,done){
                this.search = params;
                this.getList();
                done();
            },
            async del(row,index){
                let confirm = await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if(confirm){
                    let res = await articleAPI.del(row);
                    await this.getList();
                    await this.$message({
                        message: '删除成功!',
                        type: 'success'
                    });
                }
            },
            navToAdd(query){
                this.$router.push({
                    path:'/article/add',
                    query:query
                })
            },
        },
        created() {
            this.getCategory();
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
</style>
