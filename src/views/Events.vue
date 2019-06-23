<template>
   <div>
      <article class="padding-20 background-white">
         <h1>{{$store.state.events_closest_title}}</h1>
         <div class="events__list">
            <router-link v-for="(event, i) in closestEvents" v-bind:to="'events/' + event.id" class="events__list-block" :title="event.title" :key="event.id">
               <div
                  :class="`events__list-block-container background-${i.toString()[i.toString().length - 1]} events__list-block-container-${event.cover ? 'cover' : 'withbg'}`"
                  :style="event.cover ? `background-image: url('https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}')` : ''"
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
            <div
               v-if="closestEvents.length === 0"
               class="events__emptyList"
               >
               Нет мероприятий, удовлетворяющих условиям фильтрации. <u v-on:click="resetFilter()">Сбросить фильтр</u>
            </div>
         </div>
      </article>
      <aside>
         <div class="sidebar">
            <div class="padding-20 background-white margin-bottom-12">
               <h3>Фильтр</h3>
               <b>Направления:</b>
               <!--<radioButtons :data="eventTypes" :selectedItem="eventType"  v-on:changeSelectedItem="changeSelectedItem" />-->
               <div class="events__filter">
                  <div><input type="radio" id="all" value="all" v-model="eventType"><label for="all">Все</label></div>
                  <div><input type="radio" id="exhibitions" value="exhibitions" v-model="eventType"><label for="exhibitions">Выставки</label></div>
                  <div><input type="radio" id="other" value="other" v-model="eventType"><label for="other">Городские и районные</label></div>
               </div>
               <div
                  v-if="eventType !== 'all'"
                  v-on:click="resetFilter()"
                  class="button-red margin-top-12">
                  Сбросить фильтр
               </div>
            </div>

            <widgetAddress />
         </div>
      </aside>
   </div>
</template>
<script>
   import widgetAddress from '../components/widgets/Address.vue';
   import radioButtons from '../components/RadioButtons.vue';

   export default {
      components: {
         widgetAddress,
         radioButtons
      },

      data() {
         return {
            eventType: 'all',
            eventTypes: [
               {id: 'all', caption: 'Все'},
               {id: 'exhibitions', caption: 'Выставки'},
               {id: 'other', caption: 'Городские и районные'}
            ]
         }
      },

      title () {
         return this.$store.state.events_closest_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getData', {name: 'closestEvents'});
      },

      computed: {
         closestEvents() {
            let data = this.$store.state.events_closest;
            return data.filter(event => {
               switch (this.eventType) {
                  case 'all':
                     return true;
                  case 'exhibitions':
                     return event.tags.search('exhibition') >= 0;
                  case 'other':
                     return event.tags.search('news') >= 0;
                  default:
                     return false;
               }
            });
         }
      },

      methods: {
         changeSelectedItem(id) {
            this.eventType = id;
         },
         resetFilter() {
            this.eventType = 'all';
         }
      }
   };
</script>
<style lang="less">
   .events {
      &__list {
         display: flex;
         flex-wrap: wrap;
         flex-direction: row;
         margin: auto;

         &-block {
            height: 320px;
            width: calc(25% - 9px);
            background-color: white;
            overflow: hidden;
            text-decoration: none;
            margin-bottom: 12px;
            margin-right: 12px;
            display: flex;
            flex-direction: column;

            &:hover {
               color: inherit;
            }

            &-shadow {
               height: 40px;
               width: 100%;

               &-1 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg1, 0.8) 70%, rgba(@bg1, 1) 100%);
               }

               &-2 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg2, 0.8) 70%, rgba(@bg2, 1) 100%);
               }

               &-3 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg3, 0.8) 70%, rgba(@bg3, 1) 100%);
               }

               &-4 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg4, 0.8) 70%, rgba(@bg4, 1) 100%);
               }

               &-5 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg5, 0.8) 70%, rgba(@bg5, 1) 100%);
               }

               &-6 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg6, 0.8) 70%, rgba(@bg6, 1) 100%);
               }

               &-7 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg7, 0.8) 70%, rgba(@bg7, 1) 100%);
               }

               &-8 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg8, 0.8) 70%, rgba(@bg8, 1) 100%);
               }

               &-9 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg9, 0.8) 70%, rgba(@bg9, 1) 100%);
               }

               &-0 {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg0, 0.8) 70%, rgba(@bg0, 1) 100%);
               }
            }

            &-container {
               width: 100%;
               height: 100%;
               background-size: 100% auto;
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

               &-bottom-1 {
                  .background-1();
               }

               &-bottom-2 {
                  .background-2();
               }

               &-bottom-3 {
                  .background-3();
               }

               &-bottom-4 {
                  .background-4();
               }

               &-bottom-5 {
                  .background-5();
               }

               &-bottom-6 {
                  .background-6();
               }

               &-bottom-7 {
                  .background-7();
               }

               &-bottom-8 {
                  .background-8();
               }

               &-bottom-9 {
                  .background-9();
               }

               &-bottom-0 {
                  .background-0();
               }
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

      &__emptyList {
         width: 100%;
         text-align: center;

         & u:hover {
            cursor: pointer;
            color: #1392BD;
         }
      }
   }

   /*@bg0: 247, 65, 44;
   @bg1: 236, 21, 98;
   @bg2: 157, 29, 178;
   @bg3: 104, 52, 188;
   @bg4: 63, 77, 184;
   @bg5: 18, 148, 246;
   @bg6: 0, 188, 215;
   @bg7: 71, 176, 75;
   @bg8: 137, 197, 65;
   @bg9: 205, 222, 32;*/
   @bg0: 19, 146, 189;
   @bg1: 19, 146, 189;
   @bg2: 19, 146, 189;
   @bg3: 19, 146, 189;
   @bg4: 19, 146, 189;
   @bg5: 19, 146, 189;
   @bg6: 19, 146, 189;
   @bg7: 19, 146, 189;
   @bg8: 19, 146, 189;
   @bg9: 19, 146, 189;

   .background-main {background-color: rgb(@bg1); color: #fff;}
   .background-1 {background-color: rgb(@bg1); color: #fff;}
   .background-2 {background-color: rgb(@bg2); color: #fff;}
   .background-3 {background-color: rgb(@bg3); color: #fff;}
   .background-4 {background-color: rgb(@bg4); color: #fff;}
   .background-5 {background-color: rgb(@bg5);   color: #fff;}
   .background-6 {background-color: rgb(@bg6);   color: #fff;}
   .background-7 {background-color: rgb(@bg7);   color: #fff;}
   .background-8 {background-color: rgb(@bg8);   color: #fff;}
   .background-9 {background-color: rgb(@bg9);   color: #fff;}
   .background-0 {background-color: rgb(@bg0); color: #fff;}

   @media (min-width: 1601px) {
      .events__list-block {
         &:nth-child(4n+4) {
            margin-right: 0px;
         }
      }
   }
   @media (min-width: 1371px) and (max-width: 1600px) {
      .events__list-block {
         width: calc(33% - 6px);
         &:nth-child(3n+3) {
            margin-right: 0;
         }
      }
   }
   @media (min-width: 1140px) and (max-width: 1370px) {
      .events__list-block {
         width: calc(50% - 6px);
         &:nth-child(2n+2) {
            margin-right: 0;
         }
      }
   }
   @media (max-width: 1140px) {
      .events__list-block {
         width: 100%;
         margin-right: 0;
      }
   }
</style>
