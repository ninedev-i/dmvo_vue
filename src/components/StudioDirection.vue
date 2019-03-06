<template>
   <div>
      <div
         class="studio__direction-image"
         :style="`background-image: url('public/studioImages/${direction.name}.jpg');`"
         >
         <div class="studio__direction-title"><h3>{{direction.title}}</h3></div>
      </div>
      <div
         v-for="studio in direction.studios"
         class="studio__direction-item"
         :title="studio.studio_name"
         >
         {{studio.studio_name}}
      </div>
   </div>
</template>

<script>
   export default {
      props: [
         'direction'
      ]
   }
</script>

<style lang="less">
   .studio__direction {
      border: 1px solid #E5E7E8;
      margin-bottom: 12px;

      &-image {
         position: relative;
         margin-bottom: 15px;
         height: 150px;
         width: 100%;
         display: block;
         background-size: cover;
         background-position: center center;
         background-repeat: no-repeat;
      }
      &-title {
         background-color: rgba(0, 102, 153, 0.8);
         position: absolute;
         bottom: 0px;
         width: 100%;
         color: white;
         padding: 5px 0;
         text-align: center;

         & h3 {
            margin: 0;
            font-size: 19px;
            font-weight: normal;
         }
      }

      &-item {
         margin: 10px;
         background-color: #E5E7E8;
         display: block;
         padding: 5px 10px 5px 10px;
         height: 100%;
         text-decoration: none;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;

         &:hover {
            background-color: #1392BD;
            color: white;
            cursor: pointer;
         }
      }
   }
</style>
