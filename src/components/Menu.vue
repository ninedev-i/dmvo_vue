<template>
   <nav class="nav">
      <div class="nav__container">
         <router-link to="/" class="nav__logo" tag="a">
            <img src="/public/logo.png" alt="Дом молодежи Василеостровского района" title="Дом молодежи Василеостровского района" />
         </router-link>
         <div class="nav__menu">
            <router-link
               v-for="item in menuArray"
               :to="item.link"
               :key="item.name"
               :class="`nav__menu-item ${item.className} ${item.parent ? 'nav__menu-childItem' : ''} ${item.name === 'closestEvents' && $route.name === 'event' ? 'router-link-exact-active' : ''}`"
               v-show="!item.parent || item.parent === $route.name || item.name === $route.name || item.parent === $route.meta.parent"
               >
               <div class="nav__menu-item-icon">
                  <img
                      v-if="item.icon"
                     :src="item.icon"
                     :alt="item.caption"
                     :title="item.caption"
                  />
               </div>
               <div class="nav__menu-item-caption">{{item.caption}}</div>
            </router-link>
         </div>
      </div>
   </nav>
</template>
<script>
   export default {
      data() {
         return {
            menuArray: [
               // {
               //    name: 'admin',
               //    link: '/admin',
               //    caption: 'Админка',
               //    icon: '/public/menuIcons/admin3.svg'
               // },
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
                  className: 'nav__menu-emptyLink'
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
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'aboutMassmedia',
                  link: '/about/massmedia',
                  caption: 'СМИ о нас',
                  parent: 'aboutInfo',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'aboutHistory',
                  link: '/about/history',
                  caption: 'История здания',
                  parent: 'aboutInfo',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'aboutBoard',
                  link: '/about/board',
                  caption: 'Информационный стенд',
                  parent: 'aboutInfo',
                  className: 'nav__menu-emptyLink'
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
                  className: 'nav__menu-emptyLink'
               },

               {
                  name: 'studio',
                  link: '/studio',
                  caption: 'Студии',
                  className: 'nav__menu-emptyLink',
                  icon: '/public/menuIcons/studio.svg'
               },

               {
                  name: 'psychological',
                  link: '/psychological',
                  caption: 'Психологи',
                  icon: '/public/menuIcons/psychological.svg'
               },
               {
                  name: 'volunteer',
                  link: '/volunteer',
                  caption: 'Волонтерский центр',
                  icon: '/public/menuIcons/volunteer.svg'
               },
               {
                  name: 'family',
                  link: '/family',
                  caption: 'Семейный клуб',
                  icon: '/public/menuIcons/family.svg'
               },
               {
                  name: 'tranceforce',
                  link: '/tranceforce',
                  caption: 'Трансфорс',
                  className: 'nav__menu-emptyLink',
                  icon: '/public/menuIcons/tranceforce.svg'
               },
               {
                  name: 'aboutService',
                  link: '/service',
                  caption: 'Услуги',
                  icon: '/public/menuIcons/service.svg'
               },
               {
                  name: 'columnhall',
                  link: '/service/columnhall',
                  caption: 'Концертный зал',
                  parent: 'aboutService',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'bluehall',
                  link: '/service/bluehall',
                  caption: 'Голубой зал',
                  parent: 'aboutService',
                  className: 'nav__menu-emptyLink'
               },

               {
                  name: 'contact',
                  link: '/contact',
                  caption: 'Контакты',
                  className: 'nav__menu-emptyLink',
                  icon: '/public/menuIcons/contact.svg'
               }
            ]
         };
      }
   };
</script>
<style lang="less">
   nav {
      height: 100%;
      width: 260px;
      min-width: 260px;
   }
   .nav {
      &__container {
         width: inherit;
         height: 100%;
         background-color: #516D81;
         position: fixed;
         overflow-y: hidden;

         &:hover {
            overflow-y: auto;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
            -moz-overflow-scrolling: touch;
            -ms-overflow-scrolling: touch;
            -o-overflow-scrolling: touch;
            overflow-scrolling: touch;
         }
         &::-webkit-scrollbar {
            -webkit-appearance: none;
            width: 5px;
            cursor: pointer;
         }
         &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #47b3d8;
            cursor: pointer !important;
            -webkit-box-shadow: 0 0 1px rgba(255,255,255,0.5);
         }
      }

      &__logo {
         padding: 16px;
         display: block;
         width: 228px;

         & img {
            width: 100%;
            cursor: pointer;
         }
      }

      &__menu {
         margin-top: 15px;

         &-item {
            display: flex;
            color: white;
            text-decoration: none;
            &:hover {
               background-color: #47b3d8;
            }

            &-icon {
               height: 40px;
               width: 40px;
               padding: 6px 12px 6px;
            }

            &-caption {
               padding: 15px 10px 15px 0px;
            }
         }

         &-childItem {
            background-color: #394e5d;
         }

         &-emptyLink {
            color: #adadad !important;
         }

         & .router-link-exact-active, .router-link-exact-active:hover {
            background-color: #1392BD !important;
            cursor: default;
         }
      }
   }

   @media (max-width: 450px) {
      nav {
         width: 65px;
         min-width: 65px;
      }
      .nav {
         &__logo {
            display: none;
         }
         &__menu-item {
            &-caption {
               display: none;
            }
         }
      }
   }
</style>
