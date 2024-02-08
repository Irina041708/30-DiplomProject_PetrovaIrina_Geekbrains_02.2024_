<template>
  <header class="center content header">
    <nav class="header__box">
      <div class="header__box__left">
        <a href="./" class="logo1">
          <img src="@/assets/img/logo1.png" alt="logo11" class="rot" />
        </a>
        <a href="./" class="logo2"> ДАГИ </a>
      </div>
      <div class="header__box__right">
        <details class="menu">
          <summary class="menu__summary">
            <img src="@/assets/img/logo3.svg" alt="logo33">
          </summary>
          <div class="menu__content">
            <details class="menu__menu-item" open>
              <summary class="menu__menu-head">
                МЕНЮ
              </summary>
              <div class="menu__link-box">
                <router-link :to="link.url" v-for="link in links" :key="link.id" class="menu__link">{{ link.title
                }}</router-link>
              </div>
            </details>
          </div>
        </details>
      </div>
    </nav>
  </header>
</template>
<script>

export default {
  data() {
    return {
      links: [
        {
          id: 1,
          title: 'Главная',
          url: './'
        },
        {
          id: 2,
          title: 'Контакты',
          url: './Str2Components'
        },
        {
          id: 4,
          title: 'Фотогалерея',
          url: './Str4Components'
        },
        {
          id: 3,
          title: 'ФотоуслугиДаги',
          url: './Str3Components'
        },
        {
          id: 5,
          title: '404',
          url: './404'
        },

      ]
    }
  },
}
</script>

<styles lang="scss" scoped>
@import "@/assets/vars";


.header {
  min-height: 200px;
  background: black;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__left {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .rot {
      -webkit-transition: -webkit-transform .8s ease-in-out;
      transition: transform .8s ease-in-out;
    }

    .rot:hover {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }

    .logo2 {
      text-decoration: none; //убираем подчеркивание ссылки
      font-family: DM Serif Display;
      font-size: 40px;
      font-weight: 400;
      line-height: 50px;
      color: $coloSite;
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .menu {
      &__content {
        z-index: 10;
        width: 232px;
        margin-top: 26px;
        position: absolute;
        background-color: #FFFFFF;
        padding: 0px 32px 32px 32px;
        box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
      }

      &__summary {
        display: flex;
        align-items: center;
        gap: 11px;
        padding-left: 16px;
      }

      &__menu-head {
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
        padding-bottom: 15px;
        padding-top: 15px;
      }

      &__menu-item[open] .menu__menu-head {
        color: $coloSiteBlue;
      }

      &__menu-head {
        font-size: 35px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: black;
        padding-bottom: 15px;
        padding-top: 15px;
      }

      &__item {
        margin-top: 20px;
      }

      &__link-box {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }

      &__link {
        font-family: Lato;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: 0em;
        color: $coloSite;
      }

      .menu__link:hover {
        color: $coloSiteBlue ;
        text-decoration: none;
      }

      .menu__link:active {
        color: $coloSiteBlue !important;
        text-decoration: none;
      }

      .menu__link:focus {
        color: $coloSiteBlue !important;
        text-decoration: none;
      }
    }
  }
}

// #app{
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   width: 100vw;


// }

// @media (max-width: 1024px) {
//   .swiperReviews .swiper-pagination {
//     display: none;
//   }


//   body {
//     width: $widhSize2;
//   }

//   .center {
//     padding-left: calc(50% - (calc($widhSize2)/2));
//     /*(768 -16)/2=376*/
//     padding-right: calc(50% - (calc($widhSize2)/2));
//   }

//   .content {
//     padding: 0px 4.1% 0px 4.1%;
//   }

//   .header {
//     min-height: 74px;
//     // width: $widhSize2;

//     &__box {
//       .menu {
//         &__content {
//           right: 0px;
//         }
//       }
//     }
//   }
// }

// @media (max-width: 767px) {
//   .swiperReviews .swiper-pagination {
//     display: none;
//   }
//   body {
//     width: $widhSize3;
//   }

//   .center {
//     padding-left: calc(50% - (calc($widhSize3 - $scrolling3)/2));
//     /*(735 -16)/2=179.5*/
//     padding-right: calc(50% - (calc($widhSize3 - $scrolling3)/2));
//   }

//   .content {
//     padding: 0px 8.5% 0px 8.5%;
//   }

//   .header {
//     &__box {
//       &__left {
//         gap: 10px;
//       }

//       .logo2 {
//         font-size: 20px;
//       }
//     }
//   }
// }
</styles>