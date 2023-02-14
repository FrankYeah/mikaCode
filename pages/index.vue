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
      <div class="index-about-box">
        <div class="index-common-header">謎卡 Mika</div>
        <div class="index-common-header-line"></div>
        <div class="index-about-head">一位作家、旅人、講師、同時是個野孩子。</div>
        <div class="index-about-text">曾走訪巴基斯坦、土耳其、埃及、匈牙利等10+個國家，2016年出版第一本旅行文學書《在遠方醒來》，並拿下金石堂當月銷售冠軍。現為自由作家、講師，也在TVBS和女人迷寫專欄。我相信愛與善良的重要性，喜歡大自然、葡萄酒與狗。</div>
        <KnowMore :value="'立即瀏覽'" :link="'about'" />
      </div>
      <img class="index-about-img" src="@/assets/img/common/shop.png" alt="shop">
    </div>

    <!-- project -->
    <div class="index-prjoect">
      <div class="index-common-header">作品集</div>
        <div class="index-common-header-line"></div>
        <div class="index-prjoect-box">
          <div class="index-prjoect-img-box">
            <img class="index-prjoect-img" src="@/assets/img/common/shop.png" alt="shop">
          </div>
          <div class="index-prjoect-right">
            <div class="index-prjoect-head">所謂的「繪畫真理」，我將在畫中告訴你</div>
            <div class="index-prjoect-text">將探索世界的閱歷呈現在畫作中，透過謎卡的畫作看見世界的美</div>
            <KnowMore :value="'立即瀏覽'" :link="'project'" />
          </div>
        </div>
        <div class="index-prjoect-box">
          <div class="index-prjoect-right">
            <div class="index-prjoect-head">當你開始踏上路途，路就會自己展現</div>
            <div class="index-prjoect-text">這些年的故事，我將在書中一五一的告訴你</div>
            <KnowMore :value="'立即瀏覽'" :link="'project'" />
          </div>
          <div class="index-prjoect-img-box">
            <img class="index-prjoect-img" src="@/assets/img/common/shop.png" alt="shop">
          </div>
        </div>
    </div>

    <!-- product -->
    <div class="index-product">
      <div class="index-common-head2">商品</div>
      <div class="index-common-head2-line"></div>
      <div class="index-product-outer">
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img" src="@/assets/img/common/shop.png" alt="shop">
            <div class="index-product-text">書本</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img" src="@/assets/img/common/shop.png" alt="shop">
            <div class="index-product-text">畫作</div>
          </div>
        </nuxt-link>
        <nuxt-link to="/contact">
          <div class="index-product-box">
            <img class="index-product-img" src="@/assets/img/common/shop.png" alt="shop">
            <div class="index-product-text">衣服</div>
          </div>
        </nuxt-link>
      </div>
      <KnowMore :value="'查看全部'" :link="'shop'" />
    </div>
      
    <!-- article -->
    <div class="index-article-">
      <div class="index-common-head2">精選文章</div>
      <div class="index-common-head2-line"></div>
      <div class="index-article-row">
        <div class="index-article-box">
          <div class="index-article-date">2022.06.17</div>
          <div class="index-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="index-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
        <div class="index-article-box">
          <div class="index-article-date">2022.08.23</div>
          <div class="index-article-head">在生活中旅行：深度太魯閣 feat. Gregory Backpacks</div>
          <div class="index-article-text">四百萬年前，菲律賓海洋板塊與歐亞大陸板塊碰撞，將臺灣這座島嶼擠出海面，慢慢隆起的中央山脈，受到風化侵蝕作用而剝離，大理岩因而露出地表。這些大理岩受到立霧溪長期侵蝕的下切作用，與地殼不斷隆起上升，形成幾乎垂直的...</div>
        </div>
      </div>
      <KnowMore :value="'查看全部'" :link="'article'" />
    </div>

    <brandStatic />
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

.footer {

  &-outer {
    background: #948C84;
  }

  &-inner {
    
  }

  &-title {
    
  }

  &-row {
    
  }

  &-logo {
    
  }

  &-sidd {
    
  }

  &-text {
    
  }

  &-head {
    
  }

  &-more {
    
  }

  &-arrow {
    
  }

  &-brand-box {
    
  }

  &-brand {
    
  }

  &-copyright {
    padding: 12px 0px;
    color: white;
    font-size: 10px;
    background: #5E5B52;
  }

}

</style>
