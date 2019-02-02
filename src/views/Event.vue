<template>
   <div>
      <article class="padding-20 background-white">
         <h1>{{event.title}}</h1>
         <div v-html="event.content"></div>
         <!-- <img :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0]" :alt="event.title" :title="event.title"> -->
      </article>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               <div class="margin-bottom-12">
                  <b v-if="event.date_from === event.date_to">Дата:</b>
                  <b v-else="event.date_from === event.date_to">Даты:</b>
                  {{getPeriod(event.date_from, event.date_to, true)}}
               </div>
               <div class="margin-bottom-12" v-if="event.what_time">
                  <b>Время:</b> {{event.what_time}}
               </div>
               <img
                  class="event_cover"
                  v-if="!!event.cover"
                  :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.cover"
                  :alt="event.title"
                  :title="event.title"
               />
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
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
         }
      }
   };
</script>
<style lang="stylus">
   .event_cover {
      width: 100%;
   }
</style>
