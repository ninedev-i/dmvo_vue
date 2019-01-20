<template>
   <div>
      <div class="padding20 container-whiteBg">
         <h1>{{page.title}}</h1>
         <div v-html="page.content"></div>
      </div>
   </div>
</template>
<script>
   export default {
      title () {
         return this.page.title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPage', {id: 19});
      },

      computed: {
         page() {
            return this.$store.state.page;
         }
      }
   };
</script>
