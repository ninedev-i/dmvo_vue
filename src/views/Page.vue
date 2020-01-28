<template>
   <layout :padding="20">
      <template #pageContent>
         <h1>{{page.title}}</h1>
         <div v-html="page.content"></div>
      </template>

      <template #sidebar>
         <widgetAddress />
         <widgetVk group="20668429" />
         <widgetImportantLinks />
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetImportantLinks from '../components/widgets/ImportantLinks.vue';
   export default {
      components: {
         layout,
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },

      title () {
         return this.page.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPage', {id: route.meta.id});
      },

      beforeRouteLeave (to, from, next) {
         this.$store.dispatch('getPage', {id: to.meta.id}).then(() => {
            next();
         });
      },

      computed: {
         page() {
            return this.$store.state.page[this.$router.currentRoute.meta.id];
         }
      }
   };
</script>
