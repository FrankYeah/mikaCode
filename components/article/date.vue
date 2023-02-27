<template>
  <div class="article-date" v-html="props.value"></div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article-date {
  color: #948C84;
}

@media( max-width: 1023px ){

.article-date {

}

}

</style>
