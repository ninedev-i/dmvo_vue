<template>
   <div>
      <masonry
         :cols="{default: 2, 1600: 1}"
         :gutter="{default: '20px'}"
         >
         <div v-for="user in people" class="peopleList__user">
            <div class="peopleList__user-info">
               <b>{{user.name}}</b>
               <div class="peopleList__user-position">{{user.position}}</div>
               <div v-if="user.phone"><a :href="`tel:${user.phone}`">{{user.phone}}</a></div>
               <div v-if="user.email"><a :href="`mailto:${user.email}?subject=Письмо от пользователя сайта`">{{user.email}}</a></div>
               <div v-if="showReception && user.reception_time">Часы приема: {{user.reception_time}}</div>
               <div v-if="user.studios && user.studios.length">
                  Руководитель студии
                  <div v-for="studio in user.studios">
                     <router-link :to="{ path: `/studio/${studio.shortname}`}" append tag="a">
                        {{studio.studio_name}}
                     </router-link>
                  </div>
               </div>
            </div>
            <div
               :style="`background-image: url(https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/${user.username}.jpg);`"
               class="peopleList__user-photo"
               :title="user.name"
               :alt="user.name"
            ></div>
         </div>
      </masonry>
   </div>
</template>
<script>
   import Vue from 'vue';
   import VueMasonry from 'vue-masonry-css';
   Vue.use(VueMasonry);

   export default {
      props: {
         people: {
            type: Array
         },
         showReception: {
            default: true
         }
      }
   };
</script>
<style lang="less">
   .peopleList {
      &__user {
         display: flex;
         height: 200px;
         background-color: white;
         margin-bottom: 20px;

         &-info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 12px;
         }

         &-position {
            margin-bottom: 12px;
         }

         &-photo {
            height: 100%;
            width: 160px;
            min-width: 160px;
            background-position: center top;
            background-size: cover;
         }
      }
   }

   @media (max-width: 450px) {
      .peopleList__user {
         margin: 6px;
         height: auto;
         flex-direction: column;
         border-bottom: 1px solid gainsboro;

         &-photo {
            display: none;
         }
      }
   }
</style>
