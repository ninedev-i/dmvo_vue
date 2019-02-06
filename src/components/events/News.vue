<template>
   <div>
      <h2 class="padding-20">{{title}}</h2>
      <masonry
         :cols="{default: 3, 1450: 2, 1200: 1}"
         :gutter="{default: '20px'}"
         class="news"
         >
         <div v-for="event in news" class="news__item" :key="event.id">
            <router-link v-bind:to="'events/' + event.id" tag="a">
               <div
                  class="news__item-picture"
                  v-if="event.pictures[0]"
                  :title="event.title"
                  :style="'background-image: url(https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0] + ');'">
               </div>
               <div class="news__item-title" :title="event.title">{{event.title}}</div>
               <div class="news__item-text" v-html="getDescription(event.post_reliz)"></div>
            </router-link>
         </div>
      </masonry>
      <div class="button-blue padding-6" v-on:click="addMore()">Еще…</div>
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
<style lang="less">
   .news {
      display: flex;

      &__item {
         background: white;
         margin-bottom: 15px;
         cursor: pointer;

         &:hover {
            background-color: #e8f5f9;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
         }

         &-picture {
            background-color: #1392BD;
            background-size: cover;
            background-position: center;
            height: 190px;
         }

         &-title {
            padding: 5px 20px;
            font-size: 17px;
            font-weight: bold;
         }

         &-text {
            padding: 0px 20px 15px;
         }

         a, p, b, i {
            text-decoration: none;
            font-weight: normal;
            margin: 0px;
            font-style: normal;
         }
      }
   }
</style>
