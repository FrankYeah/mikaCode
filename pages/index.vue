<template>
  <div class="index">
    <div class="index-bg">
      <div class="index-bg-box">
        <div class="index-bg-head">謎卡 Mika</div>
        <div class="index-bg-text">一位作家、旅人、講師、同時是個野孩子。</div>
      </div>
    </div>

    <!-- about -->
    <div class="index-about">
      <div class="index-about-outer">
        <div class="index-about-box">
          <div class="index-common-header">謎卡 Mika</div>
          <div class="index-common-header-line"></div>
          <div class="index-about-head">一位作家、旅人、講師、同時是個野孩子。</div>
          <div class="index-about-text">曾走訪巴基斯坦、土耳其、埃及、匈牙利等10+個國家，2016年出版第一本旅行文學書《在遠方醒來》，並拿下金石堂當月銷售冠軍。現為自由作家、講師，也在TVBS和女人迷寫專欄。我相信愛與善良的重要性，喜歡大自然、葡萄酒與狗。</div>
          <KnowMore :value="'了解更多'" :link="'about'" />
        </div>
        <img class="index-about-img" src="@/assets/img/person/3.jpg" alt="shop">
      </div>
    </div>

    <!-- project -->
    <div class="index-project">
      <div class="index-common-header">作品集</div>
        <div class="index-common-header-line"></div>
        <div class="index-project-box">
          <div class="index-project-img-box">
            <img class="index-project-img-paint" src="@/assets/img/paint/paint1.png" alt="shop">
          </div>
          <div class="index-project-right">
            <div class="index-project-head">所謂的「繪畫真理」，我將在畫中告訴你</div>
            <div class="index-project-text">將探索世界的閱歷呈現在畫作中，透過謎卡的畫作看見世界的美</div>
            <KnowMore :value="'立即瀏覽'" :link="'project'" />
          </div>
        </div>
        <div class="index-project-box">
          <div class="index-project-right">
            <div class="index-project-head">當你開始踏上路途，路就會自己展現</div>
            <div class="index-project-text">這些年的故事，我將在書中一五一的告訴你</div>
            <KnowMore :value="'立即瀏覽'" :link="'project'" />
          </div>
          <img class="index-project-img" src="@/assets/img/book/cover.png" alt="shop">
        </div>
    </div>

    <!-- product -->
    <div class="index-product">
      <div class="index-common-head2">商品</div>
      <div class="index-common-head2-line"></div>
      <div class="index-product-outer">
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img1" src="@/assets/img/book/book1.png" alt="shop">
            <div class="index-product-text">書本</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img2" src="@/assets/img/paint/paint1.png" alt="shop">
            <div class="index-product-text">畫作</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img3" src="@/assets/img/product/shirt1.png" alt="shop">
            <div class="index-product-text">衣服</div>
          </div>
        </nuxt-link>
      </div>
      <KnowMore class="index-product-all" :value="'查看全部'" :link="'shop'" />
    </div>
      
    <!-- article -->
    <div class="index-article">
      <div class="index-common-head2">精選文章</div>
      <div class="index-common-head2-line"></div>
      <div class="index-article-row">
        <nuxt-link to="/articles">
          <div class="index-article-box">
            <div class="index-article-date">2022.06.17</div>
            <div class="index-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
            <div class="index-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/articles">
          <div class="index-article-box">
            <div class="index-article-date">2022.08.23</div>
            <div class="index-article-head">在生活中旅行：深度太魯閣 feat. Gregory Backpacks</div>
            <div class="index-article-text">四百萬年前，菲律賓海洋板塊與歐亞大陸板塊碰撞，將臺灣這座島嶼擠出海面，慢慢隆起的中央山脈，受到風化侵蝕作用而剝離，大理岩因而露出地表。這些大理岩受到立霧溪長期侵蝕的下切作用，與地殼不斷隆起上升，形成幾乎垂直的...</div>
          </div>
        </nuxt-link>
      </div>
      <KnowMore class="index-article-all" :value="'查看全部'" :link="'article'" />
    </div>

    <brandStatic />
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

.index {

  &-common-header {
    font-size: 16px;
    background-color: transparent;
  }

  &-common-header-line {
    width: 51px;
    height: 1px;
    margin-top: 8px;
    background-color: #D4CFCD;
  }

  &-common-head2 {
    font-size: 16px;
    text-align: center;
  }

  &-common-head2-line {
    width: 51px;
    height: 1px;
    background-color: #D4CFCD;
    margin: 8px auto 0px;
  }
  
  &-bg {
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    background-image: url('../assets/img/person/1.jpg');

    &-box {
      text-align: center;
      padding-top: 40vh;
    }

    &-head {
      font-size: 20px;
      color: white;
    }

    &-text {
      margin-top: 8px;
      font-size: 12px;
      color: white;
    }

  }

  // about
  
  &-about {
    background-color: white;

    &-outer {
      max-width: 1020px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px auto;
      padding: 88px 0px;
    }

    &-box {
      
    }

    &-head {
      margin-top: 45px;
    }

    &-text {
      width: 415px;
      margin: 35px 0px 53px;
      color: #948C84;
    }

    &-img {
      width: 300px;
      height: 400px;
    }
  }

  // project
  
  &-project {
    max-width: 1020px;
    margin: 0px auto;
    padding: 120px 0px 30px;

    &-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0px;
    }

    &-img-box {
      padding: 54px 87px;
      background: #FFFFFF;
      box-shadow: 0px 0px 18px rgba(148, 140, 132, 0.12);
    }

    &-img-paint {
      width: 240px;
      height: 240px;
    }

    &-img {
      width: 415px;
      height: 348px;
    }

    &-right {

    }

    &-head {
      width: 540px;
      font-size: 36px;
      color: #948C84;
    }

    &-text {
      margin: 83px 0px 12px;
    }

  }

  // product
  
  &-product {
    padding: 100px 0px 128px;
    text-align: center;
    background-color: white;

    &-outer {
      max-width: 1020px;
      margin: 32px auto 0px;
      display: flex;
      justify-content: space-between;
    }

    &-box {
      position: relative;
      width: 273px;
      height: 290px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 18px rgba(148, 140, 132, 0.12);
      
      &:hover {
        opacity: 0.7;
      }
    }

    &-img1 {
      width: 220px;
    }

    &-img2 {
      width: 180px;
    }

    &-img3 {
      width: 160px;
    }

    &-text {
      position: absolute;
      text-align: center;
      bottom: 13px;
    }

    &-all {
      display: flex;
      justify-content: center;
      margin-top: 34px;
    }

  }

  // article
  
  &-article {
    max-width: 1020px;
    margin: 0px auto 0px;
    padding: 60px 0px;

    &-row {
      display: flex;
      justify-content: space-between;
      margin: 30px 0px;
    }

    &-box {
      width: 450px;
      padding: 24px 24px 32px;
      background: white;
      
      &:hover {
        opacity: 0.7;
      }
    }

    &-date {
      color: #948C84;
    }

    &-head {
      margin-top: 15px;
      font-size: 20px;
      color: #5E5B52;
    }

    &-text {
      margin-top: 24px;
      color: #948C84;
    }

    &-all {
      display: flex;
      justify-content: center;
    }

  }

  

}

</style>
