<template>
  <div class="product">
    <div class="product-main">
      <div class="product-img-box">
        <div class="product-img"></div>
        <nuxt-link to="/shop/list">
          <div class="product-back">回上一頁</div>
        </nuxt-link>
      </div>
      <div class="product-detail">
        <div class="product-name">{{ shopData[0].name }}</div>
        <div class="product-line"></div>
        <div class="product-price-name">價格：</div>
        <div class="product-price">NT {{ shopData[0].price }}</div>
        <div class="product-quantity">數量</div>
        <div class="product-row">
          <div @click="decreaseShop" class="product-cal">-</div>
          <div class="product-num">{{ addNum }}</div>
          <div @click="addShop" class="product-cal">+</div>
        </div>
        <div @click="addToCart" class="product-add">加入購物車</div>
        <div class="product-desc">商品說明:</div>
        <div class="product-text">{{ shopData[0].des }}</div>
        <div class="product-desc">送貨方式：</div>
        <div class="product-text">
          7-11 取貨付款
          全家 取貨付款
          宅配 
        </div>
        <div class="product-desc">付款方式：</div>
        <div class="product-text">
          信用卡（支援Visa, Master, JCB）
          銀行轉帳／ATM
          LINE Pay
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

import { useShopStore } from '@/stores/shop'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

const addNum = ref(1)

// 取得當前購物車的資訊

const shopStore:any = useShopStore()

const shopList = shopStore.shopList
const shopAll = shopStore.shopAll

const route:any = useRoute()

const ShopType: string = route.query.id.substring(0, route.query.id.length - 1);

const shopData = shopAll[ShopType].filter((shop: any) => shop.href === route.query.id)

function decreaseShop() {
  if(addNum.value == 0) return
  addNum.value--
}

function addShop() {
  if(shopData[0].count < addNum.value) return
  addNum.value++
}

function addToCart() {
  const index = shopList.findIndex((shop: any) => shop.name === shopData[0].name)
  if(addNum.value == 0){
    if(index != -1) {
      // 有存過刪除
      shopList.splice(index, 1)
    }
    // 無存過不用動
  } else {
    if(index != -1) {
      // 有存過刪除
      shopList.splice(index, 1)
      // 塞入值
      addShopToCart()
    } else {
      // 沒存過則塞入值
      addShopToCart()
    }
  }
}

function addShopToCart() {
  shopStore.addShopItem({
    name: shopData[0].name,
    price: shopData[0].price,
    count: shopData[0].count,
    des: shopData[0].des,
    img: shopData[0].img,
    href: shopData[0].href,
    quantity: addNum.value
  })
  // element plus 教學：https://element-plus.org/zh-CN/component/message.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95
  ElMessage({
    message: '成功加入購物車！',
    type: 'success',
  })
}


// shopStore.addShopItem({ name: 'apple', price: 10 })
// console.log(shopStore.shopList)
// shopStore.removeShopItem(0)
// console.log(shopStore.shopList)

</script>

<style lang="scss" scoped>

.product {
  max-width: 1080px;
  margin: 0px auto 0px;
  padding: 95px 26px 0px 42px;
  border-left: 1px solid #948C84;
  border-right: 1px solid #948C84;

  &-main {
    display: flex;
    justify-content: space-between;
    padding: 50px 0px 54px;
  }

  &-img-box {
    width: 360px;
  }

  &-img {
    width: 360px;
    height: 360px;
    background-color: white;
  }

  &-back {
    width: 128px;
    height: 35px;
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #948C84;
    border: 1px solid #948C84;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-detail {
    width: 630px;
  }

  &-name {
    font-size: 16px;
  }

  &-line {
    width: 51px;
    height: 1px;
    margin-top: 8px;
    background-color: #D4CFCD;
  }

  &-price-name {
    margin-top: 32px;
    color: #948C84;
  }

  &-price {
    margin-top: 4px;
    color: #5E5B52;
  }

  &-quantity {
    margin-top: 32px;
    color: #948C84;
  }

  &-row {
    display: flex;
    align-items: center;
    margin-top: 12px;
  }

  &-cal {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D4CFCD;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-num {
    width: 186px;
    height: 38px;
    border-top: 1px solid #D4CFCD;
    border-bottom: 1px solid #D4CFCD;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-add {
    width: 262px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    color: white;
    font-size: 14px;
    background-color: #5E5B52;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-desc {
    margin-top: 40px;
    color: #948C84;
  }

  &-text {
    margin-top: 8px;
    color: #948C84;
  }

}

@media( max-width: 1023px ){

.product {
  padding: 81px 32px 0px;

  &-main {
    flex-direction: column;
    padding: 0px 0px 120px;
  }

  &-img-box {
    display: flex;
    flex-direction: column-reverse;
    max-width: 400px;
    width: 100%;
  }

  &-img {
    width: 100%;
    height: 360px;
    margin-top: 24px;
  }

  &-back {
    width: 74px;
    height: 30px;
    margin-top: 0px;
    font-size: 10px;
  }

  &-detail {
    width: 100%;
  }

  &-name {
    margin-top: 24px;
  }

  &-line {
    
  }

  &-price-name {
    margin-top: 16px;
  }

  &-price {
    
  }

  &-quantity {
    margin-top: 24px;
  }

  &-row {
    margin-top: 12px;
  }

  &-cal {
    width: 38px;
    height: 38px;
  }

  &-num {
    width: 100%;
    height: 38px;
  }

  &-add {
    width: 100%;
    margin-top: 16px;
  }

  &-desc {
    margin-top: 24px;
  }

  &-text {
    
  }

}

}

</style>