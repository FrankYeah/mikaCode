<template>
  <div class="article-hot">
    <div class="article-hot-box">
      <div class="article-hot-title">熱門文章</div>
      <nuxt-link to="/article/20230217">
        <div class="article-hot-text">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="article-hot-text">我的旅行必備Top 5 | feat. Microsoft Surface</div>
      </nuxt-link>
    </div>

    <div class="article-hot-box">
      <div class="article-hot-title">精選文章</div>
      <nuxt-link to="/article/20230217">
        <div class="article-hot-text">親眼看世界：Smile近視雷射，術後心得 feat. Salomon</div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="article-hot-text">女子的澎湖之旅 feat. Panasonic 奈米水離子吹風機</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['value'])

</script>

<style lang="scss" scoped>

.article-hot {
  width: 265px;

  &-box {
    margin: 0px 20px 16px 0px;
  }

  &-title {
    font-size: 14px;
  }

  &-text {
    color: #948C84;
    text-decoration: underline;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
  
}

@media( max-width: 1023px ){

.article-hot {
  width: calc(100% - 48px);
  padding: 0px 24px;

  &-box {
    margin: 0px 0px 24px 0px;
  }

  &-title {
    font-size: 14px;
    margin-bottom: 8px;
  }

  &-text {
    margin: 0px 0px 16px;
  }
}


}

</style>
