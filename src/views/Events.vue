<template>
   <div>
      <div class="padding20">
         <h1>{{$store.state.events_closest_title}}</h1>
         <masonry
            :cols="{default: 8, 1450: 2, 1200: 1}"
            :gutter="{default: '20px'}"
            class="events_list"
            >
            <div v-for="event in closestEvents" class="news-list__item">
               <router-link v-bind:to="'events/' + event.id" class="event_block" :title="event.title">
                  <div class="eventwithbg bgcolor1">
                     <div class="event_title">{{event.title}}</div>
                  </div>
                  <div class="date_row">
                     <div class="date_info">{{getPeriod(event.date_from, event.date_to, true)}}</div>
                  </div>
               </router-link>
            </div>
         </masonry>
      </div>
   </div>
</template>
<script>
   import VueMasonry from 'vue-masonry-css';
   export default {
      title () {
         return this.$store.state.events_closest_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getClosestEvents');
      },

      computed: {
         closestEvents() {
            return this.$store.state.events_closest;
         }
      }
   };
</script>
<style lang="stylus">
.events_list {
   display: flex;
}
.event_block {
   display: inline-block;
   margin-right: 20px;
   height: 300px;
   margin-bottom: 10px;
   overflow: hidden;
   width: 180px;
   border: 1px solid #ededed;
}
.eventwithbg {display: table-row; vertical-align: middle; width: 100%; height: 250px; background-size: cover; font-weight: bold; text-align: center;}
.bgcolor1 {background-color: #37c5c4;}
.bgcolor2 {background-color: #ABC8E2;}
.bgcolor3 {background-color: #C4D7ED;}
.bgcolor4 {background-color: #E1E6FA;}
.bgcolor5 {background-color: #7FB2F0;}
.bgcolor6 {background-color: #96CEB4;}
.bgcolor7 {background-color: #00A388;}
.bgcolor8 {background-color: #79BD8F;}
.bgcolor9 {background-color: #BEEB9F;}
.bgcolor0 {background-color: #FFFF9D;}
</style>
