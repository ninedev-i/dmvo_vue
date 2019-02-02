<template>
   <div class="widget-vk background-white margin-bottom-12">
      <div id="vk_groups"></div>
   </div>
</template>
<script>
   export default {
      props: [
         'group'
      ],

      mounted() {
         if (VK) {
            VK.Widgets.Group('vk_groups', {mode: 3, width: '320', height: '400', color1: 'FFFFFF', color2: '2B587A', color3: '5B7FA6', no_cover: 1}, this.group);
         }
      }
   }
</script>
<style lang="less">
   .widget-vk {
      max-height: 188px;
      height: 188px;
      overflow: hidden;
   }
</style>
