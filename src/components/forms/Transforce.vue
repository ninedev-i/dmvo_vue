<template>
   <div>
      <a class="button-blue" data-nice="inline" href="#transforceForm">Оставить заявку на посещение</a>

      <div id="transforceForm" class="hidden" v-on:click.self.prevent>
         <div>
            <form method="POST" action="" class="form-transforce">
               <div class="form-transforce__block-right">
                  <b class="title form-transforce__title">Программа</b>
                  <select v-model="selectedShow" ref="show">
                     <option v-for="(show, key) in shows" :value="key">{{show.title}}</option>
                  </select>
                  <div>{{selectedShow ? shows[selectedShow].description : ''}}</div>
               </div>

               <div class="form-transforce__block-left">
                  <b class="title form-transforce__title">Контактные данные</b>
                  <input name="name" type="text" placeholder="Название учреждения" v-model="formName" ref="formName" v-on:input="checkValidity('formName')" autofocus />
                  <input name="name" type="text" placeholder="Ф.И.О. сопровождающего" v-model="formFio" ref="formFio" v-on:input="checkValidity('formFio')" />
                  <span>
                     <input name="email" type="email" placeholder="E-mail" v-model="formEmail" ref="formEmail" v-on:input="checkValidity('formEmail')" />
                     <input name="phone" type="text" placeholder="Телефон" v-model="formPhone" ref="formPhone" v-on:input="checkValidity('formPhone')" />
                  </span>
                  <textarea name="textmessage" cols="40" rows="3" placeholder="Дата, Ф.И.О. учащихся, возраст, cостоят ли на учете в ОДН"  v-model="textmessage"></textarea>

                  <div class="button-blue" v-on:click="sendRequest">Записаться</div>
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

           selectedShow: 'show1',
           formName: '',
           formFio: '',
           formEmail: '',
           formPhone: '',
           textmessage: '',
        }
      },
      props: {
         shows: Object
      },
      mounted() {
         this.popup = new NicePopup();
      },
      methods: {
         changeSelectedItem(id) {
            this.eventType = id;
         },

         sendRequest() {
            if (!this.validateForm()) {
               return;
            }

            let formData = {
               organisation: this.formName,
               fio: this.formFio,
               email: this.formEmail,
               phone: this.formPhone,
               message: this.textmessage,
               show: this.$refs.show.options[this.$refs.show.selectedIndex].text
            };

            axios.post(
               this.$store.state.apiHost + '/mail_transforce', qs.stringify(formData)
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
