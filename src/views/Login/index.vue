<template>
    <div id="login">
        <el-row class="row" type="flex" justify="space-around" align="middle">
            <el-col :span="5" class="col">
                <div>
                    <img src="../../assets/天小天白衣LOGO.jpg" alt="LOGO" style="width: 100%;">
                </div>
            </el-col>
            <el-col :span="6" class="col">
<!--                <h1 class="title">TianAdmin</h1>-->
                <avue-login :option="option" @submit="submit"></avue-login>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {loginOption} from './option.js'
    import {signUp} from "../../request/api/login";
    export default {
        name: "Login",
        data(){
            return{
                tel:"",
                pwd:"",
                codesrc: '',
                option:loginOption
            }
        },
        methods:{
            async submit(e){
                if(!e){return false}
                let res = await signUp(e);
                if (res.code===200){
                    sessionStorage.setItem("token",res.data.token);
                    this.$router.push({path:"/"})
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
#login{
    width: 100%;
    height: 100%;
    .row{
        width: 100%;
        height: 100%;
    }
    .title{
        /*text-align: center;*/
        margin: 15px 30px;
    }
}
</style>