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
<style lang="stylus">
   @import url('https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif');
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
   h2.padding20 {
      padding: 5px 20px;
      margin: 10px 0px;
   }
   ul {
      margin: 0px;
      padding: 0px;
   }
   a {
      color: #384047;
   }
   #app {
      height: 100%;
   }
   .container {
      width: calc(100% - 660px);
      margin: 0px 15px 0px 275px;
      padding: 15px 0px;
      font-family: 'PT Serif', serif;
      font-size: 18px;
      line-height: 1.5em;
   }
   .container-whiteBg {
      background-color: white;
   }
   .padding20 {
      padding: 10px 20px;
   }
   .sidebar {
      right: 0px;
      top: 0px;
      width: 321px;
      margin: 16px;
      position: fixed;
   }

   .fade-enter-active,
   .fade-leave-active {
      transition: all .2s ease;
   }
   .fade-enter,
   .fade-leave-active {
      opacity: 0;
   }
</style>
