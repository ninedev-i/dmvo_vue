<template>
   <layout :whiteBackground="false">
      <template #pageContent>
         <h1 class="padding-20">{{title}}</h1>
         <div id="map"></div>
         <h2 class="padding-20">Руководство Дома молодежи</h2>
         <peopleList :people="contacts" :showReception="false" />
      </template>

      <template #sidebar>
         <admin>
            <template>
               <router-link to="/contact/edit" tag="a">Редактировать</router-link>
            </template>
         </admin>
         <widgetAddress />
         <widgetVk group="20668429" />
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';
   import ymaps from 'ymaps';
   import peopleList from '../components/people/List.vue';
   import admin from '../components/widgets/Admin.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';

   export default {
      components: {
         layout,
         peopleList,
         admin,
         widgetAddress,
         widgetVk
      },
      data() {
         return {
            title: 'Контактная информация Дома молодежи Василеостровского района'
         }
      },

      title () {
         return this.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'contacts'});
      },

      mounted() {
         ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
            const map = new maps.Map('map', {
               center: [59.9357, 30.2694],
               zoom: 16
            });

            const home = new maps.Placemark([59.9357, 30.2694], {
               iconGlyphColor: 'red',
               iconCaption: 'Дом Молодежи'
            }, {
               preset: 'islands#dotIcon',
               iconColor: '#ED4543'
           });
           map.geoObjects.add(home);

         }).catch(error => console.error('Неудалось загрузить карту', error));
      },

      computed: {
         contacts() {
            return this.$store.state.contacts;
         }
      }
   };
</script>
<style lang="less">
   #map {
      width: 100%;
      height: 360px;
   }
</style>
