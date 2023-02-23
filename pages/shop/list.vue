<template>
  <div class="list">
    <HeadName :value="'商店'" />
    <div class="list-main">
      <div class="list-tag-box">
        <div @click="showAll"
         :class="['list-tag list-tag-underline', {'list-tag-underline': selectShow.all}]">
        全部</div>
        <div @click="showPaint"
         :class="['list-tag', {'list-tag-underline': selectShow.paint}]"
         >畫作</div>
        <div @click="showClothes"
         :class="['list-tag', {'list-tag-underline': selectShow.clothes}]"
         >衣服</div>
        <div @click="showBook"
         :class="['list-tag', {'list-tag-underline': selectShow.book}]"
         >書籍</div>
      </div>
      <div class="list-outer">
        <div v-if="selectShow.all || selectShow.paint" class="list-inner">
          <div class="list-title">畫作</div>
          <div class="list-line"></div>
          <div class="list-box">
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
          </div>
        </div>

        <div v-if="selectShow.all || selectShow.clothes" class="list-inner">
          <div class="list-title">衣服</div>
          <div class="list-line"></div>
          <div class="list-box">
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
          </div>
        </div>

        <div v-if="selectShow.all || selectShow.book" class="list-inner">
          <div class="list-title">書籍</div>
          <div class="list-line"></div>
          <div class="list-box">
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
            <nuxt-link class="list-href" to="/shop/product">
              <div class="list-img"></div>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

function showAll() {
  selectShow.all = true
  selectShow.paint = false
  selectShow.clothes = false
  selectShow.book = false
}

function showPaint() {
  selectShow.all = false
  selectShow.paint = true
  selectShow.clothes = false
  selectShow.book = false
}

function showClothes() {
  selectShow.all = false
  selectShow.paint = false
  selectShow.clothes = true
  selectShow.book = false
}

function showBook() {
  selectShow.all = false
  selectShow.paint = false
  selectShow.clothes = false
  selectShow.book = true
}

const selectShow = reactive({
 all: true,
 paint: false,
 clothes: false,
 book: false
})

</script>

<style lang="scss" scoped>

.list {
  max-width: 1014px;
  margin: 0px auto 0px;
  padding: 130px 0px 100px;

  &-main {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  &-tag-box {
    margin-right: 130px;
  }

  &-tag {
    margin-bottom: 14px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-tag-underline {
    text-decoration: underline;
  }

  &-outer {
    width: 814px;
  }

  &-inner {
    
  }

  &-title {
    font-size: 24px;
  }

  &-line {
    width: 27px;
    height: 1px;
    margin: 4px 0px 24px;
    background-color: #948C84;;
  }

  &-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-img {
    width: 250px;
    height: 250px;
    margin-bottom: 36px;
    background-color: white;

    &:hover {
      opacity: 0.7;
    }
  }

  &-href {
    
  }

  /* 如果最後一行是2個元素 */
  // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/
  &-href:last-child:nth-child(3n-2) {
    margin-right: 280px;
  }

  &-href:last-child:nth-child(3n-1) {
    margin-right: 280px;
  }

}

@media( max-width: 1023px ){

.list {
  padding: 90px 0px 32px;

  &-main {
    flex-direction: column;
    margin-top: 21px;
    padding: 0px 32px;
  }

  &-tag-box {
    max-width: 500px;
    display: flex;
    margin: 0px auto 32px;
  }

  &-tag {
    margin: 0px 40px 0px 0px;
    font-size: 14px;

    &:last-child {
      margin: 0px;
    }
  }

  &-tag-underline {
    
  }

  &-outer {
    max-width: 500px;
    width: 100%;
    margin: auto;
  }

  &-inner {
    
  }

  &-title {
    margin-top: 0px;
    font-size: 16px;
  }

  &-line {
    width: 27px;
    height: 1px;
    margin: 4px 0px 16px;
  }

  &-box {
    justify-content: center;
  }

  &-img {
    max-width: 500px;
    width: 100%;
    height: 330px;
    margin: 0px auto 32px;
  }

  &-href {
    width: 100%;
  }
  
  &-href:last-child:nth-child(3n-2) {
    margin-right: 0px;
  }

  &-href:last-child:nth-child(3n-1) {
    margin-right: 0px;
  }

}

}

</style>