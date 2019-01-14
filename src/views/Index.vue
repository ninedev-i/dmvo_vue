<template>
   <div>
      <div class="container-whiteBg">
         <h1 class="padding20">{{$store.state.index_title}}</h1>
         <slider data-server-rendered="true" />
         <eventsList title="Ближайшие мероприятия" type="index_closestEvents" data-server-rendered="true" />
         <eventsList title="Конкурсы и выставки" type="index_closestExhibitions" data-server-rendered="true" />
      </div>
      <news title="Отчеты о мероприятиях" data-server-rendered="true" />
      <sidebar class="sidebar" />
   </div>
</template>
<script>
   import sidebar from '../components/sidebar/IndexSidebar.vue';
   import slider from '../components/Slider.vue';
   import eventsList from '../components/events/List.vue';
   import news from '../components/events/News.vue';
   import Vue from 'vue'

   if (process.browser) {
      const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
      Vue.use(VueAwesomeSwiper);
   }

   export default {
      components: {
         sidebar,
         slider,
         eventsList,
         news
      },

      title () {
         return this.$store.state.index_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getIndexData');
      }
   };
</script>
