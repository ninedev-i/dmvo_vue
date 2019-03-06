<template>
   <div>
      <h2 class="padding-20" v-if="closestEvents.length && titleTag === 'h2'">{{title}}</h2>
      <h3 class="padding-20" v-else-if="closestEvents.length && titleTag === 'h3'">{{title}}</h3>
      <ul class="events-list">
         <li v-for="item in closestEvents" :key="item.id">
            <router-link v-bind:to="'events/' + item.id">
               <span class="events-list__period">
                  {{getPeriod(item.date_from, item.date_to, true, true)}}<span v-if="item.what_time">, {{item.what_time}}</span>
               </span>
               <span class="events-list__title">{{item.title}}</span>
            </router-link>
         </li>
      </ul>
   </div>
</template>
<script>
   export default {
      props: [
         'title',
         'titleTag',
         'type'
      ],

      computed: {
         closestEvents() {
            return this.$store.state[this.type];
         }
      }
   };
</script>
<style lang="less">
   .events-list {
      li {
         list-style: none;
         border-bottom: 1px solid #EDEFF0;
         margin-left: 0px;

         &:last-of-type {
            border-bottom: 0px;
         }
         &:hover {
            background-color: #e8f5f9;
         }

         & a {
            padding: 10px 20px 10px 20px;
            text-decoration: none;
            display: flex;
         }
      }

      &__period {
         width: 220px;
         display: inline-block;
      }

      &__title {
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
      }
   }

   @media (max-width: 450px) {
      .events-list__period {
         display: block;
         font-weight: bold;
      }
   }
</style>
