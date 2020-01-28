<template>
   <layout :padding="20" sidebarClass="family__sidebar">
      <template #pageContent>
         <h1>{{page.title}}</h1>
         <div v-html="page.description"></div>
      </template>

      <template #bottomContent>
         <news title="Архив мероприятий" :showText="false" directionTag="family" data-server-rendered="true" />
      </template>

      <template #sidebar>
         <widgetVk group="105742526" />
         <h3 class="padding-20">Руководитель:</h3>
         <widgetPerson :specialists="page.people" />
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';
   import news from '../components/events/News.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetPerson from '../components/widgets/Person.vue';

   export default {
      components: {
         layout,
         news,
         widgetPerson,
         widgetVk
      },
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'family'});
      },

      computed: {
         page() {
            return this.$store.state.family;
         }
      }
   };
</script>
<style lang="less">
   .family {
      &__sidebar {
         & .widget-vk {
            height: 208px;
            max-height: 208px;
         }
      }
   }
</style>
