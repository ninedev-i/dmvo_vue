<template>
   <div>
      <h2 class="padding20">{{title}}</h2>
      <masonry
         :cols="{default: 3, 1450: 2, 1200: 1}"
         :gutter="{default: '20px'}"
         class="news-list"
         >
         <div v-for="event in news" class="news-list__item" :key="event.id">
            <router-link v-bind:to="'events/' + event.id" tag="div">
               <div
                  class="news-list__item_picture"
                  :title="event.title"
                  :style="'background-image: url(https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0] + ');'">
               </div>
               <div class="news-list__item_title" :title="event.title">{{event.title}}</div>
               <div class="news-list__item_text" v-html="getDescription(event.post_reliz)"></div>
            </router-link>
         </div>
      </masonry>
   </div>
</template>
<script>
   import Vue from 'vue';
   import VueMasonry from 'vue-masonry-css';
   Vue.use(VueMasonry);

   export default {
      props: [
         'title'
      ],

      computed: {
         news() {
            return this.$store.state.index_news;
         }
      },
      methods: {
         getDescription(txt) {
            let
               escapedText = txt.replace(/<\/?[^>]+>/g,''),
               commaSymbol = escapedText.match( /!|\./i ).index;
            return escapedText.substring(0, commaSymbol) + '…';
         }
      }
   };
</script>
<style lang="stylus" scoped>
   .news-list {
      display: flex;
   }
   .news-list__item {
      /* font-family: "Open Sans", sans-serif; */
      background: white;
      margin-bottom: 15px;
   }
   .news-list__item a,
   .news-list__item p,
   .news-list__item b,
   .news-list__item i {
      text-decoration: none;
      font-weight: normal;
      margin: 0px;
      font-style: normal;
   }
   .news-list__item_picture {
      background-color: #1392BD;
      height: 190px;
   }
   .news-list__item_title {
      padding: 5px 20px;
      font-size: 17px;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
   }
   .news-list__item_text {
      padding: 0px 20px 15px;
      /* font-size: 14px; */
   }
</style>
