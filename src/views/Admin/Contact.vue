<template>
   <layout :padding="20" :sidebarWithBg="true">
      <template #pageContent>
         <h1>{{title}}</h1>
         <!--{{$store.state.contacts.map(employee => employee.id)}}
         <div @click="addPerson()">добавить еще</div>-->
         <draggable class="edit-contact__container" v-model="$store.state.contacts" @start="drag=true" @end="drag=false">
            <div v-for="employee in $store.state.contacts" class="edit-contact__block" :key="employee.id">
               <b>{{employee.name}}</b>
            </div>
         </draggable>
      </template>

      <template #sidebar>
         <div class="padding-20">
            <div @click="save()">Сохранить</div>
         </div>
      </template>
   </layout>
</template>

<script>
   import layout from '../../components/Layout.vue';
   import draggable from 'vuedraggable'

   export default {
      components: {
         layout,
         draggable,
      },

      data() {
         return {
            title: 'Контактная информация'
         }
      },

      title () {
         return `Редактирование | ${this.title}`;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'contacts'});
      },

      beforeMount() {
         if (!this.$store.state.admin.isAdmin) {
            this.$router.push({name: 'login'});
         }
      },

      methods: {
         addPerson() {
            this.$store.state.contacts.push({id: 1111, name: 'Имя и фамилия'});
         },

         save() {
            this.$store.dispatch('editContacts', {
               data: this.$store.state.contacts.map(employee => employee.id).toString()
            }).then(() => {
               this.$router.push({name: 'contact'});
            });
         }
      }
   };
</script>
<style lang="less">
   .edit-contact {
      &__container {
         display: flex;
         flex-direction: column;
      }
      &__block {
         width: fit-content;
         padding: 6px 12px;
         border: 1px solid #e8e8e8;
         background-color: #fbfbfb;
         white-space: nowrap;
         margin-bottom: 5px;
      }
   }
</style>