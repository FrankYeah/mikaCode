<template>
  <nuxt-link class="know-more" :to="`/${props.link}`">
    <div class="know-more-box">
      <div>{{ props.value }}</div>
      <img class="know-more-arrow" src="@/assets/img/common/arrow-brand.png" alt="logo">
    </div>
 </nuxt-link>
</template>

<script setup>

const props = defineProps(['value', 'link'])

</script>

<style lang="scss" scoped>

.know-more {
  
  &-box {
    display: flex;
    align-items: flex-end;
    color: black;
  }

  &-arrow {
    width: 21px;
    height: 7px;
    margin-left: 7px;
  }

}

</style>
