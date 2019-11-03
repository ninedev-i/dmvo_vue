<template>
   <div>
      <article>
         <div class="padding-20">
            <h1>{{title}}</h1>
            <peopleList :people="team" :showReception="false" />
         </div>
      </article>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
            <h3>Фильтр по коллективу:</h3>
               <p><input type="radio" id="all" value="" v-model="position"><label for="all">Все</label></p>
               <p><input type="radio" id="administration" value="administration" v-model="position"><label for="administration">Администрация</label></p>
               <p><input type="radio" id="specialist" value="specialist" v-model="position"><label for="specialist">Специалисты</label></p>
               <p><input type="radio" id="teacher" value="teacher" v-model="position"><label for="teacher">Руководители студий</label></p>
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   import peopleList from '../components/people/List.vue';
   export default {
      components: {
         peopleList
      },

      data() {
         return {
            title: 'Коллектив Дома молодежи',
            position: '',
         }
      },

      title () {
         return this.title;
      },

      asyncData({store}) {
         return store.dispatch('getTeam');
      },

      computed: {
         team() {
            return this.$store.state.team.filter((user) => {
               return !this.position || this.position === user.role;
            });
         }
      }
   };
</script>
