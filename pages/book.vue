<template>
  <div class="book">
    <HeadName :value="'作品集'" />
    <div class="book-title-row">
      <nuxt-link to="/paint">
        <div class="book-title">
          <div @mouseover="isShowLine = true"
            @mouseleave="isShowLine = false"
            class="book-title-text book-title-less"
          >畫作</div>
          <div v-if="isShowLine" class="book-line"></div>
        </div>
      </nuxt-link>
      <nuxt-link to="/book">
        <div class="book-title">
          <div class="book-title-text">書籍</div>
          <div class="book-line"></div>
        </div>
      </nuxt-link>
    </div>
    <div class="book-row">
       <div class="book-img"></div>
        <div class="book-box">
           <div class="book-name">以自由之名</div>
            <div class="book-text">
              原來，自由是心境、是信任，自由不是行為，而是無為。
              二十七歲這一年，時間從互不相連的斷點成為一條悠長的河流。曾經在流浪的旅途中尋找存在的意義；如今藉由拆解與重組自我，揮灑無處安放的情感、釋懷生命的起落。
            </div>
            <div class="book-store-row">
              <a href="https://google.com/" target="_blank">
                <div class="book-store">博客來</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">誠品</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">momo</div>
              </a>
            </div>
        </div>
    </div>
    
    <div class="book-row book-row-reverse">
        <div class="book-box">
           <div class="book-name">留下來生活</div>
            <div class="book-text">
              遙遠的一切竟如此熟悉。
              to每一位仍在路途中、思索離去或遠行在即的人。
              這次，我不再將離開視為宿命，
              我會留下來，用不疾不徐的愛，一起經過一頁又一頁的時光。
            </div>
            <div class="book-store-row">
              <a href="https://google.com/" target="_blank">
                <div class="book-store">博客來</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">誠品</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">momo</div>
              </a>
            </div>
        </div>
        <div class="book-img"></div>
    </div>

    <div class="book-row">
       <div class="book-img"></div>
        <div class="book-box">
           <div class="book-name">在遠方醒來</div>
            <div class="book-text">
              「比起度假、比起短暫的停留，我總希望能在當地住一陣子，過當地人的生活，做一些無聊的事情，例如去超市買菜、去公園散步。於是我想找個理由在一個地方久待，申請了匈牙利的國際志工後，也不等結果便任性地買了機票……」
            </div>
            <div class="book-store-row">
              <a href="https://google.com/" target="_blank">
                <div class="book-store">博客來</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">誠品</div>
              </a>
              <a href="https://google.com/" target="_blank">
                <div class="book-store">momo</div>
              </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const isShowLine = ref(false)

</script>

<style lang="scss" scoped>

.book {
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

  &-row {
    display: flex;
    justify-content: space-between;
    margin-top: 54px;
  }

  &-img {
    width: 327px;
    height: 394px;
    background-color: white;
  }

  &-box {
    width: 560px;
  }

  &-name {
    font-size: 32px;
  }

  &-text {
    margin-top: 42px;
    font-size: 16px;
    color: #948C84;
  }

  &-store-row {
    display: flex;
    margin-top: 72px;
  }

  &-store {
    width: 152px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #948C84;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

}

@media( max-width: 1023px ){

.book {
  padding: 90px 0px 88px;

  &-title-row {
    margin: 32px 0px 32px;
  }

  &-title {
    margin: 0px 36px;
  }

  &-title-less {
    
  }

  &-title-text {
    font-size: 16px;
  }

  &-line {
    
  }

  &-row {
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    padding: 0px 32px 32px;
  }

  &-row-reverse {
    flex-direction: column-reverse;
  }

  &-img {
    max-width: 300px;
    width: 100%;
    height: 300px;
  }

  &-box {
    width: 100%;
  }

  &-name {
    margin-top: 24px;
    font-size: 20px; 
  }

  &-text {
    margin-top: 24px;
  }

  &-store-row {
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  &-store {
    margin: 24px 16px 0px 0px;
  }

}

}

</style>