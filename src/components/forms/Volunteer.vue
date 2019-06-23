<template>
   <div class="volunteer__button">
      <a class="button-blue" data-nice="inline" href="#volunteerForm">Напиши нам</a>

      <div id="volunteerForm" class="hidden" v-on:click.self.prevent>
         <div>
            <form class="volunteer">
               <div class="volunteer__block">
                  <b class="title volunteer__title">Ваши контактные данные</b>
                  <input name="name" type="text" placeholder="Ваше имя" v-model="formName" ref="formName" v-on:input="checkValidity('formName')" autofocus />
                  <span>
                     <input name="email" type="email" placeholder="E-mail" v-model="formEmail" ref="formEmail" v-on:input="checkValidity('formEmail')" />
                     <input name="phone" type="text" placeholder="Телефон" v-model="formPhone" ref="formPhone" v-on:input="checkValidity('formPhone')" />
                  </span>
                  <textarea name="textmessage" cols="40" rows="3" v-model="formMessage" ref="formMessage" placeholder="Обращение" v-on:input="checkValidity('formMessage')"></textarea>

                  <div class="button-blue" v-on:click="sendRequest">Отправить</div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
   import {NicePopup} from 'nice-popup';
   import axios from 'axios';
   import qs from 'qs';

   export default {
      data() {
         return {
            popup: null,

            formName: '',
            formEmail: '',
            formPhone: '',
            formMessage: ''
         }
      },

      mounted() {
         this.popup = new NicePopup();
      },

      methods: {
         sendRequest() {
            if (!this.validateForm()) {
               return;
            }

            let formData = {
               name: this.formName,
               email: this.formEmail,
               phone: this.formPhone,
               message: this.formMessage
            };

            axios.post(
               this.$store.state.apiHost + '/mail_volunteer', qs.stringify(formData)
            ).then((response) => {
               this.popup.close();
               this.resetForm();
            }).catch((error) => {
               console.error(error);
            });
         },

         validateForm() {
            let fieldsCompleted = true;
            for (let input in this.$refs) {
               let isEmpty = !this.$refs[input].value;
               if (isEmpty) {
                  this.$refs[input].className = 'notValide';
                  fieldsCompleted = false;
               }
            }
            return fieldsCompleted;
         },

         checkValidity(name) {
            if (this.$refs[name].value) {
               this.$refs[name].className = '';
            }
         },

         resetForm() {
            for (let input in this.$refs) {
               this.$refs[input].value = '';
            }
         }
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

      &__block {
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
