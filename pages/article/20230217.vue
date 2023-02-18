<template>
  <div class="article">
    <div class="article-box">
      <div class="article-main">
        <div class="article-date">2022.06.17</div>
        <div class="article-title">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
        <div class="article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地相信更多人看見台灣的美麗，便會有更多人願意保護它；而憂，則是因為現實往往與理想有落差，登山潮的爆發，許許多多民眾帶著在城市裡逛街的心情往山林裡走去，不僅不尊重大自然、也將自己暴露在危險之中。</div>
        <img class="article-img" src="@/assets/img/person/6.jpg" alt="person">
        <div class="article-text">
          今天想來聊聊關於爬「郊山」的裝備與注意事項：郊山是指大約在海拔1500公尺以下的登山路線，這類路線大多交通方便且可一天結束。雖然如此，郊山的路線時常四通八達，因此而綜錯複雜，千萬不可輕忽。
          一、衣著：
          避免愛吸水的棉質或沈重的牛仔布料。以透氣排汗為主，防風（防水）外套一定要帶，隨時若變天都派得上用場。記得遵從洋蔥式穿法，不管事起風了或是走熱了，都能隨時調節自己的溫度，保持在最佳舒適狀態。另外，戴帽子也可以防曬、避免林間的小蟲蟲卡在頭髮裡。
          二、鞋子：
          我自己以前在走郊山的時候，總會有一點困擾該穿什麼樣的鞋子，一般運動鞋容易濕、滑，保護力不足，然而登百岳穿的中筒登山鞋，雖然保護力強，但走起來又嫌沈重。
        </div>
        <img class="article-img" src="@/assets/img/person/7.jpg" alt="person">
        <div class="article-text">直到我找到Salomon OUTline Prism GTX低筒防水登山鞋，特別適合一日輕裝健行，重量只有290g，如跑鞋般靈活，同時又擁有5mm深鞋齒，抓地力表現好，可以適應眼望而去的各種地形；每當我的好奇心一來，需要爬上跳下、探究神秘景致的時候，正好成為了協助我的好伙伴，不僅提升了步行間的自在感，也大大減少走平路的負擔。</div>
      </div>
      <div class="article-hot">
        <div class="article-hot-box">
          <div class="article-hot-title">熱門文章</div>
          <nuxt-link to="/article/20230217">
            <div class="article-hot-text">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          </nuxt-link>
          <nuxt-link to="/article/20230217">
            <div class="article-hot-text">我的旅行必備Top 5 | feat. Microsoft Surface</div>
          </nuxt-link>
        </div>
        <div class="article-hot">
          <div class="article-hot-title">精選文章</div>
          <nuxt-link to="/article/20230217">
            <div class="article-hot-text">親眼看世界：Smile近視雷射，術後心得 feat. Salomon</div>
          </nuxt-link>
          <nuxt-link to="/article/20230217">
            <div class="article-hot-text">女子的澎湖之旅 feat. Panasonic 奈米水離子吹風機</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.article {
  max-width: 1014px;
  margin: 0px auto 0px;
  padding: 145px 0px 0px;
  border-left: 1px solid #948C84;
  border-right: 1px solid #948C84;

  &-box {
    display: flex;
    justify-content: space-between;
  }

  &-main {
    width: 730px;
    padding: 0px 24px 78px;
    // background-color: white;
  }

  &-date {
    color: #948C84;
  }

  &-title {
    margin-top: 15px;
    font-size: 20px;
  }

  &-text {
    margin-top: 24px;
    font-size: 14px;
    color: #948C84;
    letter-spacing: 1.8px;
    line-height: 1.4;
  }

  &-img {
    width: 100%;
    margin-top: 22px;
  }

  &-hot {
    width: 265px;

    &-box {
      margin-bottom: 16px;
    }

    &-title {
      font-size: 14px;
    }

    &-text {
      color: #948C84;
      text-decoration: underline;
      margin-top: 16px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
    
  }

}

</style>