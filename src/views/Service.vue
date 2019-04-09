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
         <div class="sidebar">
            <widgetAddress />
         </div>
      </aside>
   </div>
</template>
<script>
   import widgetAddress from '../components/widgets/Address.vue';
   import photoGallery from '../components/events/PhotoGallery.vue';

   export default {
      components: {
         photoGallery,
         widgetAddress
      },

      data() {
         return {
            photos: ['halls/kz-bottom.jpg', 'halls/kz-top.JPG', 'halls/scene_size.jpg']
         }
      },

      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'service'});
      },

      computed: {
         page() {
            return this.$store.state.service;
         }
      }
   };
</script>
<style lang="less">
   .service {
      &__video {
         margin-bottom: 16px;
         display: flex;
         justify-content: space-between;

         &-player {
            display: flex;
            width: calc(50% - 8px);
            height: 280px;
         }
      }
      &__table {
         border-collapse: collapse;

         tr {
            border-bottom: 1px solid #EDEFF0;
         }

         th {
            background-color: #1392BD;
            color: white;
            padding: 6px 12px;
            text-align: left;
            font-weight: normal;
         }

         td {
            padding: 6px 12px;

            &:last-of-type {
               width: 130px;
            }
         }
      }
   }
</style>
