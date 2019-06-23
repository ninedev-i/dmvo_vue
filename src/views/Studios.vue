<template>
   <div class="studio">
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{$store.state.studio_page_title}}</h1>
               <!-- Все направления -->
               <div v-if="directionsCounter > 1">
                  <masonry
                     ref="masonry"
                     :cols="{default: 2, 1400: 1}"
                     :gutter="{default: '16px'}"
                     >
                     <div
                        v-for="direction in directions"
                        v-if="direction.studios.length"
                        class="studio__direction"
                        >
                        <studioBlock :direction="direction" />
                     </div>
                  </masonry>
               </div>

               <!-- Только одно направление -->
               <div
                  v-for="direction in directions"
                  v-if="directionsCounter === 1 && direction.studios.length"
                  class="studio__direction"
                  >
                  <studioBlock :direction="direction" />
               </div>

               <!-- Список пуст -->
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
            <div class="background-white padding-20 margin-bottom-12">
               <h3 class="margin-bottom-6">Фильтр</h3>
               <b>Направления:</b>
               <div>
                  <input type="radio" id="all" value="all" v-model="category"><label for="all">Все</label>
               </div>
               <div v-for="direction in directions">
                  <input type="radio" :id="direction.name" :value="direction.name" v-model="category"><label :for="direction.name">{{direction.filterTitle}}</label>
               </div>
               <!--<b>Возраст:</b><br />-->
               <input type="number" class="studio__filter-age" value="" min="1" placeholder="Возраст" v-model="age">
               <!--<b>Стоимость:</b><br />-->
               <input type="checkbox" id="price" value="бесплатно" v-model="price"><label for="price">Бесплатно</label>

               <div
                  v-if="age !== '' || category !== 'all' || price"
                  v-on:click="resetFilter()"
                  class="button-red studio__filter-reset">
                  Сбросить фильтр
               </div>
            </div>
            <!--<h3 class="studio__widgetTitle padding-20">Руководитель направления</h3>-->
            <person :specialists="$store.state.studio_page.specialists" phone="+7 (812) 321-00-03" :showEmail="true" />
         </div>
      </aside>
   </div>
</template>
<script>
   import Vue from 'vue';
   import VueMasonry from 'vue-masonry-css';
   import studioBlock from '../components/StudioDirection.vue';
   import person from '../components/widgets/Person.vue';
   Vue.use(VueMasonry);

   export default {
      components: {
         studioBlock,
         person
      },

      data() {
         return {
            category: 'all',
            price: false,
            age: ''
         }
      },

      title () {
         return this.$store.state.studio_page_title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'studio'});
      },

      computed: {
         directions() {
            let service_data = JSON.parse(JSON.stringify(this.$store.state.studio_page.directions));
            let additional_data = {
               patriot : {
                  name: 'patriot',
                  title: 'Патриотическое направление',
                  filterTitle: 'Патриотика'
               },
               fizra: {
                  name: 'fizra',
                  title: 'Физкультурно-оздоровительное направление',
                  filterTitle: 'Спорт'
               },
               vocal: {
                  name: 'vocal',
                  title: 'Вокальное направление',
                  filterTitle: 'Вокал'
               },
               izo: {
                  name: 'izo',
                  title: 'Видео, ИЗО, ДПИ',
                  filterTitle: 'ИЗО'
               },
               poetry: {
                  name: 'poetry',
                  title: 'Художественное слово',
                  filterTitle: 'Слово'
               },
               dance: {
                  name: 'dance',
                  title: 'Танцевальное направление',
                  filterTitle: 'Танец'
               },
               theatre: {
                  name: 'theatre',
                  title: 'Театральное направление',
                  filterTitle: 'Театр'
               },
               music: {
                  name: 'music',
                  title: 'Музыкальное направление',
                  filterTitle: 'Музыка'
               },
               family: {
                  name: 'family',
                  title: 'Работа с семьями',
                  filterTitle: 'Семья'
               }
            };

            service_data.forEach((item, i) => {
               item.title = additional_data[item.name].title;
               item.filterTitle = additional_data[item.name].filterTitle;

            	item.studios = item.studios.filter(function(studio) {
                  if (this.category !== 'all' && studio.direction !== this.category) {
                     return false;
                  } else if (this.age && !(studio.age_min <= this.age && this.age <= studio.age_max)) {
                     return false;
                  } else if (this.price && studio.price !== 'бесплатно') {
                     return false;
                  } else {
                     return true
                  }
            	}.bind(this));
            });

            return service_data;
         },

         // Посчитаем кол-во направлений после фильтрации
         directionsCounter() {
            let count = 0;
            this.directions.forEach((item) => {
               if (item.studios.length) {
                  count += 1;
               }
            });
            return count;
         }
      },

      methods: {
         resetFilter() {
            this.category = 'all';
            this.age = '';
            this.price = false;
         }
      }
   };
</script>

<style lang="less">
   .studio {
      label {
         padding-left: 6px;
      }

      &__emptyList {
         text-align: center;

         & u:hover {
            cursor: pointer;
            color: #1392BD;
         }
      }

      &__filter {
         &-age {
            display: block;
            width: 80px;
         }

         &-reset{
            display: block;
            margin-top: 12px;
         }
      }

      &__widgetTitle {
         padding-right: 0 !important;
      }
   }
</style>
