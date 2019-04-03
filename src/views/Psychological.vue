<template>
   <div>
      <article>
         <div class="background-white">
            <div class="psychological__contentContainer padding-20">
               <h1>{{page.title}}</h1>
               <div v-html="page.description"></div>
            </div>
            <eventsList title="Ближайшие мероприятия" titleTag="h3" type="psychological_closestEvents" data-server-rendered="true" />
         </div>

         <h3 class="padding-20">Направления работы</h3>
         <div class="psychological__directions">
            <div class="psychological__directions-item padding-20 background-white">
                <b>Консультирование</b>
                <div class="">
                   Оказание психологом помощи людям, которые нуждаются в ней, испытывают трудности с самоопределением, с отношениями в семье, со сверстниками, страдают от неуверенности в себе, переживаний обиды, гнева, апатии, испытывают зависимость от чего-либо.
                </div>
            </div>
            <div class="psychological__directions-item padding-20 background-white">
               <b>Групповые формы работы</b>
               <div class="">
                  Особое направление в консультировании, которое часто оказывается эффективным средством помощи в решении личностных и межличностных проблем. Групповое взаимодействие весьма важно для самовыражения личности.
               </div>
            </div>
            <div class="psychological__directions-item padding-20 background-white">
               <b>Профориентация и диагностика</b>
               <div class="">
                  Программа профориентации создана для подростков и молодёжи. Она помогает понять, кем ты хочешь быть, какие у вас есть склонности, способности, интересы. Вы сможете ответить себе на вопрос - как сделать самостоятельный осознанный правильный выбор.
               </div>
           </div>
            <div class="psychological__directions-item padding-20 background-white">
               <b>Тренинги</b>
               <div class="">
                  Тренинг – это активная форма работы, направленная на изменение мировоззрения, поведения, способа самовыражения посредством разыгрывания социальных ситуаций, выполнения упражнений с последующим анализом результатов.
               </div>
           </div>
         </div>
      </article>

      <aside>
         <div class="sidebar">
            <div class="button-blue psychological__button">Записаться на прием</div>
            <h3 class="padding-12">Наши специалисты:</h3>
            <div v-for="(specialist, key) in page.people" class="psychological__specialist">
               <div>
                  <img
                     :src="'https://xn--d1aadekogaqcb.xn--p1ai/public/img/users/' + specialist.username + '.jpg'"
                     class="psychological__specialist-photo"
                     :title="specialist.name"
                     :alt="specialist.name"
                  />
                  <div class="psychological__specialist-position">
                     <b>{{specialist.name}}</b>
                     <div v-if="key === 0">Заведующая отделом</div>
                     <div v-else>{{specialist.position}}</div>
                  </div>
               </div>
            </div>
         </div>

      </aside>
   </div>
</template>
<script>
   import eventsList from '../components/events/List.vue';
   export default {
      components: {
         eventsList
      },
      title () {
         return this.page.title;
      },

      asyncData({store}) {
         return store.dispatch('getData', {name: 'psychological'});
      },

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
         padding: 15px;
         margin-bottom: 12px;

         &-position {
            text-transform: capitalize;
         }
         &-photo {
            display: block;
            float: left;
            height: 120px;
            margin-right: 12px;
         }
      }

      &__directions {
         display: flex;

         &-item {
            margin-right: 12px;
            cursor: pointer;
            &:hover {
               background-color: #e8f5f9;
               box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);
            }

            &:last-of-type {
               margin: 0px;
            }
         }
      }
   }
   @media (max-width: 450px) {
      .psychological {
         &__directions {
            flex-direction: column;
            margin-right: 0;

            &-item {
               margin: 0;
            }
         }
         &__button {
            margin: 12px;
         }
      }
   }
</style>
