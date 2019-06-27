<template>
   <div>
      <article>
         <div>
            <h1 class="margin-bottom-6 margin-top-6 padding-20">{{$store.state.board_title}}</h1>
            <div v-for="(post, i) in posts" class="board__post padding-20 background-white" :key="`post_${i}`" :id="`post-${i}`">
               <div class="board__post-title">{{post.title}}</div>
               <div v-html="post.content" class="board__post-content board__post-overflowed"></div>
               <div v-on:click="expand(i)" class="board__post-expander">Показать полностью</div>
            </div>
         </div>
      </article>

      <aside>
         <div class="sidebar">
            <widgetAddress />
            <widgetVk group="20668429" />
            <widgetImportantLinks />
         </div>
      </aside>
   </div>
</template>
<script>
   import widgetAddress from '../components/widgets/Address.vue';
   import widgetVk from '../components/widgets/Vk.vue';
   import widgetImportantLinks from '../components/widgets/ImportantLinks.vue';

   export default {
      components: {
         widgetAddress,
         widgetVk,
         widgetImportantLinks
      },

      title () {
         return this.$store.state.board_title;
      },

      asyncData({store}) {
         return store.dispatch('getPosts');
      },

      computed: {
         posts() {
            return this.$store.state.board_posts;
         }
      },

      methods: {
         expand(id) {
            const post = document.querySelector(`#post-${id}`);
            post.querySelector('.board__post-content').className = 'board__post-content';
            post.querySelector('.board__post-expander').remove();
         }
      }
   };
</script>
<style lang="less">
   .board {
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
