<template>
   <div>
      <article>
         <div :class="whiteBgIfEvents()">
            <h1 class="padding20">{{$store.state.index_title}}</h1>
            <slider data-server-rendered="true" />
            <eventsList title="Ближайшие мероприятия" type="index_closestEvents" data-server-rendered="true" />
            <eventsList title="Конкурсы и выставки" type="index_closestExhibitions" data-server-rendered="true" />
         </div>
         <news title="Отчеты о мероприятиях" data-server-rendered="true" />
      </article>

      <aside>
         <div class="sidebar">
            <div class="padding20 container-whiteBg index__sidebarItem">
               <b>Адрес:</b>
               <div>Санкт-Петербург, Большой проспект В.О., дом 65 лит. А</div>
            </div>
            <div class="container-whiteBg index__sidebarItem index__sidebarVkItem">
               <div id="vk_groups"></div>
            </div>
            <div class="padding20 container-whiteBg index__sidebarItem">
               <b>Важные ссылки:</b>
               <a href="https://voadm.spb.ru/" rel="nofollow" target="blank"><img src="https://xn--d1aadekogaqcb.xn--p1ai/public/img/admvo.jpg"></a>
               <a href="https://gov.spb.ru/gov/otrasl/kpmp/" rel="nofollow" target="blank"><img src="https://xn--d1aadekogaqcb.xn--p1ai/public/img/commol.jpg"></a>
               <a href="https://tvoybudget.spb.ru/" target="blank"><img src="https://xn--d1aadekogaqcb.xn--p1ai/public/img/budget.jpg"></a>
               <a href="https://www.zakon.gov.spb.ru/hot_line" rel="nofollow" target="blank"><img src="https://xn--d1aadekogaqcb.xn--p1ai/public/img/corrupt.jpg"></a>
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
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
         slider,
         eventsList,
         news
      },

      title() {
         return this.$store.state.index_title;
      },

      mounted() {
         if (VK) {
            VK.Widgets.Group('vk_groups', {mode: 3, width: '320', height: '400', color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6', no_cover: 1}, 20668429);
         }
      },

      asyncData({store, route}) {
         return store.dispatch('getIndexData');
      },

      methods: {
         whiteBgIfEvents() {
            let hasEvents = this.$store.state.index_carousel.length && this.$store.state.index_closestEvents.length && this.$store.state.index_closestExhibitions.length;
            return hasEvents ? 'container-whiteBg' : '';
         },
      }
   };
</script>
<style lang="stylus">
   .index__sidebarItem {
      margin-bottom: 12px;
   }
   .index__sidebarVkItem {
      max-height: 188px;
      height: 188px;
      overflow: hidden;
   }
</style>
