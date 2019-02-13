import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';

import Index from '../views/Index.vue';
import EventsContainer from '../views/EventsContainer.vue';
import EventsPast from '../views/EventsPast.vue';
import Events from '../views/Events.vue';
import Event from '../views/Event.vue';
import About from '../views/about/About.vue';
import Halls from '../views/about/Halls.vue';
import AboutStudio from '../views/about/Studio.vue';
import Psychological from '../views/Psychological.vue';
import Volunteer from '../views/Volunteer.vue';
import Family from '../views/Family.vue';
import Service from '../views/Service.vue';

import Empty from '../views/Empty.vue';

Vue.use(Router);

export function createRouter() {
   return new Router({
      mode: 'history',
      fallback: false,
      scrollBehavior: () => ({ y: 0 }),
      routes: [
         {path: '', name: 'main', component: Index},
         {path: '/about/', component: About, children: [
            {path: '', name: 'aboutInfo', component: About, meta: {parent: 'aboutInfo'}},
            {path: 'team', name: 'aboutTeam', component: Empty, meta: {parent: 'aboutInfo'}},
            {path: 'halls', name: 'aboutHalls', component: Halls, meta: {parent: 'aboutInfo'}},
            {path: 'studio', name: 'aboutStudio', component: AboutStudio, meta: {parent: 'aboutInfo'}},
            {path: 'volunteer', name: 'aboutVolunteer', component: Empty, meta: {parent: 'aboutInfo'}},
            {path: 'massmedia', name: 'aboutMassmedia', component: Empty, meta: {parent: 'aboutInfo'}},
            {path: 'history', name: 'aboutHistory', component: Empty, meta: {parent: 'aboutInfo'}},
            {path: 'board', name: 'aboutBoard', component: Empty, meta: {parent: 'aboutInfo'}}
         ]},
         {path: '/events/', component: EventsContainer, children: [
            {path: '', name: 'closestEvents', component: Events, meta: {parent: 'closestEvents'}},
            {path: 'past', name: 'pastEvents', component: EventsPast, meta: {parent: 'closestEvents'}},
            {path: 'other', name: 'otherEvents', component: Empty, meta: {parent: 'closestEvents'}},
            {path: ':id', name: 'event', component: Event, meta: {parent: 'closestEvents'}}
         ]},
         {path: '/studio', name: 'studio', component: Empty},
         {path: '/service', name: 'service', component: Service},
         {path: '/psychological', name: 'psychological', component: Psychological},
         {path: '/volunteer', name: 'volunteer', component: Volunteer},
         {path: '/transeforce', name: 'transeforce', component: Empty},
         {path: '/family', name: 'family', component: Family},
         {path: '/contact', name: 'contact', component: Empty}
      ]
   });
}
