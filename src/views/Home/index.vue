<template>
  <div class="home">
      <avue-data-display :option="option"></avue-data-display>
      <el-button @click="getData">请求</el-button>
  </div>
</template>

<script>
import {getUsers} from '../../request/api/home'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
        option: {
            span:6,
            data: [
                {
                    click: function (item) {
                        alert(JSON.stringify(item));
                    },
                    count: 100,
                    title: '总访问量',
                    href:'https://avuejs.com',
                    target:'_blank'
                },
                {
                    click: function (item) {
                        alert(JSON.stringify(item));
                    },
                    count: '3,000',
                    title: '总文章数',
                    href:'https://avuejs.com',
                    target:'_blank'
                },
                {
                    click: function (item) {
                        alert(JSON.stringify(item));
                    },
                    count: '20,000',
                    title: '今日活跃',
                    href:'https://avuejs.com',
                    target:'_blank'
                },
                {
                    click: function (item) {
                        alert(JSON.stringify(item));
                    },
                    count: '40,000',
                    title: '今日文章',
                    href:'https://avuejs.com',
                    target:'_blank'
                }
            ]
        },
    }
  },
  methods:{
      async getData(){
          let res = await getUsers({});
          console.log(res);
      }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
</style>