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
         <photoGallery :title="studio.title" :photos="studio.images" />
      </article>
      <aside>
         <div class="sidebar">
            <div class="padding-20 background-white">
               <div class="margin-bottom-12">
                  <div v-if="studio.age_min && studio.age_max">
                     <b>Возраст:</b> от {{studio.age_min}} до {{studio.age_max}}
                  </div>
                  <div v-if="studio.price">
                     <b>Стоимость:</b> {{studio.price}}
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
            <div v-for="teacher in studio.teachers" v-if="studio.teacher" class="padding-20 background-white">
               <b>{{teacher.name}}</b>
               <img :src="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/${teacher.username}.jpg`" style="width: 100%;">
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   import photoGallery from '../components/events/PhotoGallery.vue';
   export default {
      components: {
         photoGallery
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

   }
</style>
