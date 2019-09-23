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
         <news title="Архив мероприятий" v-bind:showText="false" directionTag="online" data-server-rendered="true" />
      </article>

      <aside>
         <div class="sidebar volunteer__sidebar">
            <volunteerForm class="volunteer__button margin-bottom-12" />
            <widgetVk group="182689576" />
            <h3 class="padding-20">Руководитель:</h3>
            <widgetPerson :specialists="page.people" :isSmall="true" />
         </div>
      </aside>
   </div>
</template>
<script>
   import photoGallery from '../components/events/PhotoGallery.vue';
   import news from '../components/events/News.vue';
   import volunteerForm from '../components/forms/Volunteer.vue';
   import widgetPerson from '../components/widgets/Person.vue';
   import widgetVk from '../components/widgets/Vk.vue';

   export default {
      components: {
         photoGallery,
         news,
         volunteerForm,
         widgetPerson,
         widgetVk
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
