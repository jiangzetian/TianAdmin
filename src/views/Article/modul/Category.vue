<template>
  <div class="category">
    <avue-crud
            :data="data"
            :option="option"
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
import {list,create,update,del} from "../../../request/api/article";
export default {
  name: "Category",
  data() {
    return {
      data: [],
      option:categoryTableOption
    }
  },
  methods:{
    async getList(){
      let res = await list({});
      this.data = res.data;
    },
    async create(row,done,loading){
      let res = await create(row);
      console.log(res);
      this.getList();
      done()
    },
    async update(row,index,done,loading){
      let res = await update(row);
      console.log(res);
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
        let res = await del(row);
        await this.getList();
        await this.$message({
          message: '删除成功!',
          type: 'success'
        });
      }
    }
  },
  mounted() {
    this.getList();
  }
}
</script>

<style scoped>

</style>