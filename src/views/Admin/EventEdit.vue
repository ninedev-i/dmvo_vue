<template>
   <div>
      <article class="padding-20 background-white">
         qqqqqqqqqqqqqqqqqqqqqq
<!--         <h1>{{title}}</h1>-->
<!--         <eventEdit />-->
      </article>

      <aside>
<!--         <div class="sidebar background-white">-->
<!--            <div class="padding-20">-->
<!--               <div @click="save()">Сохранить</div>-->
<!--            </div>-->
<!--         </div>-->
      </aside>
   </div>
</template>

<script>
   // import eventEdit from '../../components/admin/Event.vue';

   export default {
      name: 'EventEdit'
      // components: {
      //    eventEdit,
      // },
      //
      // data() {
      //    return {
      //       title: '_____'
      //    }
      // },
      //
      // title () {
      //    return `Редактирование | ${this.title}`;
      // },
      //
      // asyncData({store}) {
      //    return store.dispatch('getData', {name: 'contacts'});
      // },
      //
      // beforeMount() {
      //    if (!this.$store.state.admin.isAdmin) {
      //       this.$router.push({name: 'login'});
      //    }
      // },
      //
      // methods: {
      //    save() {
      //       this.$store.dispatch('editContacts', {
      //          data: this.$store.state.contacts.map(employee => employee.id).toString()
      //       }).then(() => {
      //          // this.$router.push({name: 'contact'});
      //       });
      //    }
      // }
   }
</script>

<style lang="less">

</style>