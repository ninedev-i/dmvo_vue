<template>
   <div>
      <a class="button-blue" data-nice="inline" href="#transforceForm">Оставить заявку на посещение</a>

      <div id="transforceForm" class="hidden" v-on:click.self.prevent>
         <div>
            <form method="POST" action="" class="form-transforce">
               <div class="form-transforce__block-right">
                  <b class="form-transforce__title">Программа</b>
                  <select v-model="selectedShow">
                     <option v-for="(show, key) in shows" :value="key">{{show.title}}</option>
                  </select>
                  <div>{{selectedShow ? shows[selectedShow].description : ''}}</div>
               </div>

               <div class="form-transforce__block-left">
                  <b class="form-transforce__title">Контактные данные</b>
                  <input required="required" name="name" type="text" id="name" placeholder="Название учреждения" autofocus />
                  <input required="required" name="name" type="text" id="name" placeholder="Ф.И.О. сопровождающего" />
                  <span>
                     <input required="required" name="email" type="email" id="email" placeholder="E-mail" />
                     <input required="required" name="phone" type="text" id="phone" placeholder="Телефон" />
                  </span>
                  <textarea required="required" name="textmessage" cols="40" rows="3" id="textmessage" placeholder="Дата, Ф.И.О. учащихся, возраст, cостоят ли на учете в ОДН"></textarea>

                  <div class="button-blue">Записаться</div>
               </div>
            </form>
         </div>

      </div>
   </div>
</template>

<script>
   import {NicePopup} from 'nice-popup';

   export default {
      data() {
        return {
           selectedShow: 'show1'
        }
      },
      props: {
         shows: Object
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
   .form-transforce {
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
         width: 400px;

      }

      &__title {
         margin-bottom: 12px;
         font-size: 18px;
         text-align: center;
      }
   }
</style>
