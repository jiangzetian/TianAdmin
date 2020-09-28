<template>
    <div class="login">
        <avue-login :option="option" @submit="submit"></avue-login>
    </div>
</template>

<script>
    import {loginOption} from './option.js'
    export default {
        name: "Login",
        data(){
            return{
                codesrc: '',
                option:loginOption
            }
        },
        methods:{
            setOption(){

            },
            submit(){
                this.$router.push('/')
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>