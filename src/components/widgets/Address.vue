<template>
   <div class="background-white padding-20 margin-bottom-12">
      <address
         itemscope=""
         itemtype="https://schema.org/Organization">
         <div>
            <!-- <a data-nice="inline" href="#widgetMap">Карту открыть</a> -->
            <b>Адрес: </b><span itemprop="streetAddress">Санкт-Петербург, Большой проспект В.О., д. 65 А</span>
         </div>
         <div>
            <b>Телефон: </b><span itemprop="telephone"><a href="+78123214749">321-47-49</a></span>
         </div>
         <div>
            <b>Почта: </b><span><a href="mailto:dmvo@bk.ru?subject=Письмо от пользователя сайта" itemprop="email">dmvo@bk.ru</a></span>
         </div>
      </address>

      <!--<div id="widgetMap" class="hidde1n">
         <div id="map"></div>
      </div>-->
   </div>
</template>

<script>
   // import ymaps from 'ymaps';
   // import {NicePopup} from 'nice-popup';
   //
   // export default {
   //    mounted() {
   //       new NicePopup();
   //
   //       ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
   //          const map = new maps.Map('map', {
   //             center: [59.9357, 30.2694],
   //             zoom: 16
   //          });
   //
   //          const home = new maps.Placemark([59.9357, 30.2694], {
   //             iconGlyphColor: 'red',
   //             iconCaption: 'Дом Молодежи'
   //          }, {
   //             preset: 'islands#dotIcon',
   //             iconColor: '#ED4543'
   //          });
   //          map.geoObjects.add(home);
   //
   //       }).catch(error => console.error('Неудалось загрузить карту', error));
   //    }
   // }
</script>

<style lang="less">
   #map {
      width: 400px;
      height: 360px;
   }
</style>