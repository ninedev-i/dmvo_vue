<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{$store.state.studio_page_title}}</h1>
               <masonry
                  v-bind:cols="columns"
                  :gutter="{default: '16px'}"
                  >
                  <div
                     v-for="direction in directions"
                     v-if="direction.name !== 'all' && direction.count"
                     class="studio__direction"
                     >
                     <div
                        class="studio__direction-image"
                        :style="`background-image: url('public/studioImages/${direction.name}.jpg');`"
                        >
                        <div class="studio__direction-title"><h3>{{direction.title}}</h3></div>
                     </div>
                     <div
                        v-for="studio in filteredStudios"
                        v-if="direction.name === studio.direction"
                        class="studio__direction-item"
                        :title="studio.studio_name"
                        >
                        {{studio.studio_name}}
                     </div>
                  </div>
               </masonry>
               <div
                  v-if="directionsCounter === 0"
                  class="studio__emptyList"
                  >
                  Нет студий, удовлетворяющих условиям фильтрации. <u v-on:click="resetFilter()">Сбросить фильтр</u>
               </div>
            </div>
         </div>
      </article>

      <aside>
         <div class="sidebar">
            <div class="background-white padding-20">
               <h3>Фильтр</h3>
               <b>Направления:</b>
               <div v-for="direction in directions">
                  <input type="radio" :id="direction.name" :value="direction.name" v-model="category"><label :for="direction.name">{{direction.filterTitle}}</label>
               </div>
               <b>Возраст:</b><br />
               <input type="number" name="" value="" min="1" placeholder="16 лет" v-model="age">

               <div
                  v-if="age !== '' || category !== 'all'"
                  v-on:click="resetFilter()"
                  class="button-red studio__resetButton">
                  Сбросить фильтр
               </div>
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   import Vue from 'vue';
   import VueMasonry from 'vue-masonry-css';
   Vue.use(VueMasonry);

   export default {
      data() {
         return {
            directions: {
               all : {
                  name: 'all',
                  title: 'Все',
                  filterTitle: 'Все',
                  count: 1
               },
               patriot : {
                  name: 'patriot',
                  title: 'Патриотическое направление',
                  filterTitle: 'Патриотика',
                  count: 1
               },
               fizra: {
                  name: 'fizra',
                  title: 'Физкультурно-оздоровительное направление',
                  filterTitle: 'Спорт',
                  count: 1
               },
               vocal: {
                  name: 'vocal',
                  title: 'Вокальное направление',
                  filterTitle: 'Вокал',
                  count: 1
               },
               izo: {
                  name: 'izo',
                  title: 'Видео, ИЗО, ДПИ',
                  filterTitle: 'ИЗО',
                  count: 1
               },
               poetry: {
                  name: 'poetry',
                  title: 'Художественное слово',
                  filterTitle: 'Слово',
                  count: 1
               },
               theatre: {
                  name: 'theatre',
                  title: 'Театральное направление',
                  filterTitle: 'Театр',
                  count: 1
               },
               dance: {
                  name: 'dance',
                  title: 'Танцевальное направление',
                  filterTitle: 'Танец',
                  count: 1
               },
               music: {
                  name: 'music',
                  title: 'Музыкальное направление',
                  filterTitle: 'Музыка',
                  count: 1
               },
               family: {
                  name: 'family',
                  title: 'Работа с семьями',
                  filterTitle: 'Семья',
                  count: 1
               },
               psy: {
                  name: 'psy',
                  title: 'Психологическая поддержка молодежи',
                  filterTitle: 'Психология',
                  count: 1
               },
            },
            directionsCounter: 10,
            category: 'all',
            age: '',
            columns: {default: 2, 1400: 1}
         }
      },

      title () {
         return this.$store.state.studio_page_title;
      },

      asyncData({store}) {
         return store.dispatch('getStudioPage');
      },

      computed: {
         studios() {
            return this.$store.state.studio_page;
         },

         filteredStudios() {
            let list = this.studios;
            this.resetCounter(0);

            // Посчитаем кол-во студий
            this.studios.forEach((studio) => {
               if (this.directions[studio.direction]) {
                  this.directions[studio.direction].count += 1;
               }
            });

            if (this.category !== 'all') {
               this.resetCounter(0);
   				list = this.studios.filter((studio) => {
                  if (studio.direction === this.category) {
                     if (this.directions[studio.direction]) {
                        this.directions[studio.direction].count += 1;
                     }
                     return true;
                  }
   				});
   			}

            if (this.age) {
               this.resetCounter(0);
               list = list.filter((studio) => {
                  if (studio.age_min <= this.age && this.age <= studio.age_max) {
                     if (this.directions[studio.direction]) {
                        this.directions[studio.direction].count += 1;
                     }
                     return true;
                  }
   				});
            }

            this.countDirections();

            return list;
         }
      },

      methods: {
         resetFilter() {
            this.age = '';
            this.category = 'all';
            this.resetCounter(1);
         },

         resetCounter(value) {
            this.studios.filter((studio) => {
               if (this.directions[studio.direction]) {
                  this.directions[studio.direction].count = value;
               }
            });
         },

         // Посчитаем кол-во направлений после фильтрации
         countDirections() {
            this.directionsCounter = 0;
            let directions = JSON.parse(JSON.stringify(this.directions));
            delete directions.all;
            for (let direction in directions) {
               if (directions[direction].count > 0) {
                  this.directionsCounter += 1;
               }
            }
            // if (this.directionsCounter === 1) {
            //    this.columns = {default: 1};
            // }
         }
      }
   };
</script>

<style lang="less">
   .studio {
      &__direction {
         border: 1px solid #E5E7E8;

         &-image {
            position: relative;
            margin-bottom: 15px;
            height: 150px;
            width: 100%;
            display: block;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
         }
         &-title {
            background-color: rgba(0, 102, 153, 0.8);
            position: absolute;
            bottom: 0px;
            width: 100%;
            color: white;
            padding: 5px 0;
            text-align: center;

            & h3 {
               margin: 0;
               font-size: 19px;
               font-weight: normal;
            }
         }

         &-item {
            margin: 10px;
            background-color: #E5E7E8;
            display: block;
            padding: 5px 10px 5px 10px;
            height: 100%;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &:hover {
               background-color: #1392BD;
               color: white;
               cursor: pointer;
            }
         }
      }

      &__emptyList {
         text-align: center;

         & u:hover {
            cursor: pointer;
            color: #1392BD;
         }
      }

      &__resetButton {
         margin-top: 12px;
      }
   }
</style>
