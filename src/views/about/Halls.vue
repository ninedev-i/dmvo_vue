<template>
   <div>
      <article>
         <div class="padding20 container-whiteBg">
            <h1>{{page.title}}</h1>
            <div v-html="page.content"></div>
         </div>
      </article>
      <aside>
         <div class="sidebar">
            Сайдбар
         </div>
      </aside>
   </div>
</template>
<script>
   export default {
      title () {
         return this.page.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPage', {id: 22});
      },

      computed: {
         page() {
            return this.$store.state.page;
         }
      }
   };
</script>
