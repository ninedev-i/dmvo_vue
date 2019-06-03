<template>
   <div>
      <a class="button-blue" data-nice="inline" href="#psyForm">Записаться на прием</a>

      <div id="psyForm" class="hidden" v-on:click.self.prevent>
         <div>
            <form method="POST" action="" class="form-psy">
               <div class="form-psy__block-right">
                  <b class="form-psy__title">Направление работы</b>
                  <!--<radioButtons :data="eventTypes" :selectedItem="eventType" v-on:changeSelectedItem="changeSelectedItem" />-->
                  <span v-for="type in eventTypes">
                     <input name="choice" type="radio" :id="type.id" :value="type.id" v-model="direction" :key="`direction_${type.id}`"><label :for="type.id">{{type.caption}}</label>
                  </span>
                  <b class="form-psy__title">Специалист</b>
                  <span><input name="specialist" type="radio" id="defaultVal" value="Не имеет значения" v-model="specialist"><label for="defaultVal">Не имеет значения</label></span>
                  <span v-for="(specialist, id) in specialists">
                     <input name="specialist" type="radio" :id="`spec_${id}`" :value="specialist.name" :key="`specialist_${id}`"><label :for="`spec_${id}`">{{specialist.name}}</label>
                  </span>
               </div>

               <div class="form-psy__block-left">
                  <b class="form-psy__title">Ваши контактные данные</b>
                  <input required="required" name="name" type="text" id="name" placeholder="Ваше имя" autofocus />
                  <span>
                  <input required="required" name="email" type="email" id="email" placeholder="E-mail" />
                  <input required="required" name="phone" type="text" id="phone" placeholder="Телефон" />
               </span>
                  <input required="required" name="age" type="text" id="age" placeholder="Возраст (от 14 до 30 лет)" />
                  <input required="required" name="date" type="text" id="date" placeholder="Удобная дата и время консультации">
                  <textarea required="required" name="textmessage" cols="40" rows="3" id="textmessage" placeholder="Комментарий"></textarea>

                  <div class="button-blue">Записаться</div>
               </div>
            </form>
         </div>

      </div>
   </div>
</template>

<script>
   import {NicePopup} from 'nice-popup';
   // import radioButtons from '../../components/RadioButtons.vue';

   export default {
      // components: {
      //    radioButtons
      // },
      data() {
        return {
           direction: 'consult',
           specialist: 'Не имеет значения',

           eventType: 'all',
           eventTypes: [
              {id: 'consult', caption: 'Психологическое консультирование'},
              {id: 'group', caption: 'Групповые формы работы'},
              {id: 'prof', caption: 'Профориентация и диагностика'},
              {id: 'training', caption: 'Тренинги'}
           ]
        }
      },
      props: {
         specialists: Array
      },
      mounted() {
         new NicePopup();
      },
      methods: {
         changeSelectedItem(id) {
            this.eventType = id;
         }
      }
   }
</script>

<style lang="less">
   .form-psy {
      display: flex;
      flex-direction: row;

      input,
      textarea,
      select {
         margin-bottom: 12px;
      }

      &__block-left {
         padding: 20px;
         display: flex;
         flex-direction: column;

         span {
            input:nth-child(1) {
               margin-right: 12px;
            }
         }
      }
      &__block-right {
         background-color: #44C7F5;
         background: linear-gradient(-29deg, #05f3ff 0%, #76ffb3 100%);
         padding: 20px;
         display: flex;
         flex-direction: column;
      }

      &__title {
         margin-bottom: 12px;
         font-size: 18px;
         text-align: center;
      }
   }
</style>
