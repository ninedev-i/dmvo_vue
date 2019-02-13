<template>
   <div id="app" data-server-rendered="true">
      <sidebarMenu />
      <transition name="fade" mode="out-in">
         <router-view class="container" :key="$route.fullPath" />
      </transition>
   </div>
</template>
<script>
   import sidebarMenu from './components/Menu.vue';
   export default {
      components: {
         sidebarMenu
      }
   };
</script>
<style lang="less">
   @import (css) url('https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif');
   html, body {
      padding: 0;
      margin: 0;
      display: block;
      height: 100%;
      width: 100%;
      background-color: #F5F5F5;
      font-family: 'Open Sans', sans-serif;
      color: #384047;
   }
   h1, h2, h3 {
      font-family: 'Open Sans', sans-serif;
   }
   h1 {
      margin-top: 0px;
      font-size: 34px;
      padding-top: 16px !important;
   }
   h2 {
      margin: 15px 0px;
   }
   h2.padding-20, h3.padding-20 {
      padding: 5px 20px;
      margin: 10px 0px;
   }
   ul {
      margin: 0px;
      padding: 0px;
   }
   ul li {
      margin-left: 20px;
   }
   a {
      color: #384047;
   }
   p {
      margin: 10px 0;
   }
   address {
      font-style: normal;
   }

   // Контейнер
   #app {
      width: 100%;
      display: flex;
   }
   .container {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      min-width: 1px;
      padding: 15px;
      line-height: 1.5em;
      font-family: 'PT Serif', serif;
      font-size: 18px;
   }
   article {
      width: 100%;
      min-width: 1px;
   }

   // Общие классы
   .background-white {
      background-color: white;
   }
   .margin-bottom-12 {
      margin-bottom: 12px;
   }
   .padding {
      &-6 {
         padding: 6px !important;
      }
      &-12 {
         padding: 12px !important;
      }
      &-20 {
         padding: 10px 20px;
      }
   }
   .button {
      &-blue {
         background-color: #1392bd;
         color: #fff;
         padding: 12px;
         text-align: center;
         cursor: pointer;

         &:hover {
            background-color: #47b3d8;
         }
      }
   }

   // Сайдбар
   aside {
      width: 320px;
      min-width: 320px;
      margin-left: 16px;
   }
   .sidebar {
      position: fixed;
      width: inherit;
   }

   // Переходы между страницами
   // .fade {
   //    &-enter {
   //       opacity: 0;
   //       &-active {
   //          transition: all .2s ease;
   //       }
   //    }
   //    &-leave-active {
   //       opacity: 0;
   //       transition: all .2s ease;
   //    }
   // }

   @media (max-width: 450px) {
      h1 {
         line-height: 1em;
         font-size: 1.4em;
         margin-bottom: 10px;
         padding-top: 0 !important;
      }
      .container {
         flex-direction: column;
         padding: 0;
      }
      aside {
         width: auto;
         margin: 12px 0 0;
      }
      .sidebar {
         position: relative;
         padding: 0;
      }
   }
</style>
