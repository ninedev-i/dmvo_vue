<template>
   <div>
      <button v-on:click="register()">Регистрация</button>
      <button v-on:click="login()">Логин</button>
   </div>
</template>

<script>
   import axios from 'axios';
   import qs from 'qs';

   export default {
      name: "Login",
      methods: {
         register() {

            axios.post('http://dmvo.local/api/register', {
               'name': 'name',
               'email': 'email@email.ru',
               'password': 'password',
               'c_password': 'password'
            }).then((response) => {

            });
         },

         login() {
            const options = {
               method: 'POST',
               headers: { 'content-type': 'application/x-www-form-urlencoded' },
               data: qs.stringify({'email': 'email@email.ru', 'password': 'password'}),
               url: 'http://dmvo.local/api/login'
            };
            axios(options).then(res => {

            });
         }
      }
   }
</script>

<style scoped>

</style>