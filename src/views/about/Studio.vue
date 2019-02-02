<template>
   <div>
      <article>
         <div class="padding-20 background-white">
            <h1>{{page.title}}</h1>
            <div v-html="page.content"></div>
         </div>
      </article>
      <aside>
         <div class="sidebar">
            <widgetAddress />
            <widgetVk group="20668429" />
            <widgetImportantLinks />
         </div>
      </aside>
   </div>
</template>
<script>
   import widgetAddress from '../../components/widgets/Address.vue';
   import widgetVk from '../../components/widgets/Vk.vue';
   import widgetImportantLinks from '../../components/widgets/ImportantLinks.vue';
   export default {
      components: {
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },
      title () {
         return this.page.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPage', {id: 23});
      },

      computed: {
         page() {
            return this.$store.state.page;
         }
      }
   };
</script>
