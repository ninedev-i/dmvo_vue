<template>
   <nav class="navbar">
      <div class="nav_container">
         <router-link to="/" class="navbar__logo" tag="a">
            <img src="/public/logo.png" alt="Дом молодежи Василеостровского района" title="Дом молодежи Василеостровского района" />
         </router-link>
         <div class="menu">
            <router-link
               v-for="item in menuArray"
               :to="item.link"
               :key="item.name"
               :class="`menu_item ${item.className} ${item.parent ? 'menu_childItem' : ''} ${item.name === 'closestEvents' && $route.name === 'event' ? 'router-link-exact-active' : ''}`"
               v-show="!item.parent || item.parent === $route.name || item.name === $route.name || item.parent === $route.meta.parent"
               >
               <div class="menu_item__icon">
                  <img
                      v-if="item.icon"
                     :src="item.icon"
                     :alt="item.caption"
                     :title="item.caption"
                  />
               </div>
               <div class="menu_item__caption">{{item.caption}}</div>
            </router-link>
         </div>
      </div>
   </nav>
</template>
<script>
   import '../../public/menuIcons/about.svg';
   import '../../public/menuIcons/events.svg';
   import '../../public/menuIcons/psychological.svg';
   import '../../public/menuIcons/volunteer.svg';
   import '../../public/menuIcons/family.svg';
   import '../../public/menuIcons/service.svg';
   import '../../public/menuIcons/contact.svg';
   export default {
      data() {
         return {
            menuArray: [
               {
                  name: 'aboutInfo',
                  link: '/about',
                  caption: 'О доме молодежи',
                  icon: '/public/menuIcons/about.svg'
               },
               {
                  name: 'aboutTeam',
                  link: '/about/team',
                  caption: 'Коллектив',
                  parent: 'aboutInfo',
                  className: 'menu_emptyLink'
               },
               {
                  name: 'aboutHalls',
                  link: '/about/halls',
                  caption: 'Материальная база',
                  parent: 'aboutInfo'
               },
               {
                  name: 'aboutStudio',
                  link: '/about/studio',
                  caption: 'Формы молодежного',
                  parent: 'aboutInfo'
               },
               {
                  name: 'aboutVolunteer',
                  link: '/about/volunteer',
                  caption: 'Инициативы',
                  parent: 'aboutInfo',
                  className: 'menu_emptyLink'
               },
               {
                  name: 'aboutMassmedia',
                  link: '/about/massmedia',
                  caption: 'СМИ о нас',
                  parent: 'aboutInfo',
                  className: 'menu_emptyLink'
               },
               {
                  name: 'aboutHistory',
                  link: '/about/history',
                  caption: 'История здания',
                  parent: 'aboutInfo',
                  className: 'menu_emptyLink'
               },
               {
                  name: 'aboutBoard',
                  link: '/about/board',
                  caption: 'Информационный стенд',
                  parent: 'aboutInfo',
                  className: 'menu_emptyLink'
               },

               {
                  name: 'closestEvents',
                  link: '/events',
                  caption: 'Мероприятия',
                  icon: '/public/menuIcons/events.svg'
               },
               {
                  name: 'pastEvents',
                  link: '/events/past',
                  caption: 'Прошедшие',
                  parent: 'closestEvents'
               },
               {
                  name: 'otherEvents',
                  link: '/events/other',
                  caption: 'Городские и районные',
                  parent: 'closestEvents',
                  className: 'menu_emptyLink'
               },

               {
                  name: 'psychological',
                  link: '/psychological',
                  caption: 'Психологи',
                  className: 'menu_emptyLink',
                  icon: '/public/menuIcons/psychological.svg'
               },
               {
                  name: 'volunteer',
                  link: '/volunteer',
                  caption: 'Волонтерский центр',
                  className: 'menu_emptyLink',
                  icon: '/public/menuIcons/volunteer.svg'
               },
               {
                  name: 'family',
                  link: '/family',
                  caption: 'Семейный клуб',
                  className: 'menu_emptyLink',
                  icon: '/public/menuIcons/family.svg'
               },
               // {
               //    name: 'transeforce',
               //    link: '/transeforce',
               //    caption: 'Трансфорс',
               //    className: 'menu_emptyLink'
               // },
               {
                  name: 'aboutService',
                  link: '/service',
                  caption: 'Услуги',
                  className: 'menu_emptyLink',
                  icon: '/public/menuIcons/service.svg'
               },
               {
                  name: 'columnhall',
                  link: '/service/columnhall',
                  caption: 'Концертный зал',
                  parent: 'aboutService',
                  className: 'menu_emptyLink'
               },
               {
                  name: 'bluehall',
                  link: '/service/bluehall',
                  caption: 'Голубой зал',
                  parent: 'aboutService',
                  className: 'menu_emptyLink'
               },

               {
                  name: 'contact',
                  link: '/contact',
                  caption: 'Контакты',
                  className: 'menu_emptyLink',
                  icon: '/public/menuIcons/contact.svg'
               }
            ]
         };
      }
   };
</script>
<style lang="stylus">
   nav {
      height: 100%;
      width: 260px;
      min-width: 260px
   }
   .nav_container {
      width: inherit;
      height: 100%;
      background-color: #516D81;
      position: fixed;
      overflow-y: hidden;
   }
   .navbar__logo {
      padding: 16px
      display: block;
      width: 228px;
   }
   .navbar__logo img {
      width: 100%;
      cursor: pointer;
   }
   .menu {
      margin-top: 15px;
   }
   .menu_item ,
   .menu_item:visited {
      display: flex;
      color: white;
      text-decoration: none;
   }
   .menu_item__icon {
      height: 40px;
      width: 40px;
      padding: 6px 12px 6px;
   }
   .menu_item__icon svg,
   .menu_item__icon img {
      height: 100%;
      width: 100%;
   }
   .menu_item__caption {
      padding: 15px 10px 15px 0px;
   }
   .menu .menu_item:hover {
      background-color: #47b3d8;
   }

   .menu a.router-link-exact-active,
   .menu .router-link-exact-active:hover {
      background-color: #1392BD !important;
   }

   .menu_childItem {
      background-color: #394e5d;
   }

   .menu_emptyLink {
      color: #adadad !important;
   }
   .nav_container:hover {
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      -moz-overflow-scrolling: touch;
      -ms-overflow-scrolling: touch;
      -o-overflow-scrolling: touch;
      overflow-scrolling: touch;
   }
   .nav_container::-webkit-scrollbar {
   	-webkit-appearance: none;
   	width: 5px;
      cursor: pointer;
   }
   .nav_container::-webkit-scrollbar-thumb {
   	border-radius: 10px;
   	background-color: #47b3d8;
      cursor: pointer !important;
   	-webkit-box-shadow: 0 0 1px rgba(255,255,255,0.5);
   }

   #nprogress .bar {
      background: #1392BD !important;
      top: 0px;
      padding: 2px;
      position: fixed;
      width: 100%;
   }
</style>
