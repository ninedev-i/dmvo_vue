<template>
   <div>
      <div class="padding20 container-whiteBg">
         <h1>{{event.title}}</h1>
         <div v-html="event.content"></div>
         <img :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0]" :alt="event.title" :title="event.title">
      </div>
      <div class="sidebar-container sidebar">
         <!-- <div class="sidebar-container">
            qwe
         </div> -->
         <img
            class="event_cover"
            v-if="!!event.cover"
            :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.cover"
            :alt="event.title"
            :title="event.title">
      </div>
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
