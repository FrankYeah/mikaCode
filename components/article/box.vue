<template>
  <div class="article">
    <HeadName class="article-titles" :value="'文章'" />
    <div class="article-box">
      <div class="article-main">
        <slot />
      </div>
      <articleHot />
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article {
  min-height: calc(100vh - 270px);
  max-width: 1080px;
  margin: 0px auto 0px;
  padding: 145px 0px 0px;
  border-left: 1px solid #948C84;
  border-right: 1px solid #948C84;

  &-titles {
    display: none;
  }

  &-box {
    display: flex;
    justify-content: space-between;
  }

  &-main {
    width: 730px;
    padding: 0px 24px 78px;
    // background-color: white;
  }

}

@media( max-width: 1023px ){

.article {
  padding: 90px 0px 48px;

  &-titles {
    display: flex;
  }

  &-box {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  &-main {
    width: 100%;
    margin: 32px 0px;
    padding: 24px 24px 64px;
    background-color: white;
  }

}

}

</style>
