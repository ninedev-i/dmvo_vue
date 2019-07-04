<template>
   <div class="news__container">
      <h2 class="padding-20" v-if="news.length">{{title}}</h2>
      <masonry
         :cols="{default: 3, 1450: 2, 1200: 1}"
         :gutter="{default: '20px'}"
         class="news"
         >
         <div v-for="event in news" class="news__item" :key="event.id">
            <router-link :to="`/events/${event.id}/post`" tag="a">
               <div
                  class="news__item-picture"
                  v-if="event.pictures.length"
                  :title="event.title"
                  :style="'background-image: url(https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0] + ');'">
               </div>
               <div class="news__item-title" :title="event.title">{{slicedTitle(event.title)}}</div>
               <div class="news__item-text" v-if="showText || !event.pictures.length" v-html="getDescription(event.post_reliz)"></div>
            </router-link>
         </div>
      </masonry>
      <div class="button-blue padding-6" v-on:click="addMore()" v-if="showMore && news && news.length >= 12">Еще…</div>
   </div>
</template>
<script>
   import Vue from 'vue';
   import VueMasonry from 'vue-masonry-css';
   Vue.use(VueMasonry);

   export default {
      props: {
         title: String,
         showText: Boolean,
         directionTag: {
            type: String,
            default: ''
         }
      },

      data() {
        return {
           showMore: true
        }
      },

      computed: {
         news() {
            let output;
            if (this.directionTag === 'psychological') {
               output = this.$store.state.psychological.events;
            } else if (this.directionTag) {
               output = this.$store.state.studio.events;
            } else {
               output = this.$store.state.index_news;
            }
            return output;
         }
      },
      methods: {
         getDescription(txt = '') {
            let escapedText = txt.replace(/<\/?[^>]+>/g,'');
            let commaSymbol = escapedText.match( /!|\./i ) ? escapedText.match( /!|\./i ).index : null;
            return commaSymbol ? escapedText.substring(0, commaSymbol) + '…' : '';
         },

         addMore() {
            let offset = this.news.length / 12;
            this.$store.dispatch('getNews', {offset: offset, tag: this.directionTag}).then((data) => {
               if (data.length < 12) {
                  this.showMore = false;
               }
            });
            // return this.$store.dispatch('getNews', {offset: offset, tag: this.directionTag});
         },

         slicedTitle(title) {
            return title.length > 80 ? `${title.slice(0, 80).trim()}…` : title;
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
            background-position: 50% 20%;
            height: 190px;

            @media (min-width: 2000px) {
               height: 240px;
             }
         }

         &-title {
            padding: 5px 20px;
            font-size: 17px;
            font-weight: bold;
         }

         &-text {
            padding: 0 20px 15px;
            color: #8a8a8a;
         }

         a, p, b, i {
            text-decoration: none;
            font-weight: normal;
            margin: 0;
            font-style: normal;
         }
      }
   }

   @media (max-width: 450px) {
      .news__container {
         .button-blue {
            margin: 12px;
         }
      }
   }
</style>
