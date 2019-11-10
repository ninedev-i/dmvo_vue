<template>
   <div>
      <eventEdit :event="$store.state.event" @save="save()" :title="title" />
   </div>
</template>

<script>
   import eventEdit from '../../components/admin/Event.vue';

   export default {
      components: {
         eventEdit,
      },

      data() {
         return {
            title: 'Редактирование мероприятия'
         }
      },

      title () {
         return `Редактирование | ${this.title}`;
      },

      asyncData({store, route}) {
         return store.dispatch('getEvent', {id: route.params.id});
      },

      beforeMount() {
         if (!this.$store.state.admin.isAdmin) {
            this.$router.push({name: 'login'});
         }
      },

      methods: {
         save() {
            // this.$store.dispatch('editContacts', {
            //    data: this.$store.state.contacts.map(employee => employee.id).toString()
            // }).then(() => {
               this.$router.push({name: 'event'});
            // });
         }
      }
   }
</script>

<style lang="less">
   .edit_title {
      margin-bottom: 12px;
   }
</style>