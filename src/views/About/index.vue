<template>
    <div class="about">
        <el-row class="row">
            <h2>标签管理</h2>
        </el-row>
        <el-row class="row" :gutter="20" type="flex">
            <el-col :span="12">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>效果展示</span>
                    </div>
                    <div>
                        <el-tag
                                v-for="item in tableData"
                                :key="item.id"
                                :effect="item.effect"
                                :type="item.type"
                                :size="item.size"
                        >
                            {{item.name}}
                        </el-tag>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="always">
                    <div slot="header" class="clearfix">
                        <span>添加标签</span>
                    </div>
                    <el-form label-width="80px" :model="addTagData">
                        <el-form-item label="预览">
                            <el-tag
                                    :key="addTagData.id"
                                    :effect="addTagData.effect"
                                    :type="addTagData.type"
                                    :size="addTagData.size"
                            >
                                {{addTagData.name}}
                            </el-tag>
                        </el-form-item>
                        <el-form-item label="内容">
                            <el-input v-model="addTagData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="主题">
                            <el-select v-model="addTagData.effect"  placeholder="请选择">
                                <el-option
                                        v-for="item in [
                                            {value: 'dark',label: '实心'},
                                            {value: 'light',label: '半透明'},
                                            {value: 'plain',label: '空心'},
                                            ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select v-model="addTagData.type"  placeholder="请选择">
                                <el-option
                                        v-for="item in [
                                            {value: '',label: '默认'},
                                            {value: 'success',label: '成功'},
                                            {value: 'info',label: '普通'},
                                            {value: 'warning',label: '警告'},
                                            {value: 'danger',label: '错误'},
                                            ]"
                                        :key="item.label"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="大小">
                            <el-select v-model="addTagData.size"  placeholder="请选择">
                                <el-option
                                        v-for="item in [
                                            {value: 'medium ',label: '正常'},
                                            {value: 'small',label: '小'},
                                            {value: 'mini',label: '最小'},
                                            ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="">添加</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
        <el-row class="row">
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
                        label="内容">
                </el-table-column>
                <el-table-column
                        prop="effect"
                        label="主题"
                >
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类型"
                >
                </el-table-column>
                <el-table-column
                        prop="size"
                        label="大小"
                >
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
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                addTagData:{
                    name: '标签示例',
                    effect:'plain',//dark / light / plain
                    type:'success',//success/info/warning/danger
                    size:'medium '//medium / small / mini
                },
                tableData: [
                    {
                        id: 'saff3443647',
                        name: '前端开发',
                        effect:'plain',//dark / light / plain
                        type:'success',//success/info/warning/danger
                        size:'medium '//medium / small / mini
                    },
                    {
                        id: '1132ff3s7',
                        name: 'java开发',
                        effect:'light',//dark / light / plain
                        type:'warning',//success/info/warning/danger
                        size:'medium '//medium / small / mini
                    }
                ],
            }
        }
    }
</script>

<style scoped>
.row{
    margin: 15px 0;
}
</style>