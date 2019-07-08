<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
         </div>
         <news title="Архив мероприятий" v-bind:showText="false" directionTag="online" data-server-rendered="true" />
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
   import news from '../components/events/News.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetPerson from '../components/widgets/Person.vue';

   export default {
      components: {
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
