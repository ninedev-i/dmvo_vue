<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
            <!-- <eventsList title="Ближайшие мероприятия" titleTag="h3" type="family_closestEvents" data-server-rendered="true" /> -->
         </div>
      </article>

      <aside>
         <div class="sidebar family__sidebar">
            <widgetVk group="105742526" />
            <h3 class="padding-20">Руководитель:</h3>
            <widgetPerson :specialists="page.people" />
         </div>

      </aside>
   </div>
</template>
<script>
   // import eventsList from '../components/events/List.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetPerson from '../components/widgets/Person.vue';

   export default {
      components: {
         // eventsList,
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
