<template>
  <div class="head-text">
    <div>{{ props.value }}</div>
    <div class="head-text-line"></div>
    <!-- <HeadText :value="'謎卡 Mika'" /> -->
  </div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.head-text {
  color: #5E5B52;
  font-size: 16px;

  &-line {
    margin-top: 8px;
    width: 51px;
    height: 1px;
    background-color: #5E5B52;
  }

}

</style>
