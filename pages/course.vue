<template>
  <div class="course">
    <HeadName :value="'課程'" />
    <div class="course-box">
      <div class="course-title">敬請期待</div>
      <div class="course-text">之後將會開與旅遊、登山、運動資訊分享的線上與線下課程，如果想知道更多或是有合作想法，可以透過聯繫我們瞭解更多呦！</div>
      <nuxt-link to="/contact">
        <div class="course-btn">聯繫我們</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.course {
  padding: 130px 0px 170px;

  &-box {
    max-width: 1020px;
    width: 492px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-title {
    margin-top: 108px;
    font-size: 32px;
  }

  &-text {
    margin-top: 20px;
    font-size: 16px;
  }

  &-btn {
    width: 170px;
    height: 38px;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #5E5B52;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

}

@media( max-width: 1023px ){

  .footer {

    &- {
      
    }
    
  }

}

</style>