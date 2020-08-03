<template>
    <div class="about">
      <el-row class="row" :gutter="20">
          <el-col :span="12">
            <el-card shadow="never">
              <div slot="header" class="clearfix">
                <span>自我描述</span>
              </div>
              <el-form>
                <el-form-item label="">
                  <el-input type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">保存</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="never">
              <div slot="header" class="clearfix">
                <span>本人媒体</span>
              </div>
              <el-form>
                <el-form-item label="">
                  <el-input type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">保存</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
</style>