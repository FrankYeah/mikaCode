<template>
  <div class="header">
    <div class="header-outer">
      <div class="header-desktop">
        <div class="header-center">
          <nuxt-link to="/"
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
              <div @click="isShowProject = !isShowProject"
                @mouseover="isShowProject = !isShowProject"
                class="header-item-title-hover"
              >作品集</div>
              <img class="header-item-img" src="@/assets/img/common/arrow.png" alt="arrow">
              <div v-if="isShowProject"
                @click="closeProjectShop"
                @mouseover="isShowProject = true"
                @mouseleave="isShowProject = false"
                class="header-item-box"
              >
                <nuxt-link to="/paint">
                  <div class="header-item-box-text">畫作</div>
                </nuxt-link>
                <nuxt-link to="/book">
                  <div class="header-item-box-text">書籍</div>
                </nuxt-link>
              </div>
            </div>
            <div class="header-item header-item-hover">
              <div @click="isShowShop = !isShowShop"
               @mouseover="isShowShop = !isShowShop"
               class="header-item-title-hover"
              >商店</div>
              <img class="header-item-img" src="@/assets/img/common/arrow.png" alt="arrow">
              <div v-if="isShowShop"
                @click="closeProjectShop"
                @mouseover="isShowShop = true"
                @mouseleave="isShowShop = false"
                class="header-item-box"
              >
                <nuxt-link to="/shop/list">
                  <div class="header-item-box-text">畫作</div>
                </nuxt-link>
                <nuxt-link to="/shop/list">
                  <div class="header-item-box-text">衣服</div>
                </nuxt-link>
                <nuxt-link to="/shop/list">
                  <div class="header-item-box-text">書籍</div>
                </nuxt-link>
              </div>
            </div>
            <nuxt-link to="/course"
              class="header-item-href"
            >
              <div class="header-item">課程</div>
            </nuxt-link>
            <nuxt-link to="/articles"
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
          <nuxt-link to="/shop/cart"
            :class="['header-shop-href', {'header-shop-with': shopStore.shopList.length > 0}]"
          >
            <img class="header-shop"
              src="@/assets/img/common/shop.png" alt="shop"
             >
          </nuxt-link>
          <div class="header-lang">
            <div @click="setLocale('zh')"
              :class="['header-lang-ch', {'header-lang-select': isZh == 'zh'}]"
             >中文</div>
            ｜
            <div @click="setLocale('en')"
             :class="['header-lang-ch', {'header-lang-select': isZh == 'en'}]"
            >EN</div>
          </div>
        </div>
      </div>

      <div class="header-rwd">
        <nuxt-link to="/"
          class="header-rwd-logo-href"
        >
          <img class="header-rwd-logo" src="@/assets/img/common/logo.png" alt="logo">
        </nuxt-link>
        <div class="header-rwd-icon-row">
          <img @click="isShowlang = !isShowlang"
           class="header-rwd-icon"
            src="@/assets/img/common/lang.png"
            alt="lang"
          >
          <nuxt-link to="/shop/list"
            class="header-rwd-icon-href"
          >
            <img class="header-rwd-icon" src="@/assets/img/common/shop.png" alt="shop">
          </nuxt-link>
          <img @click="isShowMenuPopup = true"
            class="header-rwd-icon-menu"
            src="@/assets/img/common/menu.png"
            alt="menu"
          >
        <!-- show -->
        <div v-if="isShowlang"
         class="header-rwd-show"
        >
          <div class="header-rwd-show-lang">
            <div @click="setLocale('zh')"
              :class="['header-rwd-lang', {'header-rwd-lang-select': isZh == 'zh'}]"
            >中文</div>
            <div>｜</div>
            <div @click="setLocale('en')"
              :class="['header-rwd-lang', {'header-rwd-lang-select': isZh == 'en'}]"
            >EN</div>
          </div>
        </div>
        </div>
        <!-- popup -->
        <div v-if="isShowMenuPopup"          
          class="header-rwd-popup"
        >
          <img @click="isShowMenuPopup = false"
           class="header-rwd-popup-close"
            src="@/assets/img/common/closeMenu.png"
            alt="close"
          >
          <nuxt-link to="/about">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-title">關於謎卡</div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="header-rwd-popup-title">作品集</div>
          </nuxt-link>
          <div class="header-rwd-popup-row">
            <nuxt-link to="/paint">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">畫作</div>
            </nuxt-link>
            <nuxt-link to="/book">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">書籍</div>
            </nuxt-link>
          </div>
          
          <nuxt-link to="/">
            <div class="header-rwd-popup-title">商店</div>
          </nuxt-link>
          <div class="header-rwd-popup-row">
            <nuxt-link to="/shop/list">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">全部</div>
            </nuxt-link>
            <nuxt-link to="/shop/list">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">畫作</div>
            </nuxt-link>
          </div>
          <div class="header-rwd-popup-row">
            <nuxt-link to="/shop/list">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">衣服</div>
            </nuxt-link>
            <nuxt-link to="/shop/list">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-text">書籍</div>
            </nuxt-link>
          </div>

          <nuxt-link to="/course">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-title">課程</div>
          </nuxt-link>
          <nuxt-link to="/articles">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-title">文章</div>
          </nuxt-link>
          <nuxt-link to="/contact">
            <div @click="isShowMenuPopup = false" class="header-rwd-popup-title">聯繫我們</div>
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import { useI18n } from 'vue-i18n'
import { useShopStore } from '@/stores/shop'

// 桌面版 hover

const isShowProject = ref(false)
const isShowShop = ref(false)

function closeProjectShop() {
  isShowProject.value = false
  isShowShop.value = false
}

// 判斷是否為首頁

const routers = useRouter()

const indexPage = ref(true)

if(routers.currentRoute.value.path == '/') {
  indexPage.value = true
} else {
  indexPage.value = false
}

// 手機版 popup

const isShowMenuPopup = ref(false)
const isShowlang = ref(false)

// 語言切換

const { locale, setLocale } = useI18n()

const isZh = ref('zh')
isZh.value = locale.value

watch(
  () => locale.value,
  (currentLang, previousLang) => {
    isZh.value = currentLang
  }
)

// 購物車

const shopStore = useShopStore()

// shopStore.addShopItem({ name: 'apple', price: 10 })
// console.log(shopStore.shopList)
// shopStore.removeShopItem(0)
// console.log(shopStore.shopList)


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
  z-index: 1;

  &-outer {
    max-width: 1280px;
    padding: 0px 20px;
  }

  &-desktop {

  }

  &-rwd {
    display: none;
  }

  &-center {
    
  }

  &-logo-href {
    
    &:hover {
      opacity: 0.7;
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
      opacity: 0.7;
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
      opacity: 0.7;
    }
  }

  &-item-img {
    width: 6px;
    height: 4px;
    margin-left: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-item-box {
    position: absolute;
    top: 24px;
    width: 98px;
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
      opacity: 0.7;
    }
    
  }

  &-shop {

  }

  &-shop-with {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      right: 0px;
      top: 0px;
      width: 10px;
      height: 10px;
      background-color: #FF0000;
      border-radius: 100%;
    }
  }

  &-lang {
    display: flex;
    margin-top: 13px;
  }

  &-lang-ch {
    color: #D4CFCD;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-lang-select {
    color: #5E5B52;
  }

}

@media( max-width: 1023px ){

.header {
  

  &-outer {
    width: 100%;
  }

  &-desktop {
    display: none;
  }

  &-rwd {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-logo-href {

    }

    &-logo {
      width: 66px;
      height: 33px;
    }

    &-icon-row {
      display: flex;
      align-items: center;
    }

    &-icon {
      width: 19px;
      height: 19px;
      margin-right: 18px;
    }

    &-icon-menu {
      width: 16px;
      height: 16px;
    }

    &-icon-href {

    }

    &-show {
      position: absolute;
      top: 46px;
      padding: 12px 16px;
      border-radius: 2px;
      background-color: white;
    }

    &-show-lang {
      display: flex;
    }

    &-lang {
      color: #D4CFCD;
    }

    &-lang-select {
      color: #5E5B52;
    }

    &-popup {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100vw;
      padding: 24px 24px 64px 32px;
      background-color: white;
      z-index: 2;

      &-close {
        width: 38px;
        height: 38px;
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      &-title {
        margin-top: 24px;
        font-size: 16px;
      }

      &-row {
        display: flex;
        
        & a:first-child {
          margin-right: 160px;
        }
      }

      &-text {
        margin-top: 12px;
        font-size: 14px;
        color: #948C84;
      }

    }
  }

}

}

</style>
