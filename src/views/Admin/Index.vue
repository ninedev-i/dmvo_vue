<template>
   <div>
      <div>
         <router-view></router-view>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'Index',
      mounted() {
         console.error(123);
      }
   }
</script>