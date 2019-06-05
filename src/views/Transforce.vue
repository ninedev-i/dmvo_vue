<template>
   <div>
      <article>
         <div class="background-white">
            <div class="padding-20">
               <h1>{{page.title}}</h1>
               <iframe
                  class="transforce__youtube"
                  width="100%"
                  frameborder="0"
                  src="https://www.youtube.com/embed/fdUSuqtskxs?controls=0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
               </iframe>
               <div v-html="page.description"></div>
            </div>
         </div>
      </article>

      <aside>
         <div class="sidebar transforce__sidebar">
            <transforceForm :shows="shows" />
            <h3 class="padding-20">Руководитель:</h3>
            <div v-for="specialist in page.people" class="transforce__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="transforce__specialist-photo"
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
   import transforceForm from '../components/forms/Transforce.vue';
   export default {
      components: {
         transforceForm
      },
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'transforce'});
      },

      computed: {
         page() {
            return this.$store.state.transforce;
         },
         shows() {
            return JSON.parse(this.page.additional);
         }
      }
   };
</script>
<style lang="less">
   .transforce {
      &__youtube {
         height: 450px;
      }
      &__table {
         border-collapse: collapse;
         width: 100%;
         border-color: #EDEFF0;

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
            vertical-align: top;
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
