<template>
   <div>
      <div class="loginContainer">
         <div><b v-if="$store.getters.isAuthenticated">Авторизован</b></div>
         <div><input type="email" v-model="email" placeholder="Email" /></div>
         <div><input type="text" v-model="password" placeholder="Пароль" /></div>
         <div><button v-on:click="login()">Логин</button></div>
      </div>
      <!--<button v-on:click="register()">Регистрация</button>-->
   </div>
</template>

<script>
   import axios from 'axios';

   export default {
      data() {
         return {
            email: '',
            password: ''
         }
      },

      methods: {
         register() {
            axios.post('http://dmvo.local/api/register', {
               'name': 'name',
               'email': 'email@email.ru',
               'password': 'password',
               'c_password': 'password'
            });
         },

         login() {
            this.$store.dispatch('login', {email: this.email, password: this.password})
               // .then(res => location.href = 'login');
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