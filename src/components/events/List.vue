<template>
   <div>
      <h2 class="padding-20" v-if="closestEvents.length">{{title}}</h2>
      <ul class="events-list">
         <li v-for="item in closestEvents">
            <router-link v-bind:to="'events/' + item.id">
               <span class="events-list__period">
                  {{getPeriod(item.date_from, item.date_to, true)}}<span v-if="item.what_time">, {{item.what_time}}</span>
               </span>
               {{item.title}}
            </router-link>
         </li>
      </ul>
   </div>
</template>
<script>
   export default {
      props: [
         'title',
         'type'
      ],

      computed: {
         closestEvents() {
            return this.$store.state[this.type];
         }
      }
   };
</script>
<style lang="stylus">
   .events-list li {
      list-style: none;
      border-bottom: 1px solid #EDEFF0;
      margin-left: 0px;
   }
   .events-list li:last-of-type {
      border-bottom: 0px;
   }
   .events-list li:hover {
      background-color: #e8f5f9;
   }
   .events-list li a {
      padding: 10px 20px 10px 20px;
      text-decoration: none;
      display: block;
   }
   .events-list__period {
      width: 220px;
      display: inline-block;
   }
</style>
