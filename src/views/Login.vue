<template>
   <div>
      <div class="loginContainer">
         <div><b v-if="$store.getters.isAuthenticated">Авторизован</b></div>
         <div><input type="email" v-model="email" placeholder="Email" /></div>
         <div><input type="text" v-model="password" placeholder="Пароль" /></div>
         <div><button v-on:click="login()">Логин</button></div>
      </div>
      <button v-on:click="register()">Регистрация</button>
      <button v-on:click="details()">Детали</button>
   </div>
</template>

<script>
   import axios from 'axios';
   import qs from 'qs';

   export default {
      data() {
         return {
            email: '123@123.ru',
            password: 123,
            csrf: null
         }
      },

      methods: {
         register() {
            const data = {
               name: 'Client Name',
               redirect: 'http://example.com/callback'
            };

            axios.post('/oauth/clients', data)
               .then(response => {
                  console.log(response.data);
               });


            // axios.defaults.headers.common['Authorization'] = 'Bearer' + this.csrf;
            //
            // const data = {
            //    name: 'azazaazazaz',
            //    redirect: 'http://example.com/callback',
            //    grant_type: 'password',
            //    username: 'MASTER123',
            //    password: 'MASTER123',
            //    // client_id: '7',
            //    client_secret: 'qwerty',
            // };
            //
            // axios({
            //    method: 'POST',
            //    headers: {
            //       // 'Accept': 'application/json',
            //       // 'X-CSRF-TOKEN': this.csrf,
            //       'Authorization': 'Bearer' + this.csrf
            //    },
            //    data: qs.stringify(data),
            //    url: '/oauth/clients'
            // })

         },

         login() {
            axios({
               method: 'POST',
               headers: {
                  // 'Accept': 'application/json',
                  // 'X-CSRF-TOKEN': this.csrf,
                  'Authorization': 'Bearer' + this.csrf
               },
               data: qs.stringify({
                  grant_type: 'password',
                  username: 'MASTER',
                  password: this.password,
                  client_id: '7',
                  client_secret: 'fj4JINk7G3vTgUaFpN9iOxEQzkjvmBhllcoUEBe1',
                  scope: '*',
               }),
               url: '/oauth/token'
            })

            // axios.post('/oauth/token', {
            //    grant_type: 'password',
            //    username: 'MASTER',
            //    password: this.password,
            //    client_id: '7',
            //    client_secret: 'fj4JINk7G3vTgUaFpN9iOxEQzkjvmBhllcoUEBe1',
            //    scope: '*',
            // });
         },

         details() {
            axios.get('/bar')
               .then(response => {
                  console.error(response.data);
                  this.csrf = response.data;
               });
         }
      }
   }
</script>

<style lang="less">
   .loginContainer {
      display: flex;
      flex-direction: column;
      div {
         margin-bottom: 12px;
      }
   }
</style>