import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../views/Index.vue');
const ViewContainer = () => import('../views/ViewContainer.vue');
const EventsPast = () => import('../views/EventsPast.vue');
const Events = () => import('../views/Events.vue');
const Event = () => import('../views/Event.vue');
const Psychological = () => import('../views/Psychological.vue');
const Volunteer = () => import('../views/Volunteer.vue');
const Family = () => import('../views/Family.vue');
const Transforce = () => import('../views/Transforce.vue');
const Service = () => import('../views/Service.vue');
const Studios = () => import('../views/Studios.vue');
const Studio = () => import('../views/Studio.vue');
const Contact = () => import('../views/Contact.vue');
const Empty = () => import('../views/Empty.vue');
const Page = () => import('../views/Page.vue');
const Team = () => import('../views/Team.vue');

const Login = () => import('../views/Login.vue');

Vue.use(Router);

export const createRouter = () => {
   return new Router({
      mode: 'history',
      fallback: false,
      scrollBehavior: () => ({ y: 0 }),
      routes: [
         {path: '', name: 'main', component: Index},
         {path: '/about/', component: ViewContainer, children: [
            {path: '', name: 'aboutInfo', component: Page, meta: {parent: 'aboutInfo', id: 19}},
            {path: 'team', name: 'aboutTeam', component: Team, meta: {parent: 'aboutInfo'}},
            {path: 'halls', name: 'aboutHalls', component: Page, meta: {parent: 'aboutInfo', id: 22}},
            {path: 'studio', name: 'aboutStudio', component: Page, meta: {parent: 'aboutInfo', id: 23}},
            {path: 'volunteer', name: 'aboutVolunteer', component: Page, meta: {parent: 'aboutInfo', id: 17}},
            {path: 'massmedia', name: 'aboutMassmedia', component: Empty, meta: {parent: 'aboutInfo'}},
            {path: 'history', name: 'aboutHistory', component: Page, meta: {parent: 'aboutInfo', id: 20}},
            {path: 'board', name: 'aboutBoard', component: Empty, meta: {parent: 'aboutInfo'}}
         ]},
         {path: '/events/', component: ViewContainer, children: [
            {path: '', name: 'closestEvents', component: Events, meta: {parent: 'closestEvents'}},
            {path: 'past', name: 'pastEvents', component: EventsPast, meta: {parent: 'closestEvents'}},
            {path: 'other', name: 'otherEvents', component: Empty, meta: {parent: 'closestEvents'}},
            {path: ':id', name: 'event', component: Event, meta: {parent: 'closestEvents'}},
            {path: ':id/post', name: 'event', component: Event, meta: {parent: 'closestEvents', post: true}}
         ]},
         {path: '/studio', component: ViewContainer, children: [
            {path: '', name: 'studios', component: Studios, meta: {parent: 'studios'}},
            {path: ':shortName', name: 'studios', component: Studio, meta: {parent: 'studios'}},
         ]},
         {path: '/service', name: 'service', component: Service},
         {path: '/psychological', name: 'psychological', component: Psychological},
         {path: '/volunteer', name: 'volunteer', component: Volunteer},
         {path: '/transforce', name: 'transforce', component: Transforce},
         {path: '/family', name: 'family', component: Family},
         {path: '/contact', name: 'contact', component: Contact},

         {path: '/login', name: 'login', component: Login}
      ]
   });
};
