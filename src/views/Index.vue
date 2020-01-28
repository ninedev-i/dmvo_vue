<template>
   <layout :whiteBackground="whiteBgIfEvents()">
      <template #pageContent>
         <h1 class="padding-20 margin-top-6">{{title}}</h1>
         <slider data-server-rendered="true" />
         <eventsList title="Ближайшие мероприятия" titleTag="h2" type="index_closestEvents" data-server-rendered="true" />
         <eventsList title="Конкурсы и выставки" titleTag="h2" type="index_closestExhibitions" data-server-rendered="true" />
      </template>

      <template #bottomContent>
         <news title="Мероприятия" v-bind:showText="false" data-server-rendered="true" />
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
   import slider from '../components/Slider.vue';
   import eventsList from '../components/events/List.vue';
   import news from '../components/events/News.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetImportantLinks from '../components/widgets/ImportantLinks.vue';

   export default {
      components: {
         layout,
         slider,
         eventsList,
         news,
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },

      data() {
         return {
            title: 'Дом молодежи Василеостровского района Санкт-Петербурга'
         }
      },

      title() {
         return this.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getIndexData');
      },

      methods: {
         whiteBgIfEvents() {
            let hasEvents = this.$store.state.index_carousel.length || this.$store.state.index_closestEvents.length || this.$store.state.index_closestExhibitions.length;
            return !!hasEvents;
         },
      }
   };
</script>
