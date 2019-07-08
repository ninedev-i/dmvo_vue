<template>
   <div>
      <article>
         <div class="padding-20 background-white">
            <h1>{{studio.studio_name}}</h1>
            <div v-html="studio.content"></div>

            <div v-if="studio.timetable">
               <p><b>Расписание:</b></p>
               <div v-html="studio.timetable"></div>
            </div>
            <!--<div v-if="studio.achievements">
               <p><b>Достижения:</b></p>
               <div v-html="studio.achievements"></div>
            </div>-->
         </div>
         <photoGallery class="studio-gallery" :title="studio.title" :photos="studio.images" />
         <news title="Участие в мероприятиях" v-bind:showText="false" :directionTag="studio.shortname" data-server-rendered="true" />
      </article>
      <aside>
         <div class="sidebar">
            <div class="padding-20 background-white">
               <div class="margin-bottom-12">
                  <div v-if="studio.age_min && studio.age_max">
                     <b>Возраст:</b> от {{studio.age_min}} до {{studio.age_max}}
                  </div>
                  <div v-if="studio.price">
                     <b style="margin-right: 4px;">Стоимость:</b> <span v-html="studio.price"></span>
                  </div>
                  <div v-if="studio.room">
                     <b>Кабинет:</b> {{studio.room}}
                  </div>
                  <div v-if="studio.phone">
                     <span><b>Телефон: </b></span>
                     <span v-html="studio.phone"></span>
                  </div>
                  <div v-if="studio.link">
                     <a :href="studio.link" target="_blank" rel="nofollow">{{studio.link}}</a>
                  </div>
               </div>
            </div>

            <h3 class="padding-20" v-if="studio.teachers.length">
               {{studio.teachers.length === 1 ? 'Руководитель' : 'Руководители'}}
            </h3>
            <person :specialists="studio.teachers" :showPhone="false" :showEmail="false" />
         </div>
      </aside>
   </div>
</template>
<script>
   import photoGallery from '../components/events/PhotoGallery.vue';
   import news from '../components/events/News.vue';
   import person from '../components/widgets/Person.vue';

   export default {
      components: {
         photoGallery,
         news,
         person
      },
      title () {
         return this.studio.studio_name;
      },

      asyncData({store, route}) {
         return store.dispatch('getStudio', {id: route.params.shortName});
      },

      computed: {
         studio() {
            return this.$store.state.studio;
         }
      }
   };
</script>
<style lang="less">
   .studio {
      &-gallery .swiper-container {
         height: 220px;
      }
   }
</style>
