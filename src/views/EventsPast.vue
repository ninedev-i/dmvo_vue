<template>
   <div>
      <div class="padding-20 background-white">
         <h1>{{$store.state.events_past_title}}</h1>

         <div v-for="(events, month) in pastEvents" class="pastEvents__month">
            <div v-if="events.length && month!== 'name'" class="pastEvents__item">
               <h4 class="pastEvents__item-monthTitle">{{month}}</h4>
            </div>
            <div v-for="event in events" class="pastEvents__item" :key="event.id">
               <router-link tag="a" v-bind:to="'/events/' + event.id" class="pastEvents__item-link" :title="event.title" v-if="event.date_from">
                  <div class="pastEvents__item-link-line"></div>
                  <div class="pastEvents__item-link-circle"></div>
                  <div class="pastEvents__item-link-content">
                     <span class="pastEvents__item-link-content-date">{{getPeriod(event.date_from, event.date_to, false, false)}}</span>
                     <span>{{event.title}}</span>
                  </div>
               </router-link>
            </div>
         </div>
      </div>

      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               Тут будет фильтр по годам
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   export default {
      title () {
         return this.$store.state.events_past_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getData', {name: 'eventsPast'});
      },

      computed: {
         pastEvents() {
            return this.$store.state.events_past;
         }
      }
   };
</script>

<style lang="less">
   .pastEvents {
      &__item {
         position: relative;

         &-monthTitle {
            padding: 6px 0px;
            margin: 0;
         }

         &:last-child .pastEvents__item-link-line {
            border: 0px;
         }

         &-link {
            display: inline-block;
            text-decoration: none;

            &:hover span {
               cursor: pointer;
               border-bottom: 1px solid #384047;
               margin-bottom: -1px;
            }

            &:hover .pastEvents__item-link-circle {
               background: #1392bd;
            }

            &-line {
               position: absolute;
               top: 0;
               bottom: 0;
               left: 7px;
               border-left: 2px solid #e8e4e4;
            }

            &-circle {
               position: absolute;
               left: 0;
               top: 1px;
               width: 12px;
               height: 12px;
               border: 2px solid transparent;
               border-radius: 50%;
               background-color: #fff;
               color: #1392BD;
               border-color: #1392BD;
               z-index: 2;
               cursor: pointer;
            }

            &-content {
               display: flex;
               position: relative;
               top: -5px;
               padding: 0 0 8px 35px;
               cursor: pointer;

               &-date {
                  width: 100px;
                  // text-align: right;
                  margin-right: 12px;
               }
            }
         }
      }
   }
</style>
