<template>
   <div>
      <article>
         <div class="padding-20 background-white">
            <h1>{{event.title}}</h1>
            <div v-if="event.post_reliz && event.content" class="event__tab-container">
               <router-link tag="a" :to="`/events/${event.id}/post`" class="event__tab-box">Пост-релиз</router-link>
               <router-link tag="a" :to="`/events/${event.id}`" class="event__tab-box">Анонс</router-link>
            </div>
            <div v-if="$route.meta.post" v-html="event.post_reliz"></div>
            <div v-else v-html="event.content"></div>
         </div>
         <photoGallery :title="event.title" :photos="event.pictures" />
      </article>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               <div class="margin-bottom-12">
                  <b v-if="event.date_from === event.date_to">Дата:</b>
                  <b v-else="event.date_from === event.date_to">Даты:</b>
                  {{getPeriod(event.date_from, event.date_to, true, true)}}
               </div>
               <div v-if="event.what_time" class="margin-bottom-12">
                  <b>Время:</b> {{event.what_time}}
               </div>
               <div class="margin-bottom-12" v-if="event.tags">
                  <b>Упомянутые студии:</b>
                  <div>
                     <div v-for="tag in tags" class="event__tag padding-6">
                        {{tag}}
                     </div>
                  </div>
               </div>
               <a
                  v-if="!!event.cover"
                  :href="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
                  data-nice="gallery"
                  >
                  <img
                     class="event__cover"
                     :src="`https://xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
                     :alt="event.title"
                     :title="event.title"
                  />
               </a>
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
         return this.event.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getEvent', {id: route.params.id});
      },

      computed: {
         event() {
            return this.$store.state.event;
         },

         tags() {
            let tags = this.$store.state.event.tags;
            return tags.split(' ');
         }
      }
   };
</script>
<style lang="less">
   .event {
      &__tab {
         &-container {
            width: 100%;
            border-bottom: 1px solid #E5E7E8;
            margin-bottom: 6px;
         }
         &-box {
            display: inline-block;
            border: 1px solid #E5E7E8;
            color: #a0a0a0;
            padding: 5px 12px;
            margin: 0 6px -1px 0;
            font-size: 16px;
            text-decoration: none;

            &.router-link-exact-active {
               font-weight: bold;
               cursor: default;
               border-bottom: 1px solid white;
               color: #384047;
               &:hover {
                  color: #384047;
               }
            }
         }
      }

      &__cover {
         width: 100%;
      }

      &__tag {
         display: inline;
         color: #00897b;
         background-color: #E0F2F1;
         margin: 6px 12px 6px 0px;
         line-height: 40px;
         font-size: 14px;
         cursor: pointer;

         &:hover {
            background-color: #c8e0df;
         }
      }
   }
</style>
