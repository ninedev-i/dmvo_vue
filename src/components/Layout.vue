<template>
   <div>
      <article>
         <div v-bind:class="[{'background-white': whiteBackground}, padding ? 'padding-' + padding : '']">
            <slot name="pageContent" />
         </div>
         <slot name="bottomContent" />
      </article>

      <aside>
         <div :class="`sidebar ${sidebarWithBg ? 'background-white' : ''} ${sidebarClass}`">
            <slot name="sidebar" />
         </div>
      </aside>
   </div>
</template>

<script>
   export default {
      name: 'Layout',
      props: {
         'whiteBackground': {
            type: Boolean,
            default: true
         },
         'sidebarFixed': {
            type: Boolean,
            default: true
         },
         'sidebarWithBg': {
            type: Boolean,
            default: false
         },
         'padding': {
            type: Number
         },
         'sidebarClass': {
            type: String,
            default: ''
         }
      }
   }
</script>

<style lang="less">
   article {
      width: 100%;
      min-width: 1px;
   }

   aside {
      width: 320px;
      min-width: 320px;
      margin-left: 16px;
   }
   .sidebar {
      /*position: fixed;*/
      position: absolute;
      width: inherit;
   }
</style>
