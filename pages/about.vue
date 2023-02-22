<template>
  <div class="about">
    <div class="about-outer">
      <div class="about-box">
        <div class="about-head">謎卡 Mika</div>
        <div class="about-text1">I’m an auther and a traveler</div>
        <div class="about-text2">哈囉，我是謎卡Mika，1994出生的新聞系女生。</div>
        <div class="about-text3">曾走訪巴基斯坦、土耳其、埃及、匈牙利等10+個國家，2016年出版第一本旅行文學書《在遠方醒來》，並拿下金石堂當月銷售冠軍。現為自由作家、講師，也在TVBS和女人迷寫專欄。我相信愛與善良的重要性，喜歡大自然、葡萄酒與狗。</div>
        <div class="about-row">
          <a href="https://www.facebook.com/mikaontheroad" target="_blank">
            <img class="about-social" src="@/assets/img/common/fb-brown.png" alt="logo">
          </a>
          <a href="https://www.instagram.com/mika_ontheroad/" target="_blank">
            <img class="about-social" src="@/assets/img/common/ig-brown.png" alt="logo">
          </a>
        </div>
      </div>
      <img class="about-img" src="@/assets/img/person/2.jpg" alt="person">
    </div>
    <brandStatic />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.about {
  padding: 163px 0px 0px;

  &-outer {
    max-width: 1020px;
    margin: 0px auto;
    padding: 0px 0px 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-box {
    width: 473px;
  }

  &-head {
    font-size: 14px;
  }

  &-text1 {
    margin-top: 68px;
    
  }

  &-text2 {
    margin-top: 31px;
  }

  &-text3 {
    margin-top: 48px;
  }

  &-row {
    display: flex;
    margin-top: 37px;
  }

  &-social {
    margin-right: 16px;
  }

  &-img {
    width: 402px;
    height: 536px;
  }

}

@media( max-width: 1023px ){

.about {
  padding: 105px 0px 0px;

  &-outer {
    flex-direction: column-reverse;
    padding: 0px 32px;
  }

  &-box {
    width: 100%;
    margin-bottom: 120px;
  }

  &-head {
    margin-top: 48px;
  }

  &-text1 {
    margin-top: 32px;
  }

  &-text2 {
    margin-top: 32px;
  }

  &-text3 {
    margin-top: 32px;
  }

  &-row {
    margin-top: 32px;
  }

  &-social {
    
  }

  &-img {
    max-width: 500px;
    width: 100%;
    height: auto;
  }

}

}

</style>