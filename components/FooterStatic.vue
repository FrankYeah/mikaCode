<template>
  <div class="footer">
    <div class="footer-outer">
      <div class="footer-inner">
        <div class="footer-left">
          <nuxt-link to="/"
            class="footer-logo-href"
          >
            <img class="footer-logo" src="@/assets/img/common/logo-white.png" alt="logo">
          </nuxt-link>
          <div class="footer-row">
            <div class="footer-column">
              <nuxt-link to="/about"
                class="footer-link-href"
              >
                <div class="footer-link">關於謎卡</div>
              </nuxt-link>
              <nuxt-link to="/course"
                class="footer-link-href"
              >
                <div class="footer-link">課程</div>
              </nuxt-link>
              <nuxt-link to="/contact"
                class="footer-link-href"
              >
                <div class="footer-link">聯繫我們</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/book"
                class="footer-link-href"
              >
                <div class="footer-link">作品集</div>
              </nuxt-link>
              <nuxt-link to="/book"
                class="footer-link-href"
              >
                <div class="footer-link-inner">出版書</div>
              </nuxt-link>
              <nuxt-link to="/paint"
                class="footer-link-href"
              >
                <div class="footer-link-inner">畫作</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/shop/list"
                class="footer-link-href"
              >
                <div class="footer-link">商店</div>
              </nuxt-link>
              <nuxt-link to="/shop/list"
                class="footer-link-href"
              >
                <div class="footer-link-inner">畫作</div>
              </nuxt-link>
              <nuxt-link to="/shop/list"
                class="footer-link-href"
              >
                <div class="footer-link-inner">衣服</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/articles"
                class="footer-link-href"
              >
                <div class="footer-link">文章</div>
              </nuxt-link>
              <nuxt-link to="/articles"
                class="footer-link-href"
              >
                <div class="footer-link-inner">媒體報導</div>
              </nuxt-link>
              <nuxt-link to="/articles"
                class="footer-link-href"
              >
                <div class="footer-link-inner">精選文章</div>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="footer-right">
          <div class="footer-right-row">
            <div class="footer-mail">mikaontheroad@outlook.com</div>
            
            <a href="https://www.facebook.com/mikaontheroad" target="_blank">
              <img class="footer-social" src="@/assets/img/common/fb.png" alt="logo">
            </a>
            <a href="https://www.instagram.com/mika_ontheroad/" target="_blank">
              <img class="footer-social" src="@/assets/img/common/ig.png" alt="logo">
            </a>
          </div>
          <div class="footer-input-row">
            <div class="footer-input-box">
              <el-input v-model="subscript"
                placeholder="輸入電子郵件訂閱電子報"
                class="footer-input-element"
              ></el-input>
            </div>
            <div class="footer-btn">訂閱</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">Copyright © 2022 MikaonTheRoad. All rights reserved.</div>
  </div>
</template>

<script lang="ts" setup>

const subscript = ref('')

</script>

<style>

.el-input__wrapper {
  border: 0px;
  border-radius: 0px;
  height: 38px;
}

</style>

<style lang="scss" scoped>

.footer {
  color: white;

  &-outer {
    display: flex;
    background: #948C84;
  }

  &-inner {
    max-width: 1020px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 32px auto 54px;
  }

  &-left {

  }

  &-logo-href {
    
  }

  &-logo {
    margin-bottom: 19px;
    
    &:hover {
      opacity: 0.7;
    }
  }

  &-row {
    display: flex;
  }

  &-column {
    margin-right: 64px;

    &:last-child {
      margin-right: 0px;
    }
  }

  &-link-href {
    
  }

  &-link {
    margin-bottom: 12px;
    color: white;
    
    &:hover {
      opacity: 0.7;
    }
  }

  &-link-inner {
    margin-bottom: 12px;
    color: white;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  &-right {
    
  }

  &-right-row {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 19px;
  }

  &-mail {
    color: white;
    margin-right: 3px;
  }

  &-social {
    margin-left: 16px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  &-input-row {
    display: flex;
  }

  &-input-box {
    
  }

  &-input-element {
    width: 254px;
    border-radius: 100%;
  }

  &-btn {
    width: 86px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: #5E5B52;
    color: white;
  }
  

  &-copyright {
    padding: 12px 0px;
    color: white;
    font-size: 10px;
    text-align: center;
    background: #5E5B52;
  }

}

</style>
