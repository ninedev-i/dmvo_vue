<template>
   <div>
      <article>
         <h1 class="padding-20">{{$store.state.contact_page_title}}</h1>
         <div id="map"></div>
         <h2 class="padding-20">Руководство Дома молодежи</h2>

         <!--<masonry
            :cols="{default: 2, 1600: 1}"
            :gutter="{default: '20px'}"
            >
            <div v-for="specialist in contacts" class="contact__specialist">
               <div class="contact__specialist-info">
                  <b>{{specialist.name}}</b>
                  <div class="contact__specialist-position">{{specialist.position}}</div>
                  <div v-if="specialist.phone"><a :href="`tel:${specialist.phone}`">{{specialist.phone}}</a></div>
                  <div v-if="specialist.email"><a :href="`mailto:${specialist.email}?subject=Письмо от пользователя сайта`">{{specialist.email}}</a></div>
                  <div v-if="specialist.reception_time">Часы приема: {{specialist.reception_time}}</div>
               </div>
               <div
                  :style="`background-image: url(https://xn&#45;&#45;d1aadekogaqcb.xn&#45;&#45;p1ai/public/img/users/${specialist.username}.jpg);`"
                  class="contact__specialist-photo"
                  :title="specialist.name"
                  :alt="specialist.name"
               />
            </div>
         </masonry>-->
         <peopleList :people="contacts" :showReception="false" />
      </article>

      <aside>
         <div class="sidebar">
            <widgetAddress />
            <widgetVk group="20668429" />
         </div>
      </aside>
   </div>
</template>
<script>
   import ymaps from 'ymaps';
   import peopleList from '../components/people/List.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';

   export default {
      components: {
         peopleList,
         widgetAddress,
         widgetVk
      },
      title () {
         return this.$store.state.contact_page_title;
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
