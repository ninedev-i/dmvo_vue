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
   h2.padding20, h3.padding20 {
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
   #app {
      height: 100%;
      width: 100%;
      display: flex;
   }
   .container {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      // padding: 15px 0px;
      padding: 15px;
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
   article {
      width: 100%;
   }
   aside {
      // right: 0px;
      // top: 0px;
      width: 320px;
      min-width: 320px;
      margin-left: 16px;
      // margin: 16px;
      // position: fixed;
   }
   .sidebar {
      position: fixed
      // padding: 16px;
      // background-color: white;
      // width: calc(100% - 132px);
      width: inherit;
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
