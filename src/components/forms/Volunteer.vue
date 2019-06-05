<template>
   <div class="volunteer__button">
      <a class="button-blue" data-nice="inline" href="#volunteerForm">Напиши нам</a>

      <div id="volunteerForm" class="hidden" v-on:click.self.prevent>
         <div class="qwe">
            <form method="POST" action="" class="volunteer">
               <div class="volunteer__block-left">
                  <b class="volunteer__title">Ваши контактные данные</b>
                  <input required="required" name="name" type="text" id="name" placeholder="Ваше имя" autofocus />
                  <span>
                     <input required="required" name="email" type="email" id="email" placeholder="E-mail" />
                     <input required="required" name="phone" type="text" id="phone" placeholder="Телефон" />
                  </span>
                  <textarea required="required" name="textmessage" cols="40" rows="3" id="textmessage" placeholder="Обращение"></textarea>

                  <div class="button-blue">Отправить</div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
   import {NicePopup} from 'nice-popup';

   export default {
      mounted() {
         new NicePopup();
      }
   }
</script>

<style lang="less">
   .volunteer {
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

      &__title {
         margin-bottom: 12px;
         font-size: 18px;
         text-align: center;
      }
   }
</style>
