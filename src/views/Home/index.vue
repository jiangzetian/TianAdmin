<template>
  <div class="home">
    <a class="btn" @click="getUsersData">获取数据</a>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      'text':'11111'
    }
  },
  methods:{
    getUsersData(){
      this.$api.home.getUsers({page:2})
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.btn{
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background: #ccc;
}
</style>