<template>
  <div id="user-show">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          prop="id"
          label="编号"
      >
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题">
      </el-table-column>
      <el-table-column
          prop="author"
          label="作者">
      </el-table-column>
      <el-table-column
          prop="date"
          label="时间">
      </el-table-column>
      <el-table-column
          prop=""
          label="操作"
          width="160">
        <template slot-scope="scope">
          <el-row class="btn-row" type="flex" justify="space-between" align="center">
            <el-col :span="12">
              <router-link :to="{ path:'detail'}">
                <el-button
                    size="mini"
                    type="primary"
                    @click="">编辑
                </el-button>
              </router-link>
            </el-col>
            <el-col :span="12">
              <el-button
                  size="mini"
                  type="danger"
                  @click="">删除
              </el-button>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  data(){
    return{
      tableData:[]
    }
  }
}
</script>

<style scoped>

</style>