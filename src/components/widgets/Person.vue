<template>
   <div class="background-white padding-20 margin-bottom-12">
      <div v-for="specialist in specialists" class="widget-person">
         <b>{{specialist.name}}</b>
         <div class="">
            <img
               :src="'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
               class="widget-person__photo"
               :title="specialist.name"
               :alt="specialist.name"
            />
            <div v-if="showPhone"><b>Телефон: </b><a :href="`tel:${specialist.phone}`">{{specialist.phone}}</a></div>
            <div v-if="showEmail"><b>E-mail: </b><a :href="`mailto:${specialist.email}?subject=Письмо с сайта`">{{specialist.email}}</a></div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
      props: {
         specialists: Array,
         phone: String,
         showPhone: {
            type: Boolean,
            default: true
         },
         showEmail: {
            type: Boolean,
            default: false
         }
      }
   }
</script>
<style lang="less">
   .widget-person {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      background-color: white;
      margin-bottom: 12px;

      &__photo {
         width: 100%;
         margin: 10px 0 0;
      }
   }
</style>
