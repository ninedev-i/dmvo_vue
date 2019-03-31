<template>
   <div>
      <div class="padding-20 background-white">
         <h1>{{$store.state.events_closest_title}}</h1>
         <div class="events__list">
            <router-link v-for="(event, i) in closestEvents" v-bind:to="'events/' + event.id" class="events__list-block" :title="event.title" :key="event.id">
               <div
                  :class="`events__list-block-container background-${i.toString()[i.toString().length - 1]} events__list-block-container-${event.cover ? 'cover' : 'withbg'}`"
                  :style="event.cover ? `background-image: url('https://xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}')` : ''"
                  >
                  <div v-if="!!event.cover" :class="`events__list-block-shadow events__list-block-shadow-${i.toString()[i.toString().length - 1]}`"></div>
                  <div :class="`events__list-block-title ${!event.cover ? '' : 'events__list-block-title-bottom-' + i.toString()[i.toString().length - 1]}`">
                     <span>{{event.title}}</span>
                     <div class="events__list-block-dateInfo">
                        {{getPeriod(event.date_from, event.date_to, true, true)}}
                     </div>
                  </div>
               </div>
               <!--<div class="events__list-block-dateInfo">
                  {{getPeriod(event.date_from, event.date_to, true, true)}}
               </div>-->
            </router-link>
         </div>
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
   export default {
      title () {
         return this.$store.state.events_closest_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getData', {name: 'closestEvents'});
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
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      margin: auto;

      &-block {
         height: 320px;
         width: 280px;
         background-color: white;
         overflow: hidden;
         border: 1px solid #ededed;
         text-decoration: none;
         margin-bottom: 12px;

         display: flex;
         flex-direction: column;

         &-shadow {
            height: 40px;
            width: 100%;

            &-1 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg1,0.8) 70%, rgba(@bg1,1) 100%);}
            &-2 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg2,0.8) 70%, rgba(@bg2,1) 100%);}
            &-3 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg3,0.8) 70%, rgba(@bg3,1) 100%);}
            &-4 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg4,0.8) 70%, rgba(@bg4,1) 100%);}
            &-5 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg5,0.8) 70%, rgba(@bg5,1) 100%);}
            &-6 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg6,0.8) 70%, rgba(@bg6,1) 100%);}
            &-7 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg7,0.8) 70%, rgba(@bg7,1) 100%);}
            &-8 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg8,0.8) 70%, rgba(@bg8,1) 100%);}
            &-9 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg9,0.8) 70%, rgba(@bg9,1) 100%);}
            &-0 {background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(@bg0,0.8) 70%, rgba(@bg0,1) 100%);}
         }

         &-container {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: top center;
            display: flex;
            flex-direction: column;

            &-withbg {
               justify-content: center;
            }
            &-cover {
               justify-content: flex-end;
            }
         }

         &-img {
            height: 200px;
            width: 100%;
            object-fit: cover;
         }

         &-title {
            padding: 10px 10px 6px 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;

            &-bottom-1 {.background-1();}
            &-bottom-2 {.background-2();}
            &-bottom-3 {.background-3();}
            &-bottom-4 {.background-4();}
            &-bottom-5 {.background-5();}
            &-bottom-6 {.background-6();}
            &-bottom-7 {.background-7();}
            &-bottom-8 {.background-8();}
            &-bottom-9 {.background-9();}
            &-bottom-0 {.background-0();}
         }

         &-dateInfo {
            font-style: italic;
            border-top: 1px solid;
            margin: 6px 26px 0;
            padding: 3px 0 0 0;
         }

         &:hover .events__list-block-title span {
            font-weight: bolder;
         }
      }
   }

   @bg0: 247, 65, 44;
   @bg1: 236, 21, 98;
   @bg2: 157, 29, 178;
   @bg3: 104, 52, 188;
   @bg4: 63, 77, 184;
   @bg5: 18, 148, 246;
   @bg6: 0, 188, 215;
   @bg7: 71, 176, 75;
   @bg8: 137, 197, 65;
   @bg9: 205, 222, 32;

   .background-1 {background-color: rgb(@bg1); color: #fff;}
   .background-2 {background-color: rgb(@bg2); color: #fff;}
   .background-3 {background-color: rgb(@bg3); color: #fff;}
   .background-4 {background-color: rgb(@bg4); color: #fff;}
   .background-5 {background-color: rgb(@bg5);}
   .background-6 {background-color: rgb(@bg6);}
   .background-7 {background-color: rgb(@bg7);}
   .background-8 {background-color: rgb(@bg8);}
   .background-9 {background-color: rgb(@bg9);}
   .background-0 {background-color: rgb(@bg0); color: #fff;}
</style>
