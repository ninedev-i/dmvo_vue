<template>
   <div>
      <h2 class="padding20">{{title}}</h2>
      <masonry
         :cols="{default: 3, 1450: 2, 1200: 1}"
         :gutter="{default: '20px'}"
         class="news-list"
         >
         <div v-for="event in news" class="news-list__item" :key="event.id">
            <router-link v-bind:to="'events/' + event.id" tag="a">
               <div
                  class="news-list__item_picture"
                  v-if="event.pictures[0]"
                  :title="event.title"
                  :style="'background-image: url(https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0] + ');'">
               </div>
               <div class="news-list__item_title" :title="event.title">{{event.title}}</div>
               <div class="news-list__item_text" v-html="getDescription(event.post_reliz)"></div>
            </router-link>
         </div>
      </masonry>
      <div
         class="news-list__addMoreButton"
         v-on:click="addMore()"
         >
         Еще…
      </div>
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
         },

         addMore() {
            let offset = this.news.length / 12;
            return this.$store.dispatch('getNews', {offset: offset});
         }
      }
   };
</script>
<style lang="stylus" scoped>
   .news-list {
      display: flex;
   }
   .news-list__item {
      background: white;
      margin-bottom: 15px;
      cursor: pointer;
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
   .news-list__item:hover {
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
   }
   .news-list__item_picture {
      background-color: #1392BD;
      background-size: cover;
      background-position: center;
      height: 190px;
   }
   .news-list__item_title {
      padding: 5px 20px;
      font-size: 17px;
      font-weight: bold;
   }
   .news-list__item_text {
      padding: 0px 20px 15px;
   }
   .news-list__addMoreButton {
      width: 100%;
      background: #1392BD;
      color: white;
      margin-bottom: 6px;
      padding: 6px;
      text-align: center;
      cursor: pointer;
   }
</style>
