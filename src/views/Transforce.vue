<template>
   <layout :padding="20" sidebarClass="transforce__sidebar">
      <template #pageContent>
         <h1>{{page.title}}</h1>
         <iframe
            class="transforce__youtube"
            width="100%"
            src="https://www.youtube.com/embed/fdUSuqtskxs?controls=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
         <div v-html="page.description"></div>
      </template>

      <template #bottomContent>
         <news title="Архив мероприятий" v-bind:showText="false" directionTag="transforce" data-server-rendered="true" />
      </template>

      <template #sidebar>
         <transforceForm :shows="shows" />
         <h3 class="padding-20">Сотрудники:</h3>
         <person :specialists="page.people" :isSmall="true" :showPhone="true" />
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';
   import news from '../components/events/News.vue';
   import transforceForm from '../components/forms/Transforce.vue';
   import person from '../components/widgets/Person.vue';

   export default {
      components: {
         layout,
         news,
         transforceForm,
         person
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
         border: 0;
      }
      &__box {
         max-width: 60%;
         padding: 12px;
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
   }
</style>
