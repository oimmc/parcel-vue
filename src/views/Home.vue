<template>
    <div>
        <h3>home</h3>
        <img src="../assets/logo.png" alt="" srcset="">
        <router-link to="/workbench">去workbench</router-link>
        <div><button @click="getData">请求数据</button></div>
        <div>{{ msg }}</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Home',
        data: function() {
            return {
                msg: ''
            }
        },
        methods: {
            getData() {
                axios.get('/try/ajax/demo_test.php')
                .then((res) => {
                    this.msg = res.data
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>