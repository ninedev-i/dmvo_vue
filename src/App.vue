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
   input {
      &[type="text"],
      &[type="number"] {
         padding: 6px;
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
      }
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
      .buttonCommon {
         color: #fff;
         padding: 12px;
         text-align: center;
         cursor: pointer;
      }
      &-blue {
         .buttonCommon;
         background-color: #1392bd;
         &:hover {
            background-color: #47b3d8;
         }
      }
      &-red {
         .buttonCommon;
         padding: 6px 12px;
         background-color: #DC3522;
         display: inline-block;

         &:hover {
            background-color: #AB291A;
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



   /* Этот блок тут временно, до тех пор пока не допилю nice-popup */
   .nice-wrapper {
      width: 100%;
      height: 100%;
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      overflow: hidden;
   }
   .nice-wrapper-background {
      opacity: 0.8;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
   }
   .nice-image {
      height: 100%;
      user-select: none;
   }
   .nice-image-container {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      z-index: 2000;
   }
   .nice-image-wrapper {
      text-align: center;
      height: 100%;
   }
   .nice-image-arrows {
      color: white;
      z-index: 2000;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
   }
   .nice-image-arrows-top {
      justify-content: center;
   }
   .nice-image-arrows-top .nice-image-arrows-left,
   .nice-image-arrows-top .nice-image-arrows-right {
      height: 36px;
      width: 46px;
      background-color: rgba(0, 0, 0, 0.1);
   }
   .nice-image-arrows-top .nice-image-arrows-left:hover,
   .nice-image-arrows-top .nice-image-arrows-right:hover {
      background-color: rgba(250, 250, 250, 0.6);
      color: black;
   }
   .nice-image-arrows-side {
      justify-content: space-between;
   }
   .nice-image-arrows-side .nice-image-arrows-left {
      height: 100vh;
      position: absolute;
      width: 100px;
      left: 0;
      z-index: 30;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
   }
   .nice-image-arrows-side .nice-image-arrows-left:hover {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
      color: white;
   }
   .nice-image-arrows-side .nice-image-arrows-right {
      height: 100vh;
      position: absolute;
      width: 100px;
      right: 0;
      z-index: 30;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
   }
   .nice-image-arrows-side .nice-image-arrows-right:hover {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
      color: white;
   }
   .nice-image-arrows-left,
   .nice-image-arrows-right {
      user-select: none;
      padding: 0 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
   }
   .nice-image-arrows-left::before {
      height: 7px;
      width: 7px;
      border-left: 2px solid;
      border-top: 2px solid;
      content: '';
      transform: rotate(-45deg);
      margin: 0 4px;
   }
   .nice-image-arrows-right::after {
      height: 7px;
      width: 7px;
      border-right: 2px solid;
      border-top: 2px solid;
      content: '';
      transform: rotate(45deg);
      margin: 0 4px;
   }
   .nice-image-arrows-left:hover,
   .nice-image-arrows-right:hover {
      cursor: pointer;
   }
   .nice-box {
      padding: 12px;
      background-color: white;
   }
   .nice-box-container {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .nice-animation-right-fadeIn {
      animation: 0.4s ease-out 0s 1 fade-In-FromRight;
   }
   .nice-animation-right-fadeOut {
      animation: 0.4s ease-out 0s 1 fade-Out-ToRight;
   }
   .nice-animation-left-fadeIn {
      animation: 0.4s ease-out 0s 1 fade-In-FromLeft;
   }
   .nice-animation-left-fadeOut {
      animation: 0.4s ease-out 0s 1 fade-Out-ToLeft;
   }
   @keyframes fade-In-FromLeft {
      0% {
         transform: translateX(-1000%);
         opacity: 0;
      }
      100% {
         transform: translateX(0);
         opacity: 1;
      }
   }
   @keyframes fade-In-FromRight {
      0% {
         transform: translateX(1000%);
         opacity: 0;
      }
      100% {
         transform: translateX(0);
         opacity: 1;
      }
   }
   @keyframes fade-Out-ToRight {
      0% {
         transform: translateX(0);
         opacity: 1;
      }
      100% {
         transform: translateX(100%);
         opacity: 0;
      }
   }
   @keyframes fade-Out-ToLeft {
      0% {
         transform: translateX(0);
         opacity: 1;
      }
      100% {
         transform: translateX(-100%);
         opacity: 0;
      }
   }

</style>
