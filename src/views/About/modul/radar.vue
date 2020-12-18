<template>
    <div class="radar">
        <el-row type="flex">
            <div id="radarEcharts" class="radarBox"></div>
            <el-row style="width: 50%">
                <el-row type="flex" align="middle" class="radarItem" :gutter="20" v-for="(item,index) in radarData" :key="index">
                    <el-col :sm="4">
                        <el-input placeholder="请输入内容" @change="initRadar" v-model="item.name"></el-input>
                    </el-col>
                    <el-col :sm="16">
                        <el-slider @change="initRadar" @input="initRadar" v-model="item.value" show-input></el-slider>
                    </el-col>
                    <el-col :sm="6">
                        <el-button icon="el-icon-close" circle type="danger"  @click="delItem(index)"></el-button>
                        <el-button icon="el-icon-plus"  circle type="success" @click="addItem(index)" v-if="index+1 === radarData.length"></el-button>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-button type="primary" @click="submitBtn">保存</el-button>
                </el-row>
            </el-row>
        </el-row>
    </div>
</template>

<script>
    let echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/title");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/legend");

    import {radarAPI} from "@/request/api/about";
    export default {
        name: "radar",
        data(){
            return{
                radarData:[],
                option:{
                    title: {},
                    tooltip: {},
                    legend: {
                        show:false
                    },
                    radar: {
                        shape: 'circle',
                        axisName: {},
                        //indicator示例数据
                        indicator: []
                    },
                    series: [
                        {
                            name: '技能雷达图',
                            type: 'radar',
                            areaStyle: {},
                            data: [
                                {
                                    //value示例值数据
                                    value: [],
                                    name: '技能雷达图'
                                }
                            ]
                        },
                    ]
                }
            }
        },
        methods:{
            initRadar(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('radarEcharts'));
                let indicator=[];
                let seriesData=[];
                (this.radarData).forEach((item,index)=>{
                    indicator.push({
                        name:item.name,
                        max:item.max,
                    });
                    seriesData.push(item.value)
                });
                this.option.radar.indicator = indicator;
                this.option.series[0].data[0].value = seriesData;
                // 绘制图表
                myChart.setOption(this.option);
            },
            async getRadarData(){
                let res = await radarAPI.index({name:'aboutRadar'});
                this.radarData = JSON.parse(res.data.data);
                this.initRadar();
            },
            async delItem(index){
                let confirm = await this.$confirm(`你确定要删除${this.radarData[index].name}吗？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if(confirm){
                    this.radarData.splice(index,1);
                    this.initRadar();
                }
            },
            async addItem(index){
                this.radarData.push({
                    name:"新增项",
                    max:100,
                    value: 100,
                });
                this.initRadar();
            },
            async submitBtn(){
                await radarAPI.update({name:'aboutRadar',data:JSON.stringify(this.radarData)});
            }
        },
        created() {
            this.getRadarData();
        },
        mounted() {},
    }
</script>

<style lang="scss" scoped>
.radarBox{
    width: 50%;
    height: 400px;
}
.radarItem{
    margin:10px 0;
}
</style>
