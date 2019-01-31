<template>
   <div>
      <article class="padding20 container-whiteBg">
         <h1>{{page.title}}</h1>
         <div v-html="page.description"></div>
      </article>

      <aside>
         <div class="sidebar">
            <!-- <div id="vk_groups"></div> -->
            <div class="psychological__signUpButton">Записаться на прием</div>
            <h3 class="padding20">Наши специалисты:</h3>
            <div v-for="specialist in page.people" class="psychological__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="psychological__specialistPhoto"
                     :title="specialist.name"
                     :alt="specialist.name"
                  />
                  <!-- <p>{{specialist.info}}</p> -->
                  заведующая отделом<br>часы приёма:<br>вт 16:00-18:00, чт 9:00 - 11:00
               </div>
            </div>
            <!-- <h3>Направления работы</h3>
            <div class="psychological__directions">
               <li>Психологическое консультирование</li>
               <li>Групповые формы работы</li>
               <li>Профориентация и диагностика</li>
               <li>Тренинги</li>
            </div> -->
         </div>

      </aside>
   </div>
</template>
<script>
   export default {
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getPsychological');
      },

      mounted() {
         if (VK) {
            VK.Widgets.Group('vk_groups', {mode: 3, width: '300', height: '400', color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6', redesign: 1}, 123029997);
         }
      },

      computed: {
         page() {
            return this.$store.state.psychological;
         }
      }
   };
</script>
<style lang="stylus">
   .psychological__signUpButton {
      background-color: #1392BD;
      color: white;
      padding: 12px;
      text-align: center;
      cursor: pointer;
   }
   .psychological__specialist {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      background-color: white;
      padding: 10px 20px 20px;
      margin-bottom: 12px;

   }
   .psychological__specialist:last-of-type {
      margin-right: 0;
   }
   img.psychological__specialistPhoto {
      display: block;
      float: left;
      height: 120px;
      margin-right: 12px;
   }

   .psychological__directions li {
      list-style: none;
      background-color: #1392BD;
      color: white;
      padding: 5px;
      margin-bottom: 5px;
   }
</style>
