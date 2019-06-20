<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
         </div>
         <photoGallery :title="page.title" :photos="photos" />
      </article>

      <aside>
         <div class="sidebar volunteer__sidebar">
            <volunteerForm class="volunteer__button" />

            <!-- <widgetVk group="145772884" /> -->

            <h3 class="padding-20">Руководитель:</h3>
            <div v-for="specialist in page.people" class="volunteer__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="volunteer__specialist-photo"
                     :title="specialist.name"
                     :alt="specialist.name"
                  />
                  <div><b>Телефон: </b><a :href="`tel:${specialist.phone}`">{{specialist.phone}}</a></div>
               </div>
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   // import widgetVk from '../components/widgets/Vk.vue';
   import photoGallery from '../components/events/PhotoGallery.vue';
   import volunteerForm from '../components/forms/Volunteer.vue';

   export default {
      components: {
         photoGallery,
         volunteerForm,
         // widgetVk
      },
      data() {
         return {
            photos: ['volunteer_1.jpg', 'volunteer_2.jpg', 'volunteer_3.jpg', 'volunteer_4.jpg']
         }
      },

      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'volunteer'});
      },

      computed: {
         page() {
            return this.$store.state.volunteer;
         }
      }
   };
</script>
<style lang="less">
   .volunteer {
      &__sidebar {
         & .volunteer__button.button-blue {
            margin-bottom: 12px;
         }
         & .widget-vk {
            height: 208px;
            max-height: 208px;
         }
      }
      &__specialist {
         display: flex;
         flex-grow: 1;
         flex-direction: column;
         background-color: white;
         padding: 10px 20px 15px;
         margin-bottom: 12px;

         &-photo {
            width: 100%;
            margin: 10px 0 0;
         }
      }
   }
   @media (max-width: 450px) {
      .volunteer {
         &__button {
            margin: 12px;
         }
      }
   }
</style>
