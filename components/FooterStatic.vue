<template>
  <div class="footer">
    <div class="footer-outer">
      <div class="footer-inner">
        <div class="footer-left">
          <nuxt-link to="/shop"
            class="footer-logo-href"
          >
            <img class="footer-logo" src="@/assets/img/common/logo.png" alt="logo">
          </nuxt-link>
          <div class="footer-row">
            <div class="footer-column">
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">關於謎卡</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">課程</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">聯繫我們</div>
              </nuxt-link>
            </div>
            <div class="footer-column">
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">關於謎卡</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">課程</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">聯繫我們</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">作品集</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link-inner">出版書</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link-inner">畫作</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">商店</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link-inner">畫作</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link-inner">衣服</div>
              </nuxt-link>
            </div>

            <div class="footer-column">
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link">文章</div>
              </nuxt-link>
              <nuxt-link to="/"
                class="footer-link-href"
              >
                <div class="footer-link-inner">媒體報導</div>
              </nuxt-link>
              <nuxt-link to="/"
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
              <el-input v-model="subscript" placeholder="輸入電子郵件訂閱電子報"></el-input>
            </div>
            <div class="footer-btn">訂閱</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">fff</div>
  </div>
</template>

<script lang="ts" setup>

const subscript = ref('1')

</script>

<style lang="scss" scoped>

.footer {

  &-outer {
    background: #948C84;
  }

  &-inner {
    
  }

  &-left {

  }

  &-logo-href {
    
  }

  &-logo {
    
  }

  &-row {
    
  }

  &-column {
    
  }

  &-link-href {
    
  }

  &-link {
    
  }

  &-link-inner {
    
  }

  &-right {
    
  }

  &-right-row {
    
  }

  &-mail {
    
  }

  &-social {
    
  }

  &-input-row {
    
  }

  &-input-box {
    
  }

  &-btn {
    
  }
  

  &-copyright {
    padding: 12px 0px;
    color: white;
    font-size: 10px;
    background: #5E5B52;
  }

}

</style>
