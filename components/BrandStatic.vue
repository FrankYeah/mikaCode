<template>
  <div class="brand">
    <div class="brand-outer">
      <!-- <div class="brand-inner"> -->
        <div class="brand-title">合作品牌</div>
        <div class="brand-line"></div>
        <div class="brand-row">
          <a href="https://www.instagram.com/sidd.blue/" target="_blank">
            <img class="brand-logo" src="@/assets/img/brand/sidd.png" alt="logo">
          </a>
          <div class="brand-sidd">
            <div class="brand-text1">網站製作設計</div>
            <a href="https://www.instagram.com/sidd.blue/" target="_blank">
              <div class="brand-head">西打藍</div>
              <div class="brand-text2">@sidd.blue</div>
              <div class="brand-more">
                <div>瞭解更多</div>
                <img class="brand-arrow" src="@/assets/img/common/arrow-brand.png" alt="logo">
              </div>
            </a>
          </div>
          <div class="brand-brand-box">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
            <img class="brand-brand" src="@/assets/img/brand/brand1.png" alt="logo">
          </div>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.brand {
  background: white;
  padding: 60px 0px 108px;

  &-outer {
    max-width: 980px;
    margin: 0px auto;
  }

  &-inner {
    
  }

  &-title {
    font-size: 16px;
    text-align: center;
  }

  &-line {
    width: 51px;
    height: 1px;
    background-color: #D4CFCD;
    margin: 8px auto 0px;
  }

  &-row {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  &-logo {
    width: 126px;
    width: 126px;
    margin-right: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-sidd {
    margin-right: 67px;
  }

  &-text1 {
    color: #948C84;
  }

  &-head {
    margin-top: 16px;
    font-size: 14px;
    cursor: text;
  }

  &-text2 {
    color: #948C84;
    margin-top: 2px;
    cursor: text;
  }

  &-more {
    display: flex;
    align-items: flex-end;
    color: black;
    background-color: transparent;
    margin-top: 24px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-arrow {
    width: 21px;
    height: 7px;
    margin-left: 7px;
    background-color: transparent;
  }

  &-brand-box {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
  }

  &-brand {
    width: 76px;
    margin: 0px 12px 24px;
  }

}

</style>
