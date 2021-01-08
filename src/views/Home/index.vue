<template>
  <div class="home">
      <section>
          <el-divider content-position="left"><p>仪表盘</p></el-divider>
          <avue-data-display :option="dataOption"></avue-data-display>
      </section>
      <section>
          <el-divider content-position="left"><p>快捷访问</p></el-divider>
          <el-row class="card-list" :gutter="20">
              <el-col :span="6" v-for="item in fastCards" :key="item.name">
                  <div @click="navToUrl(item)">
                      <el-card class="item" shadow="hover">
                          {{item.name}}
                      </el-card>
                  </div>
              </el-col>
          </el-row>
      </section>
  </div>
</template>

<script>
import {dataOption} from './option.js'
    import indexAPI from '@/request/api/home'
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
        fastCards:[
            {
                name:'天小天博客',
                url:'https://tianxiaotian.xyz/'
            },
            {
                name:'天小天图床',
                url:'https://image.tianxiaotian.xyz/auth/login.html'
            },
        ],
        dataOption:dataOption,
    }
  },
  methods:{
      async watchData(){
          let res = await indexAPI.getWatchData({});
          dataOption.data[0].count = res.data.all_visits;
          dataOption.data[1].count = res.data.all_likes;
          dataOption.data[2].count = res.data.all_article;
          dataOption.data[3].count = res.data.all_category;
      },
      navToUrl(item){
          window.open(item.url)
      }
  },
  created() {
      this.watchData()
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
    .card-list{
        margin: 20px 0;
        .item{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
        }
    }
</style>
