<template>
  <div class="cart">
    <HeadName :value="'購物車'" />
    <div class="cart-main">
      <div class="cart-outer">
        <div class="cart-title">產品</div>
        <div class="cart-line"></div>

        <div v-for="(shop, index) in shopList"
          :key="index"
          class="cart-box"
        >
          <div class="cart-img"></div>
          <div class="cart-detail">
            <div class="cart-name">{{ shop.name }}</div>
            <div class="cart-price">NT.{{ shop.price }}</div>
            <div class="cart-row cart-desktop">
              <div @click="decreaseShop(index)"
                class="cart-cal"
              >-</div>
              <div class="cart-count">{{ shop.quantity }}</div>
              <div @click="addShop(index)"
                class="cart-cal"
              >+</div>
            </div>
            <div @click="removeShop(index)"
              class="cart-remove"
            >移除</div>
          </div>
          <div class="cart-row cart-rwd">
            <div @click="decreaseShop(index)"
              class="cart-cal"
            >-</div>
            <div class="cart-count">{{ shop.quantity }}</div>
            <div @click="addShop(index)"
             class="cart-cal"
            >+</div>
          </div>
        </div>

      </div>

      <div class="cart-sum">
        <div class="cart-sum-box">
          <div class="cart-sum-remember">小記</div>
          <div class="cart-sum-num">${{ totalPrice }} NTD</div>
        </div>
        <nuxt-link to="/shop/detail">
          <div class="cart-sum-checkout">前往結賬</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useShopStore } from '@/stores/shop'

const shopStore = useShopStore()

const shopList = shopStore.shopList

function decreaseShop(index: Boolean) {
  if(shopList[index].quantity != 1) {
    shopList[index].quantity--
  }
}

function addShop(index: any) {
  if(shopList[index].count > shopList[index].quantity) {
    shopList[index].quantity++
  }
}

function removeShop(index: any) {
  shopList.splice(index, 1)
}

const totalPrice = computed(() => {
  return shopList.reduce((acc: any, shop: any) => acc + shop.price * shop.quantity, 0)
})

// shopStore.addShopItem({ name: 'apple', price: 10 })
// console.log(shopStore.shopList)
// shopStore.removeShopItem(0)
// console.log(shopStore.shopList)

</script>

<style lang="scss" scoped>

.cart {
  max-width: 1014px;
  margin: 0px auto 0px;
  padding: 130px 0px 100px;

  &-desktop {
    display: flex;
  }

  &-rwd {
    display: none!important;
  }

  &-main {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }

  &-outer {
    width: 656px;
  }

  &-title {
    margin-bottom: 26px;
    font-size: 16px;
  }

  &-box {
    width: 656px;
    height: 167px;
    display: flex;
    margin-bottom: 16px;
    padding: 16px;
    background-color: white;
  }

  &-img {
    width: 135px;
    height: 135px;
    margin-right: 27px;
    background-color: rgba(212, 207, 205, 0.5);
  }

  &-detail {
    
  }

  &-name {
    
  }

  &-price {
    margin-top: 7px;
  }

  &-row {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }

  &-cal {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D4CFCD;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    
  }

  &-count {
    width: 59px;
    height: 24px;
    border-top: 1px solid #D4CFCD;
    border-bottom: 1px solid #D4CFCD;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-remove {
    margin-top: 44px;
    font-size: 10px;
    color: #948C84;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-sum {
    
    &-remember {
      font-size: 16px;
    }

    &-num {
      margin-top: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    &-checkout {
      width: 296px;
      height: 52px;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #5E5B52;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
    
  }

}

@media( max-width: 1023px ){

.cart {
  padding: 90px 0px 40px;

  &-desktop {
    display: none;
  }

  &-rwd {
    display: flex!important;;
  }

  &-main {
    flex-direction: column;
    margin-top: 16px;
  }

  &-outer {
    width: 100%;
    padding: 0px 32px;
  }

  &-title {
    margin-bottom: 0px;
  }

  &-line {
    width: 27px;
    height: 1px;
    margin-top: 4px;
    background-color: #948C84;
  }

  &-box {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin: 32px 0px 0px;
    padding: 16px 16px 24px;
  }

  &-img {
    margin-right: 16px;
  }

  &-detail {
    width: calc(100% - 152px);
  }

  &-name {
    
  }

  &-price {
    
  }

  &-row {
    width: 100%;
    margin-top: 16px;
  }

  &-cal {
    width: 32px;
    height: 32px;
    
  }

  &-count {
    width: 100%;
    height: 32px;
  }

  &-remove {
    margin-top: 80px;
  }

  &-sum {
    margin-top: 54px;
    padding: 16px 32px;
    background-color: white;

    &-box {
      display: flex;
      justify-content: space-between;
    }

    &-remember {
      font-size: 14px;
    }

    &-num {
      margin-top: 0px;
      font-size: 16px;
    }

    &-checkout {
      width: 100%;
      margin-top: 12px;
    }
    
  }

}

}

</style>