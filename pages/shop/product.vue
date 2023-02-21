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
        <div class="product-name">產品名稱</div>
        <div class="product-line"></div>
        <div class="product-price-name">價格：</div>
        <div class="product-price">NT 1000</div>
        <div class="product-quantity">數量</div>
        <div class="product-row">
          <div @click="addNum--" class="product-cal">-</div>
          <div class="product-num">{{ addNum }}</div>
          <div @click="addNum++" class="product-cal">+</div>
        </div>
        <div class="product-add">加入購物車</div>
        <div class="product-desc">商品說明:</div>
        <div class="product-text">產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述產品描述</div>
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

const addNum = ref(1)

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

  .footer {

    &- {
      
    }
    
  }

}

</style>