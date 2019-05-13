<template>
   <div>
      <a class="button-blue" data-nice="inline" href="#psyForm">Записаться на прием</a>

      <div id="psyForm" class="hidden">
         <form method="POST" action="" class="form-psy">
            <div class="form-psy__block-right">
               <b class="form-psy__title">Направление работы</b>
               <span><input name="choice" type="radio" id="consult" value="Психологическое консультирование" v-model="direction" /><label for="consult">Психологическое консультирование</label></span>
               <span><input name="choice" type="radio" id="group" value="Групповые формы работы" v-model="direction" /><label for="group">Групповые формы работы</label></span>
               <span><input name="choice" type="radio" id="prof" value="Профориентация и диагностика" v-model="direction" /><label for="prof">Профориентация и диагностика</label></span>
               <span><input name="choice" type="radio" id="training" value="Тренинги" v-model="direction" /><label for="training">Тренинги</label></span>
               <b class="form-psy__title">Специалист</b>
               <span><input name="specialist" type="radio" id="defaultVal" value="Не имеет значения" v-model="specialist" /><label for="defaultVal">Не имеет значения</label></span>
               <span v-for="(specialist, id) in specialists">
                  <input name="specialist" type="radio" :id="`spec_${id}`" :value="specialist.name" /><label :for="`spec_${id}`">{{specialist.name}}</label>
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
</template>

<script>
   import {NicePopup} from 'nice-popup';

   export default {
      data() {
        return {
           direction: 'Психологическое консультирование',
           specialist: 'Не имеет значения'
        }
      },
      props: {
         specialists: Array
      },
      mounted() {
         new NicePopup();
      }
   }
</script>

<style lang="less">
   /* Временное решение */
   .nice-box {
      padding: 0;
   }
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

         span {
            margin-top: 5px;
            line-height: 22px;
         }
      }

      &__title {
         margin-bottom: 12px;
         font-size: 18px;
         text-align: center;
      }
   }
</style>
