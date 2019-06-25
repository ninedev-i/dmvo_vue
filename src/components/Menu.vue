<template>
   <nav class="nav">
      <div class="nav__hamburger" v-on:click="toggleMenu()">
         <div class="nav__hamburger-line"></div>
         <div class="nav__hamburger-line"></div>
         <div class="nav__hamburger-line"></div>
      </div>
      <div :class="`nav__container ${menuOpened}`">
         <router-link to="/" class="nav__logo" tag="a">
            <img src="/public/logo.svg" alt="Дом молодежи Василеостровского района" title="Дом молодежи Василеостровского района" v-on:click="toggleMenu(true)" />
         </router-link>
         <div :class="`nav__menu ${menuOpened}`">
            <router-link
               v-for="item in menuArray"
               :to="item.link"
               :key="item.name"
               :class="`nav__menu-item ${item.className} ${item.parent ? 'nav__menu-childItem' : ''}
                        ${item.name === 'closestEvents' && $route.name === 'event' ? 'router-link-exact-active' : ''}
                        ${item.name === 'studio' && $route.name === 'studios' ? 'router-link-exact-active' : ''}`"
               v-show="!item.parent || item.parent === $route.name || item.name === $route.name || item.parent === $route.meta.parent"
               >
               <div class="nav__menu-item-icon">
                  <img
                      v-if="item.icon"
                     :src="item.icon"
                     :alt="item.caption"
                     :title="item.caption"
                      v-on:click="toggleMenu(true)"
                  />
               </div>
               <div class="nav__menu-item-caption" v-on:click="toggleMenu(true)">{{item.caption}}</div>
            </router-link>
         </div>
      </div>
   </nav>
</template>
<script>
   export default {
      data() {
         return {
            menuOpened: '',
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
                  caption: 'О Доме молодежи',
                  icon: '/public/menuIcons/about1.svg'
               },
               {
                  name: 'aboutHistory',
                  link: '/about/history',
                  caption: 'История здания',
                  parent: 'aboutInfo'
               },
               {
                  name: 'aboutMassmedia',
                  link: '/about/massmedia',
                  caption: 'СМИ о нас',
                  parent: 'aboutInfo',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'aboutProjects',
                  link: '/about/projects',
                  caption: 'Проекты',
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
                  name: 'studio',
                  link: '/studio',
                  caption: 'Студии',
                  icon: '/public/menuIcons/studio.svg'
               },

               {
                  name: 'psychological',
                  link: '/psychological',
                  caption: 'Психологи',
                  icon: '/public/menuIcons/psychological.svg'
               },
               {
                  name: 'freud',
                  link: '/psychological/freud',
                  caption: 'Клуб «У Фрейда»',
                  parent: 'psychological',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'volunteer',
                  link: '/volunteer',
                  caption: 'Волонтерский центр',
                  icon: '/public/menuIcons/volunteer.svg'
               },
               {
                  name: 'initiative',
                  link: '/volunteer/initiative',
                  caption: 'Инициативы',
                  parent: 'volunteer',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'family',
                  link: '/family',
                  caption: 'Семейный клуб',
                  icon: '/public/menuIcons/family.svg'
               },
               {
                  name: 'transforce',
                  link: '/transforce',
                  caption: 'Трансфорс',
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
                  name: 'board',
                  link: '/board',
                  caption: 'Информация',
                  className: 'nav__menu-emptyLink'
               },
               {
                  name: 'contact',
                  link: '/contact',
                  caption: 'Контакты',
                  icon: '/public/menuIcons/contact.svg'
               }
            ]
         };
      },
      methods: {
         toggleMenu(hide = null) {
            this.menuOpened = hide || this.menuOpened ? '' : 'nav__hiddenMenu-show';
         }
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
         width: 215px;

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
               color: #fff;
            }

            &-icon {
               height: 40px;
               width: 40px;
               padding: 6px 12px 6px;
            }

            &-caption {
               padding: 15px 10px 15px 0;
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
         position: fixed;
         width: 100vw;
         height: auto;
         z-index: 10;
      }
      .nav {
         &__hamburger {
            width: 35px;
            height: 20px;
            position: absolute;
            z-index: 100;
            top: 25px;
            left: 18px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &-line {
               height: 2px;
               background-color: #fff;
            }
         }
         &__logo {
            width: 100%;
            padding: 0;
            text-align: center;
            img {
               width: 200px;
               margin-left: 30px;
            }
         }

         &__container {
            height: 70px;
            box-shadow: 0 5px 10px -2px grey;

            &:not(.nav__hiddenMenu-show) {
               &::-webkit-scrollbar-thumb {
                  background-color: inherit;
               }
            }

            &.nav__hiddenMenu-show {
               height: 100%;
            }
         }
         &__menu {
            display: none;

            &.nav__hiddenMenu-show {
               height: 100%;
               display: block;
            }
         }
         &__menu-item {
            &-caption {
               /*display: none;*/
            }
         }
      }
   }
</style>
