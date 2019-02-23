import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let apiHost = process.env.NODE_ENV === 'production' ? 'https://доммолодежи.рф/api' : 'http://dmvo.local/api';

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

         studio_page: [],
         studio_page_title: 'Студии и секции дома молодежи Василеостровского района',

         page: {},
         psychological: {},
         psychological_closestEvents: [],

         volunteer: {},

         family: {},

         service: {}
      },

      actions: {
         getIndexData({commit}) {
            return axios.get(`${apiHost}/get_index`).then(function(response) {
               commit('setIndexData', response.data);
            });
         },

         getEvent({commit}, request) {
            return axios.get(`${apiHost}/get_event/${request.id}`).then(function(response) {
               commit('setEventData', response.data);
            });
         },

         getClosestEvents({commit}) {
            return axios.get(`${apiHost}/get_closest_events`).then(function(response) {
               commit('setClosestEvents', response.data);
            });
         },


         getStudioPage({commit}) {
            return axios.get(`${apiHost}/get_studio_page`).then(function(response) {
               commit('setStudioList', response.data);
            });
         },

         getPastEvents({commit}) {
            return axios.get(`${apiHost}/get_past_events/2018`).then(function(response) {
               commit('setPastEvents', response.data);
            });
         },

         getPage({commit}, request) {
            return axios.get(`${apiHost}/get_page/${request.id}`).then(function(response) {
               commit('setPageData', response.data);
            });
         },

         getNews({commit}, request) {
            return axios.get(`${apiHost}/get_news/${request.offset}`).then(function(response) {
               commit('setNews', response.data);
            });
         },

         getPsychological({commit}) {
            return axios.get(`${apiHost}/get_psychological`).then(function(response) {
               commit('setPsychological', response.data);
            });
         },

         getVolunteer({commit}) {
            return axios.get(`${apiHost}/get_volunteer`).then(function(response) {
               commit('setVolunteer', response.data);
            });
         },

         getFamily({commit}) {
            return axios.get(`${apiHost}/get_family`).then(function(response) {
               commit('setFamily', response.data);
            });
         },

         getService({commit}) {
            return axios.get(`${apiHost}/get_service`).then(function(response) {
               commit('setService', response.data);
            });
         }
      },

      mutations: {
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

         setClosestEvents(state, data) {
            Vue.set(state, 'events_closest', data);
         },

         setPastEvents(state, data) {
            Vue.set(state, 'events_past', data);
         },

         setStudioList(state, data) {
            Vue.set(state, 'studio_page', data);
         },

         setPageData(state, data) {
            Vue.set(state, 'page', data);
         },

         setPsychological(state, data) {
            Vue.set(state, 'psychological', data);
         },

         setVolunteer(state, data) {
            Vue.set(state, 'volunteer', data);
         },

         setFamily(state, data) {
            Vue.set(state, 'family', data);
         },

         setService(state, data) {
            Vue.set(state, 'service', data);
         }
      }
   })
}
