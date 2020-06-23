<template>
    <div class="banner-show">
        <el-row class="btn-row" type="flex" justify="space-between" align="center">
            <el-col :span="22">
                <h2>幻灯片列表</h2>
            </el-col>
            <el-col :span="2">
                <router-link :to="{ path:'add'}">
                    <el-button plain type="primary">添加幻灯片</el-button>
                </router-link>
            </el-col>
        </el-row>
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
                    prop="name"
                    label="名字">
            </el-table-column>
            <el-table-column
                    prop="src"
                    label="链接">
            </el-table-column>
            <el-table-column
                    label="预览"
                    width="200">
                <template slot-scope="scope">
                    <el-image :preview-src-list="[scope.row.src]" :src="scope.row.src"></el-image>
                </template>
            </el-table-column>
            <el-table-column
                    prop=""
                    label="操作"
                    width="80">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="danger"
                            @click="">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Show",
        data() {
            return {
                tableData: [{
                    id: '231334qesdf2131',
                    name: '笑脸',
                    src: 'http://tianxiaotian.xyz/tp5_jzt-blog_server/public/uploads/banner/5d8b5c8ef15a1.png'
                },{
                    id: '231334qesdf2131',
                    name: '笑脸',
                    src: 'http://tianxiaotian.xyz/tp5_jzt-blog_server/public/uploads/banner/5d8b5c8ef15a1.png'
                },{
                    id: '231334qesdf2131',
                    name: '笑脸',
                    src: 'http://tianxiaotian.xyz/tp5_jzt-blog_server/public/uploads/banner/5d8b5c8ef15a1.png'
                },{
                    id: '231334qesdf2131',
                    name: '笑脸',
                    src: 'http://tianxiaotian.xyz/tp5_jzt-blog_server/public/uploads/banner/5d8b5c8ef15a1.png'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-row{
        margin: 20px 0;
    }
</style>