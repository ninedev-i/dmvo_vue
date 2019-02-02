<template>
   <div>
      <div class="padding-20">
         <h1>{{$store.state.events_closest_title}}</h1>
         <masonry
            :cols="{default: 6, 1450: 2, 1200: 1}"
            :gutter="{default: '20px'}"
            class="events__list"
            >
            <router-link v-for="event in closestEvents" v-bind:to="'events/' + event.id" class="events__list-block" :title="event.title" :key="event.id">
               <div :class="'events__list-block-withbg background-' + event.id.toString().slice(-1)">
                  <img
                     class="events__list-block-img"
                     v-if="event.cover"
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.cover + ''"
                     :alt="event.title"
                     :title="event.title"
                     />
                  <div
                     v-if="!event.cover"
                     class="events__list-block-title"
                     >
                     {{event.title}}</div>
               </div>
               <div class="events__list-block-dateInfo">
                  {{getPeriod(event.date_from, event.date_to, true)}}
               </div>
            </router-link>
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
<style lang="less">
   .events__list {
      display: flex;

      &-block {
         height: 300px;
         width: 180px;
         background-color: white;
         display: inline-block;
         overflow: hidden;
         border: 1px solid #ededed;
         text-decoration: none;

         &-withbg {
            display: table-row;
            vertical-align: middle;
            width: 100%;
            height: 250px;
            background-size: cover;
            font-weight: bold;
            text-align: center;
            line-height: 0;
         }

         &-img {
            height: 250px;
            width: 100%;
            object-fit: cover;
         }

         &-title {
            display: table-cell;
            vertical-align: middle;
            padding: 10px;
            line-height: 24px;
            max-width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
         }

         &-dateInfo {
            height: 50px;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
         }
      }
   }

   .background-1 {background-color: #37c5c4;}
   .background-2 {background-color: #ABC8E2;}
   .background-3 {background-color: #C4D7ED;}
   .background-4 {background-color: #E1E6FA;}
   .background-5 {background-color: #7FB2F0;}
   .background-6 {background-color: #96CEB4;}
   .background-7 {background-color: #00A388;}
   .background-8 {background-color: #79BD8F;}
   .background-9 {background-color: #BEEB9F;}
   .background-0 {background-color: #FFFF9D;}
</style>
