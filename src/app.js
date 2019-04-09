import Vue from 'vue';
import App from './App.vue';
import {createStore} from './store';
import {createRouter} from './router';
import {sync} from 'vuex-router-sync';
import titleMixin from './util/title';
import {getPeriod} from './util/helpers';

Vue.mixin(titleMixin);
Vue.mixin(getPeriod);

if (process.browser) {
   const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
   Vue.use(VueAwesomeSwiper);
}

export function createApp () {
   const store = createStore();
   const router = createRouter();

   sync(store, router);

   const app = new Vue({
      router,
      store,
      render: h => h(App)
   });

   return {app, router, store};
}
