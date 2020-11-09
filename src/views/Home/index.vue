<template>
  <div class="home">
      <avue-data-display :option="dataOption"></avue-data-display>
  </div>
</template>

<script>
    import {dataOption} from './option.js'
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

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
</style>