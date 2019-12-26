<template>
   <div class="admin_container">
      <article>
         <div class="padding-20 background-white margin-bottom-12">
            <h1 class="edit_title">{{title}}</h1>

            <div class="admin_input__block">
               <label class="admin_input__label" for="title">Заголовок</label>
               <input type="text" class="admin_input__text" id="title" v-model="event.title" @focusout="capitilizeTitle()">
            </div>

            <div class="admin_input__block">
               <div class="admin_block admin_block__textarea">
                  <label class="admin_input__label" for="announcement">Анонс</label>
                  <div class="admin_block">
                     <span :class="`admin_input__tab ${showAnnouncementText ? '' : 'admin_input__tab-active'}`" @click="changeView('showAnnouncementText', false)">Html</span>
                     <span :class="`admin_input__tab ${showAnnouncementText ? 'admin_input__tab-active' : ''}`" @click="changeView('showAnnouncementText', true)">Текст</span>
                  </div>
               </div>
               <textarea class="admin_input__textarea" @keyup="updateHeight(['announcement', 'announcementText'])" ref="announcement" id="announcement" v-model="event.content" v-show="!showAnnouncementText"></textarea>
               <div class="admin_input__content" @focusout="updateContent('announcementText', 'content')" @keyup="updateHeight(['announcement', 'announcementText'])" v-html="event.content" ref="announcementText" v-show="showAnnouncementText" contenteditable="true"></div>
            </div>

            <div class="admin_input__block">
               <div class="admin_block admin_block__textarea">
                  <label class="admin_input__label" for="postrelease">Пост-релиз</label>
                  <div class="admin_block">
                     <span :class="`admin_input__tab ${showPostreleaseText ? '' : 'admin_input__tab-active'}`" @click="changeView('showPostreleaseText', false)">Html</span>
                     <span :class="`admin_input__tab ${showPostreleaseText ? 'admin_input__tab-active' : ''}`" @click="changeView('showPostreleaseText', true)">Текст</span>
                  </div>
               </div>
               <textarea class="admin_input__textarea" @keyup="updateHeight(['postrelease', 'postreleaseText'])" ref="postrelease" id="postrelease" v-model="event.post_reliz" v-show="!showPostreleaseText"></textarea>
               <div class="admin_input__content" @focusout="updateContent('postreleaseText', 'post_reliz')" @keyup="updateHeight(['postrelease', 'postreleaseText'])" v-html="event.post_reliz" ref="postreleaseText" v-show="showPostreleaseText" contenteditable="true"></div>
            </div>
         </div>

         <div class="admin_block event_edit__pictures">
            <img v-for="img in event.pictures" class="event_edit__img" :src="`https://old.доммолодежи.рф/public/img/${img}`" />
         </div>
      </article>

      <aside>
         <div class="sidebar">
            <div class="padding-20 background-white margin-bottom-12">
               <div @click="$emit('save')">Сохранить</div>
            </div>

            <div class="padding-20 background-white margin-bottom-12">
               <div class="admin_block">
                  <div class="admin_input__block">
                     <label class="admin_input__label" for="date_from">Начало</label>
                     <input type="date" class="admin_input__date" id="date_from" v-model="event.date_from">
                  </div>
                  <div class="admin_input__block">
                     <label class="admin_input__label" for="date_to">Конец</label>
                     <input type="date" class="admin_input__date" id="date_to" v-model="event.date_to">
                  </div>
               </div>

               <div class="admin_input__block">
                  <label class="admin_input__label" for="time">Время</label>
                  <input type="time" class="admin_input__time" id="time" v-model="event.time">
               </div>
            </div>

            <div class="padding-20 background-white margin-bottom-12">
               <div class="admin_input__block">
                  <label for="cover" class="admin_input__label">Афиша</label>
                  <input type="file" id="cover" class="admin_input__file" />
               </div>
            </div>

            <div class="padding-20 background-white margin-bottom-12">
               <attachments :list="event.attachments"></attachments>
            </div>
         </div>
      </aside>
      <!--<button @click="pasteFromBuffer()">Обработать</button>
      <textarea type="text" v-model="text" class="textarea" />
      <p>Время: <input type="time" v-model="time" /></p>
      <p>Дата с: <input type="date" v-model="date_from" /></p>
      <p>Дата по: <input type="date" v-model="date_to" /></p>-->
   </div>
</template>

<script>
   import attachments from './attachments.vue';
   export default {
      props: [
         'title',
         'event'
      ],

      components: {
         attachments,
      },

      data() {
         return {
            showAnnouncementText: true,
            showPostreleaseText: true,
            date_from: '',
            date_to: '',
            time: '',
            // С 5 мая 2019 года в 2:45
            text: `14 октября 2019  года проходят конкурсные отборы регионального музыкального конкурса «Универвидение» Санкт-Петербурга.`
         }
      },

      mounted() {
         // this.pasteFromBuffer();

         this.updateHeight(['announcement', 'announcementText', 'postrelease', 'postreleaseText']);

      },

      methods: {
         updateHeight(areas) {
            areas.forEach(item => {
               this.$refs[item].style.minHeight = '0px';
               this.$refs[item].style.minHeight  = `${this.$refs[item].scrollHeight - 10}px`;
            });
         },

         updateContent(input, field) {
            this.updateHeight(['announcement', 'announcementText', 'postrelease', 'postreleaseText']);
            this.event[field] = this.$refs[input].innerHTML;
         },

         changeView(item, value) {
            this[item] = value;

            setTimeout(() => {
               this.updateHeight(['announcement', 'announcementText', 'postrelease', 'postreleaseText']);
            }, 1);
         },

         capitilizeTitle() {
            let title = this.event.title.trim();
            title = title.charAt(0).toUpperCase() + title.slice(1);
            this.event.title = title;
         },

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
   @import '../../util/admin';

   .event_edit {
      &__pictures {
         width: 100%;
         overflow: hidden;
      }
      &__img {
         height: 160px;
         margin-right: 12px;
      }
   }
   .textarea {
      width: 100%;
      height: 80px;
   }
</style>