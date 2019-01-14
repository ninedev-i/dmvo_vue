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
         events_past: []
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

         getPastEvents({commit}) {
            return axios.get(`${apiHost}/get_past_events/2018`).then(function(response) {
               commit('setPastEvents', response.data);
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

         setEventData(state, data) {
            Vue.set(state, 'event', data);
         },

         setClosestEvents(state, data) {
            Vue.set(state, 'events_closest', data);
         },

         setPastEvents(state, data) {
            Vue.set(state, 'events_past', data);
         }
      }
   })
}
