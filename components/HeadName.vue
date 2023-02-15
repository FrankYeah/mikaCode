<template>
  <div class="head-name">
    <div class="head-name-line"></div>
    <div class="head-name-text">{{ props.value }}</div>
    <div class="head-name-line"></div>
  </div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.head-name {
  display: flex;
  justify-content: center;
  align-items: center;
  
  &-line {
    width: 62px;
    height: 1px;
    background-color: #5E5B52;
    margin: 0px 24px;
  }
  
  &-text {
    font-size: 24px;
  }

}

</style>
