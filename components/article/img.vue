<template>
  <!-- <img class="article-img" src="@/assets/img/person/6.jpg" alt="person"> -->

  <img class="article-img" :src="props.value" alt="person">
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article-img {
  width: 100%;
  margin-top: 22px;
}

@media( max-width: 1023px ){

.article-img {
  margin-top: 24px;
}

}

</style>
