<template>
   <div>
      <div v-if="$store.state.admin.isAdmin" class="background-white padding-20 margin-bottom-12">
         <slot></slot>
      </div>
   </div>
</template>

<script>
   export default {
      mounted() {

      }
   }
</script>

<style lang="less">

</style>