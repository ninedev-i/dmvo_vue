<template>
   <div>
      <button @click="pasteFromBuffer()">Обработать</button>
      <textarea type="text" v-model="text" class="textarea" />
      <p>Время: <input type="time" v-model="time" /></p>
      <p>Дата с: <input type="date" v-model="date_from" /></p>
      <p>Дата по: <input type="date" v-model="date_to" /></p>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            date_from: '',
            date_to: '',
            time: '',
            // С 5 мая 2019 года в 2:45
            text: `14 октября 2019  года проходят конкурсные отборы регионального музыкального конкурса «Универвидение» Санкт-Петербурга.`
         }
      },

      mounted() {
         this.pasteFromBuffer();

      },

      methods: {
         pasteFromBuffer() {
            let input = this.text.split('.')[0];

            this.time = this.getTime(input.match(/.* (\d?\d:\d+).*/i));

            // || /\d*\s?\-\s?\d*/.test(input)
            if (/ по /.test(input)) {
               input = input.match(/(.*) по (.*)/i); // || input.match(/(\d*)\s?[\-|–|—]\s?(.*)/i)
               const dateFirstPart = input[1].match(/.*? (\d*)\s?([а-я]+)?\s?(\d+)?/i) || [input, input[1], null, null];
               const dateSecondPart = input[2].match(/(\d*) ([а-я]+) (\d+)/i);
               this.date_from = this.getDate(dateFirstPart[3] || dateSecondPart[3], dateFirstPart[2] || dateSecondPart[2], dateFirstPart[1]);
               this.date_to = this.getDate(dateSecondPart[3], dateSecondPart[2], dateSecondPart[1]);
            } else {
               input = input.match(/(\d*) ([а-я]+) (\d+)?/i);
               this.date_from = this.getDate(input[3], input[2], input[1]);
               this.date_to = this.date_from;
            }
         },

         getTime(time) {
            time = time && time.length >=1 ? time[1] : null;
            time = time && time.length === 4 ? '0' + time : time;
            return time;
         },

         getDate(stringYear, stringMonth, stringDay) {
            const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
            stringMonth = months.indexOf(stringMonth.trim()) + 1;

            return this.formatDate(stringYear, stringMonth, stringDay);
         },

         formatDate(year, month, day) {
            year = year || new Date().getFullYear();
            return `${year}-${this.editNumber(month)}-${this.editNumber(day)}`;
         },

         editNumber(number) {
            return number <= 9 ? '0' + number : number;
         }
      }
   }
</script>

<style lang="less">
   .textarea {
      width: 100%;
      height: 80px;
   }
</style>