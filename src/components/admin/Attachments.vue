<template>
   <div>
      <div v-for="(attachment, i) in list">
         <div class="admin_block">
            <div class="admin_input__block">
               <label for="type" class="admin_input__label">Тип вложения</label>
               <select class="admin_input__text attachment_select" id="type" v-model="attachment.type">
                  <option value="link">Ссылка</option>
                  <option value="file">Файл</option>
               </select>
            </div>
            <div class="admin_input__block">
               <label for="is_button" class="admin_input__label">Отображение</label>
               <select class="admin_input__text attachment_select" id="is_button" v-model="attachment.is_button">
                  <option value="true">Кнопка</option>
                  <option value="false">Текст</option>
               </select>
            </div>
            <div class="admin_input__block">
               <button class="admin_input__button attachment_button" @click="remove(i)" title="Удалить">x</button>
            </div>
         </div>

         <div class="admin_input__block">
            <label for="attachmentTitle" class="admin_input__label">Заголовок</label>
            <input type="text" id="attachmentTitle" class="admin_input__text" v-model="attachment.title" />
         </div>

         <div class="admin_input__block">
            <label for="link" class="admin_input__label">Ссылка</label>
            <input type="text" id="link" class="admin_input__text" v-model="attachment.path" :disabled="attachment.type === 'file'" />
         </div>
      </div>

      <div v-if="!list.length" class="admin_input__block">
         <label for="addNew" class="admin_input__label">Вложение</label>
         <button class="admin_input__button attachment_addNew" id="addNew" @click="add()">Добавить ссылку</button>
      </div>
   </div>
</template>

<script>
   export default {
      props: [
         'list'
      ],

      methods: {
         add() {
            this.list.push({is_button: true, type: 'link'})
         },

         remove(i) {
            this.list.splice(i, 1);
         }
      }
   }
</script>

<style lang="less">
   @import '../../util/admin';

   .attachment {
      &_select {
         width: 111px;
         margin-right: 12px;
      }
      &_button {
         width: 33px;
         height: 36px;
         margin-top: 21px;
      }

      &_addNew {
         width: 146px;
         margin-bottom: 8px;
      }
   }
</style>