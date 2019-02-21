<template>
  <div>
    <ul>
      <li v-for="img in imageList">
        <ImageItem :img="img"></ImageItem>
      </li>
    </ul>
  </div>
</template>

<script>
import ImageItem from "./components/ImageItem";
export default {
  name: "ImageList",
  props: ["id"],
  data: function() {
    return {
      imageList: []
    };
  }
};
</script>

<style scoped>
</style>