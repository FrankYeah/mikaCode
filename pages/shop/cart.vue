<template>
  <div class="cart">
    <HeadName :value="'購物車'" />
    <div class="cart-main">
      <div class="cart-outer">
        <div class="cart-title">產品</div>
        <div class="cart-box">
          <div class="cart-img"></div>
          <div class="cart-detail">
            <div class="cart-name">產品名稱</div>
            <div class="cart-price">NT.5000</div>
            <div class="cart-row">
              <div class="cart-cal">-</div>
              <div class="cart-count"></div>
              <div class="cart-cal">+</div>
            </div>
            <div class="cart-remove">移除</div>
          </div>
        </div>
        <div class="cart-box">
          <div class="cart-img"></div>
          <div class="cart-detail">
            <div class="cart-name">產品名稱</div>
            <div class="cart-price">NT.5000</div>
            <div class="cart-row">
              <div class="cart-cal">-</div>
              <div class="cart-count"></div>
              <div class="cart-cal">+</div>
            </div>
            <div class="cart-remove">移除</div>
          </div>
        </div>
        <div class="cart-box">
          <div class="cart-img"></div>
          <div class="cart-detail">
            <div class="cart-name">產品名稱</div>
            <div class="cart-price">NT.5000</div>
            <div class="cart-row">
              <div class="cart-cal">-</div>
              <div class="cart-count"></div>
              <div class="cart-cal">+</div>
            </div>
            <div class="cart-remove">移除</div>
          </div>
        </div>
      </div>

      <div class="cart-sum">
        <div class="cart-sum-remember">小記</div>
        <div class="cart-sum-num">$7,100 NTD</div>
        <nuxt-link to="/shop/detail">
          <div class="cart-sum-checkout">前往結賬</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.cart {
  max-width: 1014px;
  margin: 0px auto 0px;
  padding: 130px 0px 100px;

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

  .footer {

    &- {
      
    }
    
  }

}

</style>