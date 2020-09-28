<template>
    <div class="article-show">
        <avue-crud :data="data" :option="option"></avue-crud>
    </div>
</template>

<script>
    import {showTableOption} from '../option.js'
    export default {
        name: "Show",
        data() {
            return {
                data: [
                    {
                        name:'张三',
                        sex:'男',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'李四',
                        sex:'女',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'王五',
                        sex:'女',
                        date:'1994-02-23 00:00:00'
                    }, {
                        name:'赵六',
                        sex:'男',
                        date:'1994-02-23 00:00:00'
                    }
                ],
                option:showTableOption
            }
        },
        methods:{
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
</style>