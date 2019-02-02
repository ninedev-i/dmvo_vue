<template>
   <div>
      <article class="padding-20 background-white">
         <h1>{{event.title}}</h1>
         <div v-html="event.content"></div>
         <!-- <img :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.pictures[0]" :alt="event.title" :title="event.title"> -->
      </article>
      <aside>
         <div class="sidebar background-white">
            <div class="padding-20">
               <div class="margin-bottom-12">
                  <b v-if="event.date_from === event.date_to">Дата:</b>
                  <b v-else="event.date_from === event.date_to">Даты:</b>
                  {{getPeriod(event.date_from, event.date_to, true)}}
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
               <img
                  class="event__cover"
                  v-if="!!event.cover"
                  :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/' + event.cover"
                  :alt="event.title"
                  :title="event.title"
               />
            </div>
         </div>
      </aside>
   </div>
</template>
<script>
   export default {
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
            let tags = this.$store.state.event.tags
            return tags.split(' ');
         }
      }
   };
</script>
<style lang="less">
   .event {
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
