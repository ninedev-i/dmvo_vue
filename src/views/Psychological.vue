<template>
   <div>
      <article>
         <div class="padding-20 background-white">
            <h1>{{page.title}}</h1>
            <div v-html="page.description"></div>
         </div>

         <h3 class="padding-20">Направления работы</h3>
         <div class="psychological__directions">
            <div>Психологическое консультирование</div>
            <div>Групповые формы работы</div>
            <div>Профориентация и диагностика</div>
            <div>Тренинги</div>
         </div>
      </article>

      <aside>
         <div class="sidebar">
            <!-- <div id="vk_groups"></div> -->
            <div class="button-blue">Записаться на прием</div>
            <h3 class="padding-20">Наши специалисты:</h3>
            <div v-for="specialist in page.people" class="psychological__specialist">
               <b>{{specialist.name}}</b>
               <div class="">
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="psychological__specialist-photo"
                     :title="specialist.name"
                     :alt="specialist.name"
                  />
                  <!-- <p>{{specialist.info}}</p> -->
                  заведующая отделом<br>часы приёма:<br>вт 16:00-18:00, чт 9:00 - 11:00
               </div>
            </div>
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

      // mounted() {
      //    if (VK) {
      //       VK.Widgets.Group('vk_groups', {mode: 3, width: '300', height: '400', color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6', redesign: 1}, 123029997);
      //    }
      // },

      computed: {
         page() {
            return this.$store.state.psychological;
         }
      }
   };
</script>
<style lang="less">
   .psychological {
      &__specialist {
         display: flex;
         flex-grow: 1;
         flex-direction: column;
         background-color: white;
         padding: 10px 20px 15px;
         margin-bottom: 12px;

         &-photo {
            display: block;
            float: left;
            height: 120px;
            margin-right: 12px;
         }
      }

      &__directions {
         display: flex;
      }
   }
</style>
