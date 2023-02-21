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
      
  &:hover {
    opacity: 0.7;
  }
  
  &-box {
    display: flex;
    align-items: flex-end;
    color: black;
    background-color: transparent;
  }

  &-arrow {
    width: 21px;
    height: 7px;
    margin-left: 7px;
    background-color: transparent;
  }

}

@media( max-width: 1023px ){

.know-more {
  
  
  &-box {
    justify-content: center;
  }

  &-arrow {
    
  }

}

}

</style>
