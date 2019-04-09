<template>
   <div class="photogallery">
      <div
         v-if="!!photos.length"
         v-swiper:mySwiper="swiperOption"
         class="swiper-container"
         >
         <div class="swiper-wrapper">
            <a
               v-if="photos.length"
               v-for="photo in photos"
               :href="`https://доммолодежи.рф/${path}/${photo}`"
               data-nice="gallery"
               class="swiper-slide"
               >
               <img
                  class="swiper-slide-img"
                  :src="`https://доммолодежи.рф/${path}/${photo}`"
                  :title="title"
                  :alt="title"
               />
            </a>
         </div>
      </div>
   </div>
</template>

<script>
   import {NicePopup} from 'nice-popup';
   export default {
      props: {
         title: String,
         photos: Array,
         path: {
            type: String,
            default: 'public/img'
         }
      },

      data () {
         return {
            swiperOption: {
               loop: false,
               loopFillGroupWithBlank: true,
               slidesPerView: 'auto',
               autoplay: {
                  delay: 6000
               }
            }
         };
      },

      mounted() {
         if (this.mySwiper) {
            this.mySwiper.autoplay.start();
         }

         new NicePopup();
      }
   }
</script>

<style lang="less">
   .photogallery {
      .swiper {
         &-container {
            width: 100%;
            flex-shrink: 1;
            overflow: hidden;
            min-width: 1px;
            margin: 16px 0 0 0;
         }

         &-wrapper {
            display: flex;
            position: relative;
            width: 100%;
            z-index: 1;
            box-sizing: content-box;
            cursor: pointer;
         }

         &-slide {
            flex-shrink: 0;
            height: 220px;
            background-color: #1392BD;
            margin-right: 16px;
            text-align: center;

            &-img {
               height: 220px;
            }
         }
      }
   }
</style>