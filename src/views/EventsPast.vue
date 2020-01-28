<template>
   <layout :padding="20" :sidebarWithBg="true">
      <template #pageContent>
         <h1>{{title}}</h1>

         <div v-for="(events, month) in pastEvents" class="pastEvents__month">
            <div v-if="events.length && month!== 'name'" class="pastEvents__item">
               <h4 class="pastEvents__item-monthTitle">{{month}}</h4>
            </div>
            <div v-for="event in events" class="pastEvents__item" :key="event.id">
               <router-link tag="a" :to="'/events/' + event.id" class="pastEvents__item-link" :title="event.title" v-if="event.date_from">
                  <div class="pastEvents__item-link-line"></div>
                  <div class="pastEvents__item-link-circle"></div>
                  <div class="pastEvents__item-link-content">
                     <span class="pastEvents__item-link-content-date">{{getPeriod(event.date_from, event.date_to, false, false)}}</span>
                     <span>{{event.title}}</span>
                  </div>
               </router-link>
            </div>
         </div>
         <div
            v-if="!Object.keys(pastEvents).length"
            class="pastEvents__emptyList"
            >
            Нет мероприятий, удовлетворяющих условиям фильтрации. <u v-on:click="resetFilter()">Сбросить фильтр</u>
         </div>
      </template>

      <template #sidebar>
         <div class="padding-20">
            <h3>Фильтр</h3>
            <div class="margin-bottom-12">
               <input type="text" placeholder="Поиск по названию" class="pastEvents__search" v-model="searchString" />
            </div>
            <b>Год:</b>
            <div class="events__filter">
               <div v-for="year in years">
                  <input type="radio" :id="`year_${year}`" :value="`${year}`" v-model="yearFilter" v-on:change="changeYearFilter(year)" />
                  <label :for="`year_${year}`">{{year}}</label>
               </div>
            </div>
            <div
                  v-if="searchString || yearFilter != new Date().getFullYear()"
                  v-on:click="resetFilter()"
                  class="button-red margin-top-12">
               Сбросить фильтр
            </div>
         </div>
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';

   export default {
      components: {
         layout,
      },

      data() {
         return {
            title: 'Архив мероприятий',
            searchString: '',
            yearFilter: new Date().getFullYear()
         };
      },

      title () {
         return this.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPastEvents', {year: new Date().getFullYear()});
      },

      computed: {
         pastEvents() {
            let data = this.$store.state.events_past;
            let output = {};
            for (let month in data) {
               let filtered = data[month].filter((ev) => ev.title.toLocaleLowerCase().search(this.searchString.toLocaleLowerCase()) >= 0);
               if (filtered.length) {
                  output[month] = filtered;
               }
            }
            return output;
         },
         years() {
            let yearArray = [];
            for (let year = new Date().getFullYear(); year >= 2014; year--) {
               yearArray.push(year);
            }
            return yearArray;
         }
      },

      methods: {
         changeYearFilter(year) {
            this.$store.dispatch('getPastEvents', {year: year});
         },
         resetFilter() {
            this.searchString = '';
            this.yearFilter = new Date().getFullYear();
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
            border: 0;
         }

         &-link {
            display: inline-block;
            text-decoration: none;

            &:hover span {
               cursor: pointer;
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

      &__emptyList {
         width: 100%;
         text-align: center;

         & u:hover {
            cursor: pointer;
            color: #1392BD;
         }
      }

      &__search {
         width: calc(100% - 12px);
      }
   }
</style>
