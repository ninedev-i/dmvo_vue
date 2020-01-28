<template>
   <layout :padding="20" sidebarClass="volunteer__sidebar">
      <template #pageContent>
         <h1>Страница заглушка</h1>
         <p>Тут пока ничего нет</p>
      </template>

      <template #sidebar>
         Сайдбар
      </template>
   </layout>
</template>

<script>
   import layout from '../components/Layout.vue';
   export default {
      components: {
         layout,
      }
   }
</script>