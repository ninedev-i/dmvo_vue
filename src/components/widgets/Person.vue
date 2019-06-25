<template>
   <div class="background-white padding-20 margin-bottom-12 background-link">
      <a v-for="specialist in specialists" class="widget-person" data-nice="inline" href="#widgetPerson">
         <div v-on:click="getUserInfo(specialist.id)">
            <b>{{specialist.name}}</b>
            <div>
               <img
                  :src="'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                  class="widget-person__photo"
                  :title="specialist.name"
                  :alt="specialist.name"
               />
               <div v-if="showPhone"><b>Телефон: </b><a :href="`tel:${specialist.phone}`" v-on:click="phoneCall(specialist.phone)">{{specialist.phone}}</a></div>
               <div v-if="showEmail"><b>E-mail: </b><a :href="`mailto:${specialist.email}?subject=Письмо с сайта`" v-on:click="textMessage(specialist.email)">{{specialist.email}}</a></div>
            </div>
         </div>
      </a>
      <div id="widgetPerson" class="hidden">
         <div class="widget-person__popup">
            <div class="container-scroll">
               <img
                  :src="'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + userData.username + '.jpg'"
                  class="widget-person__popup-photo"
                  :title="userData.name"
                  :alt="userData.name"
               />
               <h3>{{userData.name}}</h3>
               <p><b>{{userData.position}}</b></p>
               <div v-if="userData.studios.length">
                  <span><b>Руководитель студий: </b></span>
                  <span v-for="(studio, i) in userData.studios">
                     <router-link :to="{ path: `/studio/${studio.shortname}`}" append tag="a">{{studio.studio_name}}</router-link>
                     <span v-if="i !== userData.studios.length - 1">, </span>
                  </span>
               </div>
               <div v-if="userData.phone"><b>Телефон: </b><a :href="`tel:${userData.phone}`" v-on:click="phoneCall(userData.phone)">{{userData.phone}}</a></div>
               <div v-if="userData.email"><b>E-mail: </b><a :href="`mailto:${userData.email}?subject=Письмо с сайта`" v-on:click="textMessage(userData.email)">{{userData.email}}</a></div>
               <div v-html="userData.bio"></div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import {NicePopup} from 'nice-popup';
   import axios from 'axios';

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
      },

      data() {
        return {
           userData : {
              name: '',
              username: '',
              info: '',
              phone: '',
              position: '',
              email: '',
              bio: '',
              studios: []
           }
        }
      },

      mounted() {
         new NicePopup();
      },

      methods: {
         getUserInfo(id) {
            axios.get(`${this.$store.state.apiHost}/get_user_info/${id}`).then(response => {
               this.userData = response.data;
            });
         },

         phoneCall(phone) {
            window.location.href = `tel:${phone}`;
         },

         textMessage(email) {
            window.location.href = `mailto:${email}?subject=Письмо с сайта`;
         }
      }
   }
</script>
<style lang="less">
   .widget-person {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      margin-bottom: 12px;
      text-decoration: none;
      &:hover {
         color: inherit;
      }

      &__popup {
         width: 50%;
         max-height: 80%;
         z-index: 1000;
         display: flex;
         padding: 20px 0 20px 20px;

         h3 {
            margin-top: 0;
         }
         &-photo {
            width: 400px;
            float: right;
            margin-right: 20px;
            padding-left: 12px;
         }
      }
      &__photo {
         width: 100%;
         margin: 10px 0 0;
      }
   }
</style>
