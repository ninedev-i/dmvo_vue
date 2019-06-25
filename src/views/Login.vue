<template>
   <div>
      <button v-on:click="register()">Регистрация</button>
      <button v-on:click="login()">Логин</button>
      <div v-if="$store.getters.isAuthenticated">Авторизован</div>
   </div>
</template>

<script>
   import axios from 'axios';

   export default {
      computed: {
         isAuthorized() {
            return this.$store.state.token;
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
            this.$store.dispatch('login', {email: 'email@email.ru', password: 'password'});
         }
      }
   }
</script>

<style scoped>

</style>