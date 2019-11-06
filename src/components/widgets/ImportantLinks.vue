<template>
   <div class="widget-importantLinks background-white padding-20 margin-bottom-12">
      <b>Важные ссылки:</b>
      <a v-for="item in items" :href="item.url" rel="nofollow" target="blank" :title="item.title" :alt="item.title">
         <img v-if="item.img" :src="item.img" :alt="item.title">
         <div v-else-if="item.boardFilter" class="button-gray" @click="goToBoard(item.boardFilter)">{{item.title}}</div>
      </a>
   </div>
</template>
<script>
   export default {
      data () {
         return {
            items: [
               {
                  title: 'Администрация Василеостровского района',
                  url: 'https://voadm.spb.ru/',
                  img: 'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/admvo.jpg'
               },
               {
                  title: 'Комитет по молодежной политике',
                  url: 'https://gov.spb.ru/gov/otrasl/kpmp/',
                  img: 'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/commol.jpg'
               },
               {
                  title: 'Проект «Твой Бюджет»',
                  url: 'https://tvoybudget.spb.ru/',
                  img: 'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/budget.jpg'
               },
               {
                  title: 'Специальная линия «Нет коррупции!»',
                  url: 'https://zakon.gov.spb.ru/hot_line/',
                  img: 'https://old.xn--d1aadekogaqcb.xn--p1ai/public/img/corrupt.jpg'
               },
               {
                  title: 'Профилактика экстремизма',
                  boardFilter: 'extremism',
               },
               {
                  title: 'Противодействие коррупции',
                  boardFilter: 'corruption'
               }
            ]
         };
      },

      methods: {
         goToBoard(filter) {
            this.$store.commit('changeBoardFilter', filter);
            this.$router.push('board');
         }
      }
   }
</script>
<style lang="less">
   .widget-importantLinks {
      a {
         display: block;
         margin-top: 6px;
         border-bottom: 1px solid #F5F5F5;

         &:first-of-type {
            margin-top: 0;
         }
         &:last-of-type {
            border: 0;
         }
      }
   }
</style>
