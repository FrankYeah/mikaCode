<template>
  <div class="articles">
    <HeadName :value="'作品集'" />
    <div class="articles-common-title-box">
      <div class="articles-common-title">媒體受訪</div>
      <div class="articles-common-line"></div>
    </div>

    <div class="articles-media">
      <a href="https://www.instagram.com/sidd.blue/" target="_blank">
        <div class="articles-media-box">
          <div class="articles-media-img"></div>
          <div class="articles-media-row">
            <div class="articles-media-date">2022.06.17</div>
            <div class="articles-media-name">媒體單位</div>
          </div>
          <div class="articles-media-text">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
        </div>
      </a>
      <a href="https://www.instagram.com/sidd.blue/" target="_blank">
        <div class="articles-media-box">
          <div class="articles-media-img"></div>
          <div class="articles-media-row">
            <div class="articles-media-date">2022.06.17</div>
            <div class="articles-media-name">媒體單位</div>
          </div>
          <div class="articles-media-text">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
        </div>
      </a>
    </div>

    <div class="articles-more">
      <div class="articles-more-text">查看更多</div>
      <img class="articles-more-img" src="@/assets/img/common/arrow.png" alt="logo">
    </div>

    <div class="articles-common-title-box">
      <div class="articles-common-title">部落格精選</div>
      <div class="articles-common-line"></div>
    </div>

    <div class="articles-article">
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
      <nuxt-link to="/article/20230217">
        <div class="articles-article-box">
          <div class="articles-article-date">2022.06.17</div>
          <div class="articles-article-head">帶著正確的裝備與知識，快樂上山平安回家 feat. Salomon</div>
          <div class="articles-article-text">台灣又是一個多山且交通便利的地方，自從疫情爆發之後，漸漸的越來越多人的休閒娛樂開始往山上延伸。看著這樣的變化，我心中一則以喜一則以憂，喜是因為我樂見親近大自然成為大眾文化，非常理想化地...</div>
        </div>
      </nuxt-link>
    </div>

    <div class="articles-load">
      <div class="articles-load-text">載入更多</div>
    </div>

  </div>
</template>

<script lang="ts" setup>



</script>

<style lang="scss" scoped>

.articles {
  max-width: 1014px;
  margin: 0px auto 0px;
  padding: 130px 0px 42px;

  &-common {
    

    &-title-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 32px;
    }

    &-title {
      font-size: 16px;
    }

    &-line {
      width: 51px;
      height: 1px;
      margin-top: 8px;
      background-color: #D4CFCD;
    }

  }

  &-media {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    &-box {
      width: 497px;
      margin-top: 13px;
      padding: 24px;
      background-color: white;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    &-img {
      height: 173px;
      background: #F5F5F5;
    }

    &-row {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-date {
      color: #948C84;
    }

    &-name {
     color: #948C84; 
    }

    &-text {
      margin-top: 12px;
      font-size: 20px;
    }

  }
  

  &-more {
    margin: 27px 0px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &-text {
      border-bottom: 1px solid #5E5B52;
    }

    &-img {
      width: 6px;
      height: 4px;
      margin-left: 3px;
    }

  }


  &-article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &-box {
      width: 497px;
      margin-top: 32px;
      padding: 24px 24px 32px;
      background-color: white;
      cursor: pointer;

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
    }

    &-text {
      margin-top: 24px;
      color: #948C84;
    }

  }


  &-load {
    margin-top: 54px;
    display: flex;
    justify-content: center;
    align-items: center;

    &-text {
      width: 128px;
      height: 35px;
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

  }
  

}

@media( max-width: 1023px ){

  .footer {

    &- {
      
    }
    
  }

}

</style>