<template>
  <div class="confirm">
    <HeadName :value="'訂單確認'" />
    <div class="confirm-main">
      <div class="confirm-bg">
        <img class="confirm-logo" src="@/assets/img/common/confirm.png" alt="confirm">
        <div>
          <div class="confirm-head">訂單已確認</div>
          <div class="confirm-desc">訂單編號 20221210001</div>
          <div class="confirm-desc">訂單資訊已發送至您的電子信箱</div>
          <div class="confirm-text">thisismail@gmail.com</div>
        </div>
      </div>
      <div class="confirm-row">
        <div class="confirm-left">
          <div class="confirm-grey">
            <div class="confirm-head">注意事項</div>
            <div class="confirm-text">匯款成功，將會寄一封告知匯款已成功，且訂單才算正式成立並寄送</div>
          </div>
          <div class="confirm-head mt-5">顧客資訊</div>
          <div class="confirm-desc">名稱</div>
          <div class="confirm-text">黃小明</div>
          <div class="confirm-desc">聯繫信箱</div>
          <div class="confirm-text">thisismail@gmail.com</div>

          <div class="confirm-head mt-8">訂單明細</div>
          <div class="confirm-desc">總金額</div>
          <div class="confirm-text">NT.7150</div>
        </div>
        <div class="confirm-right">
          <div class="confirm-head">訂單明細</div>
          <div class="confirm-text">總金額</div>
          <div class="confirm-text">NT.7150</div>
          <div class="confirm-line"></div>

          <div class="confirm-text">產品名稱</div>
          <div class="confirm-desc">NT.5000</div>
          <div class="confirm-desc">數量 2</div>

          <div class="confirm-text confirm-content">產品名稱</div>
          <div class="confirm-desc">NT.1000</div>
          <div class="confirm-desc">數量 3</div>

          <div class="confirm-text confirm-content">運費</div>
          <div class="confirm-desc">NT.50</div>
          <div class="confirm-desc">數量 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.confirm {
  min-height: calc(100vh - 270px);
  max-width: 1016px;
  margin: 0px auto 0px;
  padding: 130px 0px 80px;

  &-main {

  }

  &-bg {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 24px 0px;
    background-color: rgba(white, 0.5);
  }

  &-logo {
    width: 55px;
    height: 55px;
    margin-right: 26px;
  }

  &-head {
    font-size: 16px;
  }

  &-desc {
    margin-top: 8px;
    color: #948C84;
  }

  &-text {
    margin-top: 8px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }

  &-left {
    width: 464px;
    padding: 24px;
    background-color: rgba(white, 0.5);
  }

  &-grey {
    padding: 8px 12px;
    background-color: rgba(148, 140, 132, 0.5);
    text-align: center;
  }

  &-right {
    width: 520px;
    padding: 24px;
    background-color: rgba(white, 0.5);
  }

  &-line {
    height: 1px;
    margin: 16px 0px 16px;
    background-color: #D4CFCD;
  }

  &-content {
    margin-top: 24px;
  }

}

@media( max-width: 1023px ){

.confirm {
  padding: 90px 0px 64px;

  &-main {
    margin-top: 32px;
  }

  &-bg {
    padding: 24px 32px;
  }

  &-logo {
    
  }

  &-head {

  }

  &-desc {
    
  }

  &-text {
    
  }

  &-row {
    flex-direction: column;
    margin-top: 24px;
  }

  &-left {
    width: 100%;
    padding: 24px 32px;
  }

  &-grey {
    
  }

  &-right {
    width: 100%;
    margin-top: 24px;
    padding: 24px 32px;
  }

  &-line {
    
  }

  &-content {
    
  }

}

}

</style>