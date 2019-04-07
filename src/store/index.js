import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let apiHost = process.env.NODE_ENV === 'production' ? 'https://доммолодежи.рф/api' : 'http://dmvo.local/api';

const requestData = {
   closestEvents: {
      state: 'events_closest',
      method: 'get_closest_events',
   },
   contacts: {
      state: 'contacts',
      method: 'get_contacts'
   },
   eventsPast: {
      state: 'events_past',
      method: `get_past_events/${new Date().getFullYear()}`
   },
   family: {
      state: 'family',
      method: 'get_family'
   },
   psychological: {
      state: 'psychological',
      method: 'get_psychological'
   },
   service: {
      state: 'service',
      method: 'get_service'
   },
   transforce: {
      state: 'transforce',
      method: 'get_transforce'
   },
   studio: {
      state: 'studio_page',
      method: 'get_studios_by_directions'
   },
   volunteer: {
      state: 'volunteer',
      method: 'get_volunteer'
   }
};

export function createStore () {
   return new Vuex.Store({
      state: {
         index_carousel: [],
         index_closestEvents: [],
         index_closestExhibitions: [],
         index_news: [],
         index_title: 'Дом молодежи Василеостровского района Санкт-Петербурга',

         event: {},
         events_closest_title: 'Ближайшие мероприятия дома молодежи Василеостровского района',
         events_closest: [],
         events_past_title: 'Архив мероприятий',
         events_past: [],

         studio: {},
         studio_page: [],
         studio_page_title: 'Студии и секции дома молодежи Василеостровского района',

         page: {},
         psychological: {},
         psychological_closestEvents: [],

         volunteer: {},

         family: {},

         service: {},

         transforce: {},

         contact_page_title: 'Контактная информация Дома молодежи Василеостровского района',
         contacts: []
      },

      actions: {
         getData({commit}, request) {
            return axios.get(`${apiHost}/${requestData[request.name].method}`).then((response) => {
               response.data.name = requestData[request.name].state;
               commit('setData', response.data);
            });
         },

         getIndexData({commit}) {
            return axios.get(`${apiHost}/get_index`).then((response) => {
               commit('setIndexData', response.data);
            });
         },

         getEvent({commit}, request) {
            return axios.get(`${apiHost}/get_event/${request.id}`).then((response) => {
               commit('setEventData', response.data);
            });
         },

         getStudio({commit}, request) {
            return axios.get(`${apiHost}/get_studio/${request.id}`).then((response) => {
               commit('setStudioData', response.data);
            });
         },

         getPage({commit}, request) {
            return axios.get(`${apiHost}/get_page/${request.id}`).then((response) => {
               commit('setPageData', response.data);
            });
         },

         getNews({commit}, request) {
            return axios.get(`${apiHost}/get_news/${request.offset}`).then((response) => {
               commit('setNews', response.data);
            });
         }
      },

      mutations: {
         /**
          * @param data – возвращаем то что вернулось в запросе. в data.name лежит имя поля, куда все записываем
          */
         setData(state, data) {
            Vue.set(state, data.name, data);
         },

         setIndexData(state, data) {
            Vue.set(state, 'index_carousel', data.carousel);
            Vue.set(state, 'index_closestEvents', data.events);
            Vue.set(state, 'index_closestExhibitions', data.exhibitions);
            Vue.set(state, 'index_news', data.news);
         },

         setNews(state, data) {
            let newArray = state.index_news.concat(data);
            state.index_news.concat(data);
            Vue.set(state, 'index_news', newArray);
         },

         setEventData(state, data) {
            Vue.set(state, 'event', data);
         },

         setStudioData(state, data) {
            Vue.set(state, 'studio', data);
         },

         setPageData(state, data) {
            Vue.set(state.page, data.id, data);
         }
      }
   })
}
