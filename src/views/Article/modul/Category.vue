<template>
  <div class="category">
    <avue-crud
            :data="data"
            :option="option"
            :page.sync="page"
            :search.sync="search"
            @on-load="onLoad"
            @search-change="searchChange"
            @refresh-change="getList"
            @row-save="create"
            @row-update="update"
            @row-del = "del"
    >
    </avue-crud>
  </div>
</template>

<script>
import {categoryTableOption} from '../option.js'
import {categoryAPI} from "@/request/api/article";
export default {
  name: "Category",
  data() {
    return {
      data: [],
      option:categoryTableOption,
      search:{},
      page: {
        pageSize: 10,
        currentPage:1,
        pagerCount:5,
      },
    }
  },
  methods:{
    async onLoad(page){
      this.page = page;
      this.getList();
    },
    async getList(){
      let data={
        'pageSize':this.page.pageSize,
        'currentPage':this.page.currentPage,
        'name':this.search.name?this.search.name:'',
      };
      let res = await categoryAPI.list(data);
      this.data = res.data.data;
      this.page.total = res.data.total;
    },
    async searchChange(params,done){
      this.search = params;
      this.getList();
      done();
    },
    async create(row,done,loading){
      let res = await categoryAPI.create(row);
      this.getList();
      done()
    },
    async update(row,index,done,loading){
      let res = await categoryAPI.update(row);
      this.getList();
      done()
    },
    async del(row,index){
      let confirm = await this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      });
      if(confirm){
        let res = await categoryAPI.del(row);
        await this.getList();
        await this.$message({
          message: '删除成功!',
          type: 'success'
        });
      }
    },
  },
  mounted() {
    // this.getList();
  }
}
</script>

<style scoped>

</style>
