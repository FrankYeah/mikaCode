<template>
  <div class="article-title" v-html="props.value"></div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article-title {
  margin-top: 15px;
  font-size: 20px;
}

@media( max-width: 1023px ){

.article-title {
  font-size: 16px;
}

}

</style>
