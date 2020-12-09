<template>
  <div class="home">
      <avue-data-display :option="dataOption"></avue-data-display>

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
</style>
