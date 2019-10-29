<template>
   <div>
      <article class="padding-20 background-white">
         <h1>{{$store.state.events_closest_title}}</h1>
         <div class="events__list">
            <router-link v-for="(event, i) in closestEvents" v-bind:to="'events/' + event.id" class="events__list-block" :title="event.title" :key="event.id">
               <div
                  :class="`events__list-block-container background-main events__list-block-container-${event.cover ? 'cover' : 'withbg'}`"
                  :style="event.cover ? `background-image: url('https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}')` : ''"
                  >
                  <!--<div v-if="!!event.cover" class="events__list-block-shadow"></div>-->
                  <div :class="`events__list-block-title ${!event.cover ? '' : 'events__list-block-title-bottom events__list-block-title-animation'}`">
                     <span>{{event.title}}</span>
                     <div class="events__list-block-dateInfo">
                        {{getPeriod(event.date_from, event.date_to, true, true)}}
                     </div>
                  </div>
               </div>
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
   @bg: 19, 146, 189;
   @bg-opacity: 19, 146, 189, 0.9;

   .events {
      &__list {
         display: flex;
         flex-wrap: wrap;
         flex-direction: row;
         margin: auto;

         &-block {
            height: 280px;
            width: calc(16.5% - 9px);
            background-color: white;
            overflow: hidden;
            text-decoration: none;
            margin-bottom: 12px;
            margin-right: 12px;
            display: flex;
            flex-direction: column;

            &:hover {
               color: inherit;

               .events__list-block-shadow {
                  display: block;
               }
               .events__list-block-title-animation {
                  display: block;


                  animation-name: slideUp;
                  -webkit-animation-name: slideUp;

                  animation-duration: 0.3s;
                  -webkit-animation-duration: 0.3s;

                  animation-fill-mode: forwards;
               }
            }

            &-shadow {
               height: 40px;
               width: 100%;
               display: none;
               background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(@bg, 0.8) 70%, rgba(@bg, 1) 100%);
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
               display: block;
               padding: 10px 10px 6px 10px;
               overflow: hidden;
               text-overflow: ellipsis;
               text-align: center;
               &-animation {
                  transform: translateY(100%);
               }
               &-bottom {
                  background-color: rgba(@bg-opacity); color: #fff;
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

   .background-main {background-color: rgba(@bg); color: #fff;}

   @media (min-width: 1601px) {
      .events__list-block {
         &:nth-child(6n+6) {
            margin-right: 0;
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

   @keyframes slideUp {
      from {
         transform: translateY(100%);
      }
      to {
         transform: translateY(0%);
      }
   }
   @-webkit-keyframes slideUp {
      from {
         -webkit-transform: translateY(100%);
      }
      to {
         -webkit-transform: translateY(0%);
      }
   }
</style>
