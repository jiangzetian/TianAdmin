<template>
  <div class="category">
    <avue-crud :data="data" :option="option"></avue-crud>
  </div>
</template>

<script>
import {categoryTableOption} from '../option.js'
export default {
  name: "Category",
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
      option:categoryTableOption
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>