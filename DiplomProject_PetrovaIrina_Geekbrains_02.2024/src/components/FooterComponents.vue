<template>
  <footer class="center content footer">
    <nav class="footer__box">
      <article class="footer__box__item">
        <a href="./" class="img">
          <img src="@/assets/img/logo1_footer.png" alt="img1" />
        </a>
        <div class="heading">
          МЫ В СОЦИАЛЬНЫХ СЕТЯХ
          <div class="text">
            <a href="https://vk.com/ira09_01_2023" class="logo-vk">
              <img src="@/assets/img/logo_vk.png" alt="logo_vk.png" />
            </a>
            <a href="https://ok.ru/profile/81187900307" class="logo-ok">
              <img src="@/assets/img/logo_ok.png" alt="logo_ok" />
            </a>
          </div>
        </div>
      </article>
      <article class="footer__box__item">
        <h1 class="heading">Страницы сайта:</h1>
        <h2 class="text">
          <a href="./" class="text">Главная</a>
        </h2>
        <h2 class="text">
          <a href="./Str2Components" class="text">Контакты</a>
        </h2>
        <h2 class="text">
          <a href="./Str3Components" class="text">ФотоуслугиДаги</a>
        </h2>
        <!-- </div> -->
      </article>
      <article class="footer__box__item">
        <h1 class="heading">Наши контакты:</h1>
        <h2 class="text">
          г.Самара, ул.Ново-Вокзальная,д.217, офис 301
        </h2>
        <h2 class="text">+79370751295@mail.ru</h2>
        <h2 class="text">+7-937-075-12-95</h2>
      </article>
    </nav>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

.footer {
  background-color: black;
  min-height: 341px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__item {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $coloSite;

      .heading {
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.15em;
        color: rgb(224, 248, 8);
      }

      .text {
        display: flex;
        align-items: center;
        gap: 30px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.15em;
        color: $coloSite;
      }

      .img {
        display: flex;
        align-items: center;
        gap: 30px;
        text-align: center;
      }

      .logo {
        text-align: center;
      }
    }
  }
}




















// .footer {
//   height: 406px;
//   padding-bottom: 134px;
//   background: rgb(10, 10, 10);

//   &__box {
//     display: flex;
//     gap: 80px;
//     align-items: center;
//     justify-content: center;

//     &__left {
//       display: flex;
//       gap: 20px;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;

//       .tvitter {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-wrap: wrap;
//         gap: 20px;

//         &__left {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;
//           font-family: Jost;
//           font-size: 30px;
//           letter-spacing: 0.30em;
//           color: #f3edf3;
//         }

//         &__right {
//           display: flex;
//           align-items: center;
//           gap: 30px;
//         }
//       }
//     }

//     &__center {
//       display: flex;
//       flex-direction: column;
//       gap: 9px;
//       color: #f3edf3;

//       .pages,
//       .element1 {
//         display: flex;
//         gap: 20px;
//         font-family: Jost;
//         font-size: 30px;
//         font-weight: 400;
//         line-height: 66px;
//         letter-spacing: 0.15em;
//         color: rgb(82, 122, 235);

//         .element11 {
//           color: #f3edf3;
//         }

//       }
//     }

//     &__right {
//       display: flex;
//       flex-direction: column;
//       gap: 9px;

//       .contact {
//         gap: 20px;
//         font-family: Jost;
//         font-size: 30px;
//         font-weight: 400;
//         line-height: 66px;
//         letter-spacing: 0.01em;
//         color: rgb(82, 122, 235);
//         justify-content: space-around;
//       }

//       .element2 {
//         gap: 20px;
//         font-family: Jost;
//         font-size: 30px;
//         font-weight: 400;
//         line-height: 66px;
//         letter-spacing: 0.01em;
//         color: #db12cb;
//       }
//     }
//   }
// }
</style>