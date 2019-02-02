<template>
   <div>
      <div class="padding-20">
         <h1>{{$store.state.events_closest_title}}</h1>
         <masonry
            :cols="{default: 6, 1450: 2, 1200: 1}"
            :gutter="{default: '20px'}"
            class="events_list"
            >
            <div v-for="event in closestEvents" class="events_list__item">
               <router-link v-bind:to="'events/' + event.id" class="event_block" :title="event.title">
                  <div :class="'eventwithbg bgcolor' + event.id.toString().slice(-1)">
                     <img
                        class="event_img"
                        v-if="event.cover"
                        :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.cover + ''"
                        :alt="event.title"
                        :title="event.title"
                        />
                     <div
                        v-if="!event.cover"
                        class="event_title"
                        >
                        {{event.title}}</div>
                  </div>
                  <div class="event_date_info">
                     {{getPeriod(event.date_from, event.date_to, true)}}
                  </div>
               </router-link>
            </div>
         </masonry>
      </div>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               Здесь нужно что-то придумать с сайдбаром
            </div>
         </div>
      </aside>
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
      height: 300px;
      width: 180px;
      /* margin-bottom: 10px; */
      background-color: white;
      display: inline-block;
      overflow: hidden;
      border: 1px solid #ededed;
      text-decoration: none;
   }
   .eventwithbg {
      display: table-row;
      vertical-align: middle;
      width: 100%;
      height: 250px;
      background-size: cover;
      font-weight: bold;
      text-align: center;
      line-height: 0;
   }
   .event_img {
      height: 250px;
      width: 100%;
      object-fit: cover;
   }
   .event_title {
      display: table-cell;
      vertical-align: middle;
      padding: 10px;
      line-height: 24px;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
   }
   .event_date_info {
      height: 50px;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
   }
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
