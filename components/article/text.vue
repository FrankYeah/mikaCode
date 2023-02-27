<template>
  <div class="article-text" v-html="props.value"></div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article-text {
  margin-top: 24px;
      font-size: 14px;
      color: #948C84;
      letter-spacing: 1.8px;
      line-height: 1.4;
}

@media( max-width: 1023px ){

.article-text {
  font-size: 12px;
}

}

</style>
