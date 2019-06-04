<template>
   <div
      v-if="!!slides.length"
      v-swiper:mySwiper="swiperOption"
      class="swiper-container"
      >
      <div class="swiper-wrapper">
         <router-link v-for="event in slides" v-bind:to="'events/' + event.id" class="swiper-slide" :key="event.id">
            <img
               class="swiper-slide-img"
               :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/events/covers/event_id' + event.id + '.jpg'"
               :title="event.title"
               :alt="event.title"
            >
         </router-link>
      </div>
   </div>
</template>

<script>
   export default {
      data () {
         return {
            swiperOption: {
               loop: true,
               loopFillGroupWithBlank: true,
               slidesPerView: 'auto'
            }
         };
      },

      mounted() {
         if (this.mySwiper) {
            this.mySwiper.autoplay.start();
         }
      },

      computed: {
         slides() {
            return this.$store.state.index_carousel;
         }
      }
   }
</script>
<style lang="less">
   .swiper {
      &-container {
         width: calc(100% - 40px);
         flex-shrink: 1;
         margin-left: 20px;
         height: 280px;
         overflow: hidden;
         min-width: 1px;
      }

      &-wrapper {
         display: flex;
         position: relative;
         width: 100%;
         box-sizing: content-box;
         cursor: pointer;
      }

      &-slide {
         flex-shrink: 0;
         height: 280px;
         background-color: #1392BD;
         margin-right: 20px;
         text-align: center;
         
         &-img {
            height: 280px;
         }
      }
   }
</style>
