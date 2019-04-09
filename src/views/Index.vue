<template>
   <div>
      <article>
         <div :class="whiteBgIfEvents()">
            <h1 class="padding-20">{{$store.state.index_title}}</h1>
            <slider data-server-rendered="true" />
            <eventsList title="Ближайшие мероприятия" titleTag="h2" type="index_closestEvents" data-server-rendered="true" />
            <eventsList title="Конкурсы и выставки" titleTag="h2" type="index_closestExhibitions" data-server-rendered="true" />
         </div>
         <news title="Мероприятия" v-bind:showText="false" data-server-rendered="true" />
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
   import slider from '../components/Slider.vue';
   import eventsList from '../components/events/List.vue';
   import news from '../components/events/News.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetImportantLinks from '../components/widgets/ImportantLinks.vue';

   export default {
      components: {
         slider,
         eventsList,
         news,
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },

      title() {
         return this.$store.state.index_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getIndexData');
      },

      methods: {
         whiteBgIfEvents() {
            let hasEvents = this.$store.state.index_carousel.length || this.$store.state.index_closestEvents.length || this.$store.state.index_closestExhibitions.length;
            return hasEvents ? 'background-white' : '';
         },
      }
   };
</script>
