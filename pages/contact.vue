<template>
  <div class="about">
    <div class="about-outer">
    <HeadName :value="'聯絡我們'" />
    <div class="about-row">
      <div class="about-head">有問題想問謎卡嗎？或是合作邀約？寫下聯絡資訊，將會盡快回覆您</div>
      <div class="about-box">
        <div class="about-title">姓名</div>
        <el-input v-model="formName"
          placeholder="輸入您的姓名"
          class="about-input"
        ></el-input>
        <div class="about-title">聯絡信箱</div>
        <el-input v-model="formMail"
          placeholder="輸入您的聯絡信箱"
          class="about-input"
        ></el-input>
        <!-- <div class="about-title">聯絡方式</div>
        <el-input v-model="name"
          placeholder="選擇聯繫方式"
          class="about-input"
        ></el-input> -->
        <div class="about-title">聯絡資訊</div>
        <el-input v-model="formContent"
          type="textarea"
          :rows="4"
          placeholder="想對我們說什麼呢？"
          class="about-textarea"
        ></el-input>
        <!-- <div class="about-privacy">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div> -->
        <div @click="sendForm" class="about-btn">送出</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>

const formName = ref('')
const formMail = ref('')
const formContent = ref('')

function sendForm() {
  // formName.value++
  alert('send')
}

</script>

<style lang="scss" scoped>

.about {
  padding: 130px 0px 40px;

  &-outer {
    max-width: 1020px;
    margin: 0px auto;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  &-head {
    width: 492px;
    font-size: 20px;
  }

  &-box {
    
  }

  &-title {
  }

  &-input {
    width: 390px;
    margin: 13px 0px;
    border: 1px solid #D4CFCD;
    background-color: white;
  }

  &-textarea {
    width: 390px;
    margin: 13px 0px;
    border: 1px solid #D4CFCD;
  }

  &-btn {
    width: 170px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
    background-color: #5E5B52;
    color: white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

}

@media( max-width: 1023px ){

.about {
  padding: 90px 0px 118px;

  &-outer {
    max-width: 500px;
  }

  &-row {
    flex-direction: column;
    margin-top: 32px;
    padding: 0px 32px;
  }

  &-head {
    width: 100%;
    font-size: 16px;
  }

  &-box {
    width: 100%;
    margin-top: 64px;
  }

  &-title {
    
  }

  &-input {
    width: 100%;
  }

  &-textarea {
    width: 100%;
  }

  &-btn {
    width: 100%;
    height: 38px;
    margin-top: 12px;
  }

}

}

</style>