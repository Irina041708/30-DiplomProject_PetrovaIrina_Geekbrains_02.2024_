<template>
  <div class="center content div1">
    <div class="div1__block1">
      <h1 class="div1__block1__h1">
        Фотография 004
      </h1>
      <a href="#" class="div1__block1__img">
        <img class="div1__block1__img__img1" src="@/assets/img/004.jpg"
          alt="3str-blog_details-section9-div1-block1-img" />
      </a>
      <div class="div1__block1__elem3">
        <p class="data">December,2018</p>
        <p class="menu">350р.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foto004'
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.div1 {
  width: 67%;
  display: flex;
  flex-direction: column;

  &__block1 {
    display: flex;
    flex-direction: column;

    &__h1 {
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 63px;
      color: rgba(41, 47, 54, 1);
    }

    &__img {
      padding-top: 21px;
      // height: 539px;
      border-radius: 62px;

      &__img1 {
        // height: 539px;
        width: 100%;
      }
    }

    &__elem3 {
      padding-top: 46px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .data {
        font-family: Jost;
        font-size: 30px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: rgba(77, 80, 83, 1);
      }

      .menu {
        font-family: Jost;
        font-size: 30px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: rgba(77, 80, 83, 1);
      }
    }
  }
}
</style>