<template>
   <layout :whiteBackground="false">
      <template #pageContent>
         <h1 class="margin-bottom-6 margin-top-6 padding-20">{{title}}</h1>
         <div>
            <div
                  v-for="item in filter"
                  @click="changeFilter(item.name)"
                  :class="`${item.name === $store.state.board_filter ? 'button-blue' : 'button-gray'} board__button`"
                  :key="item.name">{{item.title}}</div>
         </div>
         <div v-for="(post, i) in posts" class="board__post padding-20 background-white" :key="`post_${i}`" :id="`post-${i}`">
            <div class="board__post-title">{{post.title}}</div>
            <div v-html="post.content" class="board__post-content board__post-overflowed"></div>
            <div v-on:click="expand(i)" class="board__post-expander">Показать полностью</div>
         </div>
      </template>

      <template #sidebar>
         <widgetAddress />
         <widgetVk group="20668429" />
         <widgetImportantLinks />
      </template>
   </layout>
</template>
<script>
   import layout from '../components/Layout.vue';
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetImportantLinks from '../components/widgets/ImportantLinks.vue';

   export default {
      components: {
         layout,
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },

      data() {
         return {
            title: 'Информационный стенд',
            filter: [
               {name: '', title: 'Все'},
               {name: 'extremism', title: 'Профилактика экстремизма'},
               {name: 'corruption', title: 'Противодействие коррупции'},
               {name: 'safety', title: 'Основы безопасности жизни'},
               {name: 'rights', title: 'Правовые нормативные документы'},
               {name: 'other', title: 'Прочее'},
            ]
         }
      },

      title () {
         return this.title;
      },

      asyncData({store}) {
         return store.dispatch('getPosts');
      },

      computed: {
         posts() {
            return this.$store.state.board_posts.filter(post => {
               if (!this.$store.state.board_filter) {
                  return true;
               }
               return post.tags === this.$store.state.board_filter;
            });
         }
      },

      methods: {
         changeFilter(value) {
            this.$store.commit('changeBoardFilter', value);
         },

         expand(id) {
            const post = document.querySelector(`#post-${id}`);
            post.querySelector('.board__post-content').className = 'board__post-content';
            post.querySelector('.board__post-expander').remove();
         },
      }
   };
</script>
<style lang="less">
   .board {
      &__button {
         display: inline-block;
         padding: 6px 12px;
         margin-right: 12px;
         margin-bottom: 12px;
      }

      &__post {
         margin-bottom: 12px;

         &-overflowed {
            overflow: hidden;
            max-height: 80px;
         }

         &-title {
            margin-bottom: 12px;
            font-weight: bold;
            font-size: 22px;
         }

         &-expander {
            display: inline-block;
            color: #1392BD ;
            cursor: pointer;
            font-size: 15px;

            &:hover {
               text-decoration: underline;
            }
         }
      }
   }
</style>
