<template>
   <div>
      <article>
         <div class="background-white">
            <div class="psychological__contentContainer padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
            <eventsList title="Ближайшие мероприятия" titleTag="h3" type="psychological_closestEvents" data-server-rendered="true" />
         </div>

         <h3 class="padding-20">Направления работы</h3>
         <div class="psychological__directions">
            <div
               v-for="(course, key) in courses"
               :value="key"
               class="psychological__directions-item padding-20 background-white"
            >
               <a data-nice="inline" :href="`#${key}`">
                  <b>{{course.title}}</b>
                  <div>{{course.description}}</div>
               </a>
               <div :id="key" style="display: none;">
                  <div class="psychological__directions-box" v-html="course.content"></div>
               </div>
            </div>
         </div>

         <news title="Архив мероприятий" v-bind:showText="false" directionTag="psychological" data-server-rendered="true" />
      </article>

      <aside>
         <div class="sidebar psychological__sidebar">
            <psyForm class="psychological__button margin-bottom-12" :specialists="page.people.slice(1)" />
            <widgetVk group="123029997" />
            <h3 class="padding-12 psychological__sidebar-title">Наши специалисты:</h3>
            <person :specialists="page.people" :showPhone="false" :showEmail="false" :isSmall="true" />
         </div>
      </aside>
   </div>
</template>
<script>
   import {NicePopup} from 'nice-popup';
   import news from '../components/events/News.vue';
   import eventsList from '../components/events/List.vue';
   import psyForm from '../components/forms/Psy.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import person from '../components/widgets/Person.vue';

   export default {
      data() {
         return {
            category: 'all',
            price: '',
            age: ''
         }
      },
      components: {
         eventsList,
         psyForm,
         widgetVk,
         news,
         person
      },
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'psychological'});
      },
      mounted() {
         new NicePopup();
      },

      computed: {
         page() {
            return this.$store.state.psychological;
         },
         courses() {
            return JSON.parse(this.page.additional);
         }
      }
   };
</script>
<style lang="less">
   .psychological {
      &__sidebar {
         &-title {
            padding-top: 0 !important;
         }
         & .widget-vk {
            height: 208px;
            max-height: 208px;
         }
      }

      &__directions {
         display: flex;

         &-item {
            margin-right: 12px;
            cursor: pointer;
            &:hover {
               background-color: #e8f5f9;
               box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
            }

            &:last-of-type {
               margin: 0;
            }
            a {
               text-decoration: none;
            }
         }

         &-box {
            max-width: 60%;
            padding: 12px;
            max-height: 80%;
            overflow-y: scroll;
            overflow-x: hidden;
         }
      }
   }
   @media (max-width: 450px) {
      .psychological {
         &__directions {
            flex-direction: column;
            margin-right: 0;

            &-item {
               margin: 0;
            }
         }
         &__button {
            margin: 12px;
         }
      }
   }
</style>
