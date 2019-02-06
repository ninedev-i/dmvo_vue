<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
            <!-- <eventsList title="Ближайшие мероприятия" titleTag="h3" type="volunteer_closestEvents" data-server-rendered="true" /> -->
         </div>
      </article>

      <aside>
         <div class="sidebar volunteer__sidebar">
            <div class="button-blue">Напиши нам</div>

            <widgetVk group="145772884" />

            <h3 class="padding-20">Руководитель:</h3>
            <div v-for="specialist in page.people" class="volunteer__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
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
         return store.dispatch('getVolunteer');
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
         & .button-blue {
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
</style>
