<template>
   <div>
      <a class="button-blue" data-nice="inline" href="#psyForm">Записаться на прием</a>

      <div id="psyForm" class="hidden" v-on:click.self.prevent>
         <div>
            <form class="form-psy">
               <div class="form-psy__block-right">
                  <b class="title form-psy__title">Направление работы</b>
                  <span v-for="type in eventTypes">
                     <input name="choice" type="radio" :id="type.id" :value="type.id" v-model="formDirection" :key="`direction_${type.id}`"><label :for="type.id">{{type.caption}}</label>
                  </span>
                  <b class="title form-psy__title">Специалист</b>
                  <span><input name="specialist" type="radio" id="defaultVal" value="Не имеет значения" v-model="formSpecialist" key="specialist_none"><label for="defaultVal">Не имеет значения</label></span>
                  <span v-for="(specialist, id) in specialists">
                     <input name="specialist" type="radio" :id="`spec_${id}`" :value="specialist.name" v-model="formSpecialist" :key="`specialist_${id}`"><label :for="`spec_${id}`">{{specialist.name}}</label>
                  </span>
               </div>

               <div class="form-psy__block-left">
                  <b class="title form-psy__title">Ваши контактные данные</b>
                  <input name="name" type="text" placeholder="Ваше имя" v-model="formName" ref="formName" v-on:input="checkValidity('formName')" autofocus />
                  <span>
                     <input name="email" type="email" placeholder="E-mail" v-model="formEmail" ref="formEmail" v-on:input="checkValidity('formEmail')" />
                     <input name="phone" type="text" placeholder="Телефон" v-model="formPhone" ref="formPhone" v-on:input="checkValidity('formPhone')" />
                  </span>
                  <input name="age" type="text" placeholder="Возраст (от 14 до 30 лет)" v-model="formAge" ref="formAge" v-on:input="checkValidity('formAge')" />
                  <input name="date" type="text" placeholder="Удобная дата и время консультации" v-model="formDate" ref="formDate" v-on:input="checkValidity('formDate')" />
                  <textarea name="textmessage" cols="40" rows="3" placeholder="Комментарий" v-model="formTextmessage"></textarea>

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
           formDirection: 'consult',
           formSpecialist: 'Не имеет значения',
           formName: '',
           formEmail: '',
           formPhone: '',
           formAge: '',
           formDate: '',
           formTextmessage: '',

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
         },

         sendRequest() {
            if (!this.validateForm()) {
               return;
            }

            let formData = {
               direction: this.formDirection,
               specialist: this.formSpecialist,
               name: this.formName,
               email: this.formEmail,
               phone: this.formPhone,
               age: this.formAge,
               date: this.formDate,
               message: this.formTextmessage
            };

            axios.post(
               this.$store.state.apiHost + '/mail_psy', qs.stringify(formData)
            ).then((response) => {
               // TODO закрывать форму
               console.error('Отправлено!');
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
