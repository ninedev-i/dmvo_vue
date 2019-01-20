<template>
   <div>
      <div class="padding20 container-whiteBg pastEvents__container">
         <h1>{{$store.state.events_past_title}}</h1>

         <div v-for="(events, month) in pastEvents" class="pastEvents__month">
            <div class="pastEvents__item">
               <div class="pastEvents__line pastEvents__itemWithTitle"></div>
               <div class="pastEvents__circle pastEvents__itemWithTitle"></div>
               <div class="pastEvents__content"><h4 class="pastEvents__itemMonthTitle">{{month}}</h4></div>
            </div>
            <div v-for="event in events" class="pastEvents__item" :key="event.id">
               <router-link tag="div" v-bind:to="'/events/' + event.id" class="pastEvents__itemLink">
                  <div class="pastEvents__line"></div>
                  <div class="pastEvents__circle"></div>
                  <div class="pastEvents__content" :title="event.title">
                     <span class="pastEvents__itemDate">{{getPeriod(event.date_from, event.date_to, false)}}</span>
                     <span>{{event.title}}</span>
                  </div>
               </router-link>
            </div>
         </div>
      </div>
      <sidebar class="sidebar" />
   </div>
</template>
<script>
   import sidebar from '../components/sidebar/EventsPast.vue';
   export default {
      components: {
         sidebar
      },

      title () {
         return this.$store.state.events_past_title;
      },

      asyncData({store, route}) {
         return store.dispatch('getPastEvents');
      },

      computed: {
         pastEvents() {
            return this.$store.state.events_past;
         }
      }
   };
</script>

<style lang="stylus">
   .pastEvents__item {
      position: relative;
   }
   .pastEvents__itemLink {
      display: inline-block;
   }
   .pastEvents__line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 7px;
      border-left: 2px solid #e8e4e4;
   }
   .pastEvents__month:first-of-type .pastEvents__item:first-of-type .pastEvents__line {
      bottom: 0px;
      top: 0px;
   }
   .pastEvents__container .pastEvents__month:last-child .pastEvents__item:last-child .pastEvents__line {
      border: 0px;
   }
   .pastEvents__item:first-child .pastEvents__line {
      bottom: -10px;
      top: -7px;
   }
   .pastEvents__circle {
      position: absolute;
      left: 0;
      top: 1px;
      width: 12px;
      height: 12px;
      border: 2px solid transparent;
      border-radius: 50%;
      background-color: #fff;
      color: #1392BD;
      border-color: #1392BD;
      z-index: 2;
   }
   .pastEvents__content {
      display: flex;
      position: relative;
      top: -5px;
      padding: 0 0 8px 40px;
   }
   .pastEvents__itemLink:hover span {
      text-decoration: underline;
      cursor: pointer;
   }
   .pastEvents__itemLink:hover .pastEvents__circle {
      background: #1392bd;
   }
   .pastEvents__itemMonthTitle {
      padding: 6px 0px;
      margin: 0;
   }
   .pastEvents__itemDate {
      width: 100px;
   }
   .pastEvents__itemWithTitle {
      margin-top: 6px;
   }
</style>
