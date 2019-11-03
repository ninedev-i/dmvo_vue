<template>
   <div>
      <div class="loginContainer">
         <div v-if="$store.state.admin.isAdmin">
            <div><button v-on:click="logout()">Выход</button></div>
         </div>
         <div v-else>
            <div><input type="text" v-model="password" placeholder="Пароль" /></div>
            <div><button v-on:click="login()">Логин</button></div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            password: '',
         }
      },

      methods: {
         login() {
            this.$store.dispatch('login', {
               'MY_SECRET_KEY': this.password
            });
         },

         logout() {
            this.$store.dispatch('logout');
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