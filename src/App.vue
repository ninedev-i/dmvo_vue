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
      },

      beforeCreate() {
         this.$store.getters.isAuthenticated;
      }
   };
</script>
<style lang="less">
   @import (css) url('https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif');
   @import '~nice-popup/dist/app.css';

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
   h2, h3 {
      &.padding-20 {
         padding: 5px 20px;
         margin: 10px 0px;
      }
      &.padding-12 {
         padding: 5px 12px;
         margin: 0;
      }
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
      &:hover {
         color: #1392BD;
      }
   }
   p {
      margin: 10px 0;
   }
   address {
      font-style: normal;
   }
   input[type="radio"] {
      cursor: pointer;
   }
   label {
      cursor: pointer;
      &::selection {
         background-color: transparent;
      }
   }
   .input() {
      padding: 6px;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      border: 1px solid #ccc;
   }
   textarea,
   select,
   button {
      .input();
   }
   input {
      &[type="text"],
      &[type="email"],
      &[type="number"] {
         .input();
      }
   }
   b.title {
      font-family: 'Open Sans', sans-serif;
   }

   // Контейнер
   #app {
      width: 100%;
      display: flex;
      overflow-x: hidden;
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

      &-scroll {
         max-height: 100%;
         width: 100%;
         z-index: 1000;
         overflow-x: hidden;
         overflow-y: auto;
      }
   }
   article {
      width: 100%;
      min-width: 1px;
   }

   // Общие классы
   .hidden {
      display: none;
   }
   .background {
      &-white {
         background-color: white;
      }
      &-link {
         &:hover {
            cursor: pointer;
            background-color: #e8f5f9;
            box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
         }
      }
   }
   .margin {
      &-bottom {
         &-6 {
            margin-bottom: 6px;
         }
         &-12 {
            margin-bottom: 12px;
         }
      }
      &-top {
         &-6 {
            margin-top: 6px;
         }
         &-12 {
            margin-top: 12px;
         }
      }
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
      .buttonCommon {
         color: #fff;
         padding: 12px;
         text-align: center;
         cursor: pointer;
         text-decoration: none;
         display: block;
      }
      &-blue {
         .buttonCommon;
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
         background-color: #1392bd;
         &:hover {
            background-color: #47b3d8;
            color: white;
         }
      }
      &-red {
         .buttonCommon;
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
         padding: 6px 12px;
         background-color: #DC3522;
         display: inline-block;

         &:hover {
            background-color: #AB291A;
         }
      }
   }
   .notValide {
      border: 1px solid #ffa3a3;
      background-color: #ffe8e8;
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


   @media (max-width: 450px) {
      body, html {
         background-color: #fff;
      }
      h1 {
         line-height: 1em;
         font-size: 1.4em;
         margin-bottom: 10px;
         padding-top: 0 !important;
      }
      .container {
         margin-top: 100px;
         flex-direction: column;
         padding: 0;
      }
      aside {
         width: auto;
         min-width: auto;
         margin: 12px 0 0;
      }
      .sidebar {
         position: relative;
         padding: 0;
      }
   }
</style>
