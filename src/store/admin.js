import Vue from 'vue';
import axios from 'axios';
import Cookie from 'cookie-universal';

const cookies = Cookie();
const apiHost = process.env.NODE_ENV === 'production' ? 'https://old.доммолодежи.рф/api' : 'http://dmvo.local/api';

export const admin = {
   state: {
      isAdmin: false,
      mySecretKey: ''
   },

   actions: {
      login({commit}, request) {
         const key = request.MY_SECRET_KEY;
         return axios.post(`${apiHost}/auth`, request)
            .then(res => {
               if (res.data) {
                  cookies.set('mySecretKey', key);
                  commit('setAuth', res);
               } else {
                  alert('Неверный пароль');
               }
            });
      },

      logout({commit}) {
         commit('logout');
      },

      editContacts({commit}, request) {
         request['MY_SECRET_KEY'] = this.state.admin.mySecretKey;
         return axios.post(`${apiHost}/admin/edit_contacts`, request);
      }
   },

   mutations: {
      setAuth(state, res, request) {
         Vue.set(state, 'isAdmin', true);
         Vue.set(state, 'mySecretKey', cookies.get('mySecretKey'));
         cookies.set('isAdmin', true);
      },
      logout(state, res) {
         Vue.set(state, 'isAdmin', false);
         Vue.set(state, 'mySecretKey', '');
         cookies.removeAll();
      },
   },

   getters: {
      isAuthenticated: (state) => {
         if (cookies.get('isAdmin')) {
            Vue.set(state, 'isAdmin', true);
            Vue.set(state, 'mySecretKey', cookies.get('mySecretKey'));
         }
      },
   }
};