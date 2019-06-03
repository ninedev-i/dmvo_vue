<template>
   <div>
      <div v-for="item in data">
         <div v-on:click.stop="changeSelectedItem(item.id)">
            <span class="radiobuttons__item">
               <span :class="selectedItem === item.id ? 'radiobuttons__item-selected' : ''"></span>
            </span>
            <span class="radiobuttons__label">{{item.caption}}</span>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      props: [
         'data',
         'selectedItem'
      ],

      methods: {
         changeSelectedItem(id) {
            this.$emit('changeSelectedItem', id);
         }
      }
   }
</script>
<style lang="less">
   .radiobuttons {
      &__item {
         display: inline-block;
         position: relative;
         width: 8px;
         height: 8px;
         border: 2px solid #1392BD;
         border-radius: 50%;
         margin-right: 5px;
         cursor: pointer;

         &-selected {
            display: inline-block;
            position: absolute;
            width: 2px;
            height: 2px;
            top: 2px;
            right: 2px;
            border: 1px solid #1392BD;
            background: #1392BD;
            margin: 0 auto;
            border-radius: 50%;
         }
      }

      &__label {
         cursor: pointer;
      }
   }
</style>
