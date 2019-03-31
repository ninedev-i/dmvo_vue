import Vue from 'vue';

Vue.mixin({
   methods: {
      getPeriod(from, to, withMonth, withMonthName) {
         from = new Date(from);
         to = new Date(to);
         const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
         let
            monthFrom = withMonthName ? ' ' + MONTHS[from.getMonth()] : '.' + (from.getMonth() + 1),
            monthTo = withMonthName ? ' ' + MONTHS[to.getMonth()] : '.' + (to.getMonth() + 1);

         if (from.toJSON() === to.toJSON()) {
            return from.getDate() + (withMonth ? monthFrom : '');
         } else if (from.getMonth() === to.getMonth()) {
            return from.getDate() + ' – ' + to.getDate() + (withMonth ? monthTo : '');
         } else {
            return from.getDate() + monthFrom + ' – ' + to.getDate() + monthTo;
         }
      }
   }
})
