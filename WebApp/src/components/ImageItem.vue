<template>
  <div>
    <img :src="img.src" alt srcset>
  </div>
</template>

<script>
export default {
  name: "ImageItem",
  props: ["img"],
  data() {
    return {
      //key: value
    };
  }
};
</script>

<style scoped>
</style>