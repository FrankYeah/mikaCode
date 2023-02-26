<template>
  <div class="detail">
    <div class="detail-main">
      <div class="detail-back-row">
        <nuxt-link to="/shop/cart">
          <div class="detail-back-text1">購物車</div>
        </nuxt-link>
        <img class="detail-back-img" src="@/assets/img/common/arrow.png" alt="arrow">
        <div class="detail-back-text2">填寫資料</div>
        <img class="detail-back-img" src="@/assets/img/common/arrow.png" alt="arrow">
        <div class="detail-back-text3">訂單確認</div>
      </div>
      <div class="detail-title">顧客資訊</div>

      <div class="detail-outer">
        <div class="detail-left">
          <div class="detail-bg">
            <div class="detail-head">聯繫信箱</div>
            <div class="detail-input-box">
              <el-input v-model="inputShop.mail"
                placeholder="請輸入電子郵件"
                class="detail-input"
              ></el-input>
            </div>
            <div class="detail-head">姓名</div>
            <div class="detail-input-box">
              <el-input v-model="inputShop.name"
                placeholder="請輸入姓名"
                class="detail-input"
              ></el-input>
            </div>
          </div>
          <div class="detail-title">送貨地址</div>
          <div class="detail-bg">
            <div class="detail-head">地址</div>
            <div class="detail-input-box">
              <el-input v-model="inputShop.address"
                placeholder="請輸入地址"
                class="detail-input"
              ></el-input>
            </div>
          </div>
          <div class="detail-title">付款方式</div>
          <div class="detail-bg"></div>
        </div>

        <div class="detail-right">
          <div class="detail-bg">
            <div class="detail-row">
              <div class="detail-write">小記</div>
              <div class="detail-num">$7,100 NTD</div>
            </div>
            <div class="detail-row">
              <div class="detail-write">宅配運費</div>
              <div class="detail-num">$50 NTD</div>
            </div>
            <div class="detail-line"></div>
            <div class="detail-row">
              <div class="detail-write">總計</div>
              <div class="detail-num detail-total">$7150 NTD</div>
            </div>
            <div class="detail-btn">前往付款</div>
          </div>
          <div class="detail-title">購買項目</div>
          <div class="detail-product">
            <div class="detail-product-img"></div>
            <div class="detail-product-box">
              <div class="detail-product-name">產品名稱</div>
              <div class="detail-product-num">NT.5000</div>
              <div class="detail-product-count">數量 2</div>
            </div>
          </div>
          <div class="detail-product">
            <div class="detail-product-img"></div>
            <div class="detail-product-box">
              <div class="detail-product-name">產品名稱</div>
              <div class="detail-product-num">NT.5000</div>
              <div class="detail-product-count">數量 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useShopStore } from '@/stores/shop'

const inputShop = reactive({
 mail: '',
 name: '',
 address: ''
})

const shopStore = useShopStore()

// shopStore.addShopItem({ name: 'apple', price: 10 })
// console.log(shopStore.shopList)
// shopStore.removeShopItem(0)
// console.log(shopStore.shopList)

</script>

<style lang="scss" scoped>

.detail {
  max-width: 1080px;
  margin: 0px auto;
  padding: 150px 32px 40px;
  border-left: 1px solid #948C84;
  border-right: 1px solid #948C84;

  &-main {

  }

  &-back {

    &-row {
      display: flex;
      align-items: center;
    }

    &-text1 {
      color: #948C84;
      margin-right: 12px;
    }

    &-text2 {
      margin-right: 12px;
    }

    &-text3 {
      color: #D4CFCD;
    }

    &-img {
      width: 6px;
      height: 4px;
      margin-right: 12px;
      transform: rotate(270deg);
    }
    
  }

  &-title {
    margin-top: 24px;
    font-size: 16px;
  }

  &-outer {
    display: flex;
    justify-content: space-between;
  }

  &-left {
    width: 618px;
  }

  &-bg {
    margin-top: 16px;
    padding: 16px 24px;
    background-color: rgba(white, 0.5);
  }

  &-head {
    
  }

  &-input-box {
    margin: 12px 0px;
  }

  &-input {
    
  }

  &-right {
    width: 360px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &-write {
    
  }

  &-num {
    color: #948C84;
  }

  &-line {
    width: 310px;
    height: 1px;
    margin-bottom: 16px;
    background-color: #D4CFCD;
  }

  &-total {
    color: #5E5B52;
  }

  &-btn {
    width: 311px;
    height: 52px;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5E5B52;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &-product {
    display: flex;
    margin-top: 12px;

    &-img {
      width: 85px;
      height: 85px;
      margin-right: 16px;
      background-color: rgba(212, 207, 205, 0.5);
    }

    &-box {
      
    }

    &-name {
      
    }

    &-num {
      margin-top: 8px;
    }

    &-count {
      margin-top: 26px;
    }
    
  }

}

@media( max-width: 1023px ){

.detail {
  padding: 81px 0px 64px;

  &-main {

  }

  &-back {

    &-row {
      padding: 0px 32px;
    }

    &-text1 {
      
    }

    &-text2 {
      
    }

    &-text3 {
      
    }

    &-img {
      
    }
    
  }

  &-title {
    margin-top: 32px;
    padding: 0px 32px;
    font-size: 14px;
  }

  &-outer {
    flex-direction: column;
  }

  &-left {
    width: 100%;
  }

  &-bg {
    padding: 16px 32px;
  }

  &-head {
    
  }

  &-input-box {
    
  }

  &-input {
    
  }

  &-right {
    width: 100%;
    margin-top: 16px;
  }

  &-row {
    
  }

  &-write {
    
  }

  &-num {
    
  }

  &-line {
    width: 100%;
  }

  &-total {
    
  }

  &-btn {
    width: 100%;
    margin-top: 24px;
  }

  &-product {
    padding-left: 32px;

    &-img {
      
    }

    &-box {
      
    }

    &-name {
      
    }

    &-num {
      margin-top: 8px;
    }

    &-count {
      margin-top: 26px;
    }
    
  }

}

}

</style>