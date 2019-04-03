<template>
   <div>
      <article>
         <div class="padding-20 background-white">
            <h1>{{event.title}}</h1>
            <div v-html="event.content || event.post_reliz"></div>
         </div>
         <div class="event__photos">
            <a
               v-if="event.pictures.length"
               v-for="picture in event.pictures"
               :href="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${picture}`"
               data-nice="gallery"
               class="event__photos-item"
               >
               <img
                  :src="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${picture}`"
                  :alt="event.title"
                  :title="event.title"
               />
            </a>
         </div>
      </article>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               <div class="margin-bottom-12">
                  <b v-if="event.date_from === event.date_to">Дата:</b>
                  <b v-else="event.date_from === event.date_to">Даты:</b>
                  {{getPeriod(event.date_from, event.date_to, true, true)}}
               </div>
               <div v-if="event.what_time" class="margin-bottom-12">
                  <b>Время:</b> {{event.what_time}}
               </div>
               <div class="margin-bottom-12" v-if="event.tags">
                  <b>Упомянутые студии:</b>
                  <div>
                     <div v-for="tag in tags" class="event__tag padding-6">
                        {{tag}}
                     </div>
                  </div>
               </div>
               <a
                  v-if="!!event.cover"
                  :href="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
                  data-nice="gallery"
                  >
                  <img
                     class="event__cover"
                     :src="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
                     :alt="event.title"
                     :title="event.title"
                  />
               </a>
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   // import {NicePopup} from 'nice-popup';
   export default {
      title () {
         return this.event.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getEvent', {id: route.params.id});
      },

      computed: {
         event() {
            return this.$store.state.event;
         },

         tags() {
            let tags = this.$store.state.event.tags;
            return tags.split(' ');
         }
      },

      mounted() {
         // new NicePopup({overlayColor: '#0f0f11'});
      }
   };
</script>
<style lang="less">
   .event {
      &__photos {
         display: flex;
         width: 100%;
         max-width: 100%;
         min-width: 1px;
         margin-top: 12px;
         overflow: hidden;

         &-item {
            // margin-right: 12px;
            // flex-shrink: 1;
            // min-width: 1px;
            // display: flex;
            &:last-of-type {
               margin-right: 0px;
            }

            & img {
               // max-width: 100%;
               margin-right: 12px;
               flex-shrink: 1;
               min-width: 1px;
               display: flex;
               width: auto;
               height: 220px;
            }
         }
      }

      &__cover {
         width: 100%;
      }

      &__tag {
         display: inline;
         color: #00897b;
         background-color: #E0F2F1;
         margin: 6px 12px 6px 0px;
         line-height: 40px;
         font-size: 14px;
         cursor: pointer;

         &:hover {
            background-color: #c8e0df;
         }
      }
   }
</style>
