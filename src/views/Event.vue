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
            <!-- Вложения в виде ссылок -->
            <div v-if="event.attachments.length" v-for="attachment in event.attachments">
               <a v-if="attachment.exists == 'true' && attachment.is_button != 'true'"
                  v-on:click="openLink(attachment)"
                  class="event__link">{{attachment.title}}</a>
            </div>
         </div>
         <photoGallery :title="event.title" :photos="event.pictures" />
      </article>
      <aside>
         <div class="sidebar">
            <admin>
               <template>
                  <!--<router-link :to="`/admin/edit/event/${event.id}`" tag="a">Редактировать</router-link>-->
                  <router-link :to="`/events/${event.id}/edit`" tag="a">Редактировать</router-link>
               </template>
            </admin>
            <!-- Вложения в виде кнопок -->
            <div v-if="event.attachments.length" v-for="attachment in event.attachments">
               <a v-if="attachment.exists == 'true' && attachment.is_button == 'true'"
                  v-on:click="openLink(attachment)"
                  class="button-blue margin-bottom-12">{{attachment.title}}</a>
            </div>
            <div class="padding-20 background-white">
               <div>
                  <b v-if="event.date_from === event.date_to">Дата:</b>
                  <b v-else>Даты:</b>
                  {{getPeriod(event.date_from, event.date_to, true, true)}}
               </div>
               <div v-if="event.what_time" class="margin-top-6">
                  <b>Время:</b> {{event.what_time}}
               </div>
               <div v-if="event.tags" class="margin-top-6">
                  <b>Упомянутые студии:</b>
                  <div class="event__tag-container">
                     <router-link
                        v-for="(tag, i) in event.tags"
                        class="event__tag"
                        :title="tag.name"
                        :to="tag.url"
                        :key="i"
                        tag="a"
                     >{{tag.name}}</router-link>
                  </div>
               </div>
               <a
                  v-if="!!event.cover"
                  :href="`https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
                  data-nice="gallery"
                  >
                  <img
                     class="event__cover"
                     :src="`https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/${event.cover}`"
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
   import admin from '../components/widgets/Admin.vue';

   export default {
      components: {
         photoGallery,
         admin,
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
         }
      },

      methods: {
         openLink(attachment) {
            let url = attachment.type == 'link' ? attachment.path : `https://old.доммолодежи.рф/public/attachments/${event.id}/${attachment.path}`;
            window.open(url, '_blank');
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

      &__link {
         text-decoration: underline;
      }

      &__tag {
         &-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
         }
         color: #00897b;
         background-color: #E0F2F1;
         margin: 6px 12px 6px 0;
         padding: 6px;
         font-size: 14px;
         cursor: pointer;
         text-decoration: none;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;

         &:hover {
            background-color: #c8e0df;
         }
      }
   }
</style>
