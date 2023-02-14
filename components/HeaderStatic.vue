<template>
  <div class="header">
    <div class="header-outer">
      <div class="header-desktop">
        <div class="header-center">
          <nuxt-link to="/shop"
            class="header-logo-href"
          >
            <img class="header-logo" src="@/assets/img/common/logo.png" alt="logo">
          </nuxt-link>
          <div class="header-row">
            <nuxt-link to="/about"
              class="header-item-href"
            >
              <div class="header-item">關於謎卡</div>
            </nuxt-link>
            <div class="header-item header-item-hover">
              <div @mouseover="isShowProject = true"
                class="header-item-title-hover"
              >作品集</div>
              <img class="header-item-img" src="@/assets/img/common/arrow.png" alt="arrow">
              <div v-if="isShowProject"
                @mouseleave="isShowProject = false"
                class="header-item-box"
              >
                <nuxt-link to="/project">
                  <div class="header-item-box-text">畫作</div>
                </nuxt-link>
                <nuxt-link to="/project">
                  <div class="header-item-box-text">書籍</div>
                </nuxt-link>
              </div>
            </div>
            <div class="header-item header-item-hover">
              <div @mouseover="isShowShop = true"
               class="header-item-title-hover"
              >商店</div>
              <img class="header-item-img" src="@/assets/img/common/arrow.png" alt="arrow">
              <div v-if="isShowShop"
                @mouseleave="isShowShop = false"
                class="header-item-box"
              >
                <nuxt-link to="/shop">
                  <div class="header-item-box-text">畫作</div>
                </nuxt-link>
                <nuxt-link to="/shop">
                  <div class="header-item-box-text">衣服</div>
                </nuxt-link>
                <nuxt-link to="/shop">
                  <div class="header-item-box-text">書籍</div>
                </nuxt-link>
              </div>
            </div>
            <nuxt-link to="/class"
              class="header-item-href"
            >
              <div class="header-item">課程</div>
            </nuxt-link>
            <nuxt-link to="/article"
              class="header-item-href"
            >
              <div class="header-item">文章</div>
            </nuxt-link>
            <nuxt-link to="/contact"
              class="header-item-href"
            >
              <div class="header-item">聯繫我們</div>
            </nuxt-link>
          </div>
        </div>

        <div class="header-function">
          <nuxt-link to="/shop"
            class="header-shop-href"
          >
            <img class="header-shop" src="@/assets/img/common/shop.png" alt="shop">
          </nuxt-link>
          <div class="header-lang">
            <div class="header-lang-ch">中文</div>
            ｜
            <div class="header-lang-en">EN</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const isShowProject = ref(false)
const isShowShop = ref(false)

</script>

<style lang="scss" scoped>

.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 12px 0px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(212, 207, 205, 0.5);

  &-outer {
    max-width: 1280px;
    padding: 0px 20px;
  }

  &-desktop {

  }

  &-center {
    
  }

  &-logo-href {
    
    &:hover {
      opacity: 0.8;
    }
  }

  &-logo {
    width: 86px;
    margin: auto;
  }

  &-row {
    display: flex;
    margin-top: 12px;
  }

  &-item-href {
    
    &:hover {
      opacity: 0.8;
    }
  }

  &-item {
    margin: 0px 27px;
  }

  &-item-hover {
    position: relative;
    display: flex;
    align-items: center;
  }

  &-item-title-hover {
    cursor: pointer;
    
    &:hover {
      opacity: 0.8
    }
  }

  &-item-img {
    width: 6px;
    height: 4px;
    margin-left: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-item-box {
    position: absolute;
    top: 24px;
    width: 96px;
    padding: 12px 60px 12px 12px;
    background: white;
    border-radius: 2px;
  }

  &-item-box-text {
    color: #5E5B52;
    padding-bottom: 4px;
    margin-bottom: 8px;
    border-bottom: 1px solid transparent;
    opacity: 0.7;

    &:hover {
      border-bottom: 1px solid #5E5B52;
      opacity: 1;
    }
  }

  &-function {
    position: absolute;
    right: 80px;
    top: 27px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &-shop-href {
    
    &:hover {
      opacity: 0.8;
    }
    
  }

  &-shop {
    
  }

  &-lang {
    display: flex;
    margin-top: 13px;
  }

  &-lang-ch {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-lang-en {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    
  }

}

</style>
