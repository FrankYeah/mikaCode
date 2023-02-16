<template>
  <div class="paint">
    <HeadName :value="'作品集'" />
    <div class="paint-title-row">
      <div class="paint-title">
        <div class="paint-title-text">畫作</div>
        <div class="paint-line"></div>
      </div>
      <nuxt-link to="/book">
        <div class="paint-title">
          <div @mouseover="isShowLinePaint = true"
            @mouseleave="isShowLinePaint = false"
            class="paint-title-text paint-title-less"
          >書籍</div>
          <div v-if="isShowLinePaint" class="paint-line"></div>
        </div>
      </nuxt-link>
    </div>

    <div class="paint-product-row">
      <div @click="showDetail(0)" class="paint-product"></div>
      <div @click="showDetail(1)" class="paint-product"></div>
      <div @click="showDetail(2)" class="paint-product"></div>
      <div @click="showDetail(3)" class="paint-product"></div>
      <div @click="showDetail(4)" class="paint-product"></div>
      <div @click="showDetail(5)" class="paint-product"></div>
      <div @click="showDetail(6)" class="paint-product"></div>
      <div @click="showDetail(7)" class="paint-product"></div>
      <div @click="showDetail(8)" class="paint-product"></div>
      <div @click="showDetail(9)" class="paint-product"></div>
      <div @click="showDetail(10)" class="paint-product"></div>
      <div @click="showDetail(11)" class="paint-product"></div>
    </div>

    <div v-if="isShowPopup" class="paint-popup">
      <div class="paint-popup-outer">
        <img @click="isShowPopup = false" class="paint-popup-close" src="@/assets/img/common/close.png" alt="close">
        <div class="paint-popup-box">
          <div class="paint-popup-img"></div>
          <div class="paint-popup-column">
            <div class="paint-popup-head">作品名稱</div>
            <div class="paint-popup-text">作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述作品敘述</div>
            <nuxt-link to="/shop">
              <div class="paint-popup-btn">前往購買</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

const isShowLinePaint = ref(false)
const isShowPopup = ref(false)

function showDetail(num:number) {
  // formName.value++
  isShowPopup.value = true
}

</script>

<style lang="scss" scoped>

.paint {
  max-width: 1020px;
  margin: 0px auto;
  padding: 130px 0px 109px;

  &-title-row {
    display: flex;
    justify-content: center;
    margin: 40px 0px 23px;
  }

  &-title {
    margin: 0px 73px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  &-title-less {
    color: #D4CFCD;

    &:hover {
      color: #5E5B52;
    }
  }

  &-title-text {
    font-size: 24px;
  }

  &-line {
    width: 27px;
    height: 1px;
    background-color: #948C84;
  }

  &-product-row {

  }

  &-product {
    
  }

  &-popup {

    &-outer {
      
    }

    &-close {
      
    }

    &-box {
      
    }

    &-img {
      
    }

    &-column {
      
    }

    &-head {
      
    }

    &-text {
      
    }

    &-btn {

    }
    
  }

}

</style>