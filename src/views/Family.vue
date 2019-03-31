<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
            <!-- <eventsList title="Ближайшие мероприятия" titleTag="h3" type="family_closestEvents" data-server-rendered="true" /> -->
         </div>
      </article>

      <aside>
         <div class="sidebar family__sidebar">
            <widgetVk group="105742526" />

            <h3 class="padding-20">Руководитель:</h3>
            <div v-for="specialist in page.people" class="family__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="family__specialist-photo"
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
   // import eventsList from '../components/events/List.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   export default {
      components: {
         // eventsList,
         widgetVk
      },
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'family'});
      },

      computed: {
         page() {
            return this.$store.state.family;
         }
      }
   };
</script>
<style lang="less">
   .family {
      &__sidebar {
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
</style>
