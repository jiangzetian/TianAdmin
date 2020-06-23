<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  img{
    margin: 0 auto;
  }
  h1{
    margin: 0 auto;
  }
</style>
