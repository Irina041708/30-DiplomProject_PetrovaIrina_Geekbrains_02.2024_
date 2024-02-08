<template>
  <div class="center content section10">
    <!-- <div class="section10__section11"> -->
    <h1 class="animate-reduce">ФОТОГАЛЕРЕЯ</h1>
    <!-- </div> -->
    <div class="all">
      <div class="section10_1">
        <div class="block">
          <!-- <p class="block__p">Bathroom</p> -->
          <button class="block__p" @click="currentTab = nameButton" v-for="nameButton in nameButtons" 
          :key="nameButton">{{
            nameButton }}</button>
        </div>
      </div>
      <div class="section10_2" v-if="currentTab === `Новый год`">
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12
                   2.5l2.645 6.366.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/001.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 001</a>
              <!-- <p class="text"></p> -->
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/002.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 002</a>
              <!-- <p class="text">Decor / Artchitecture</p> -->
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/003.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 003</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/004.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 004</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
      </div>
      <div class="section10_2" v-if="currentTab === 'Девочки'">
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/005.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 005</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img2" src="@/assets/img/006.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 006</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/007.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 007</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/008.jpg" alt="product" />
            </a>
          </div>7i
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 008</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
      </div>
      <div class="section10_2" v-if="currentTab === `Мальчики`">
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/009.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 009</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
        <figure class="product">
          <div class="zvezda">
            <div class="zvezda__zvezda">
              <svg class="zvezda__zvezda__zvezda" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                </g>
              </svg>
            </div>
            <a href="#" class="zvezda__img">
              <img class="zvezda__img__img1" src="@/assets/img/010.jpg" alt="product" />
            </a>
          </div>
          <figcaption class="product__content">
            <div class="product__content__box-left">
              <a href="./Str3Components" class="name">Фотография 010</a>
            </div>
            <a href="./Str3Components" class="product__content__box-richt">
              <img src="@/assets/img/section2-box-richt.svg" alt="" />
            </a>
          </figcaption>
        </figure>
      </div>
      <!-- <div class="section10_3">
        <div class="contentt">
          <a href="#" class="img">
            <p class="img1">1</p>
          </a>
          <a href="#" class="img">
            <p class="img1">2</p>
          </a>
          <a href="#" class="img">
            <p class="img1">3</p>
          </a>
          <a href="#" class="img">
            <p class="img1">4</p>
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nameButtons: [`Новый год`, `Девочки`, `Мальчики`],
      currentTab: 'Новый год',
      // isShow: false
    }
  },
  computed: {
    changeComponent() {
      return this.currentTab
      // return this.isShow = !this.isShow
    },
  },

}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";


.section10 {
  background-image: url("@/assets/img/str4-background.jpg");
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;

  // &__section11 {
  //   height: 300px;
  //   background-color: black;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;


  .animate-reduce {
    // height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Jost;
    font-size: 40px;
    letter-spacing: 0.15em;
    animation: animate_reduce 2s infinite;
    color: #bd16d3;
  }

  .animate-reduce:hover {
    animation: none;
  }

  @keyframes animate_reduce {
    0% {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(0.95, 0.95, 0.95);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  // }

  .all {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .section10_1 {
      .block {
        border-radius: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 30px;

        &__p {
          border-radius: 18px;
          padding: 26px 66px 26px 66px;
          border: none;
          background: no-inherit;
          font-family: Jost;
          font-size: 18px;
          font-weight: 600;
          line-height: 23px;
          letter-spacing: 0.02em;
          background-color: white;

        }

        &__p:hover {
          background-color: rgba(205, 162, 116, 1);
          text-decoration: none;

        }

        &__p:active {
          background-color: rgba(205, 162, 116, 1) !important;
          text-decoration: none;
        }

        &__p:focus {
          background-color: rgba(205, 162, 116, 1) !important;
          text-decoration: none;
        }
      }
    }

    .section10_2 {
      padding-top: 61px;
      gap: 30px;
      max-width: 1201px;
      display: flex;
      flex-wrap: wrap;

      // flex-direction: column;
      .product {
        width: 500px;

        .zvezda {
          position: relative;

          &__img {
            width: 49%;

            &__img1 {
              height: 853px;
              width: 560px;
            }

            &__img2 {
              height: 522px;
              width: 560px;
            }

            &__img3 {
              height: 560px;
              width: 522px;
            }
          }

          &__zvezda {
            height: 40px;
            width: 40px;
            z-index: 1;
            position: absolute;
            padding-left: 500px;
            padding-top: 30px;
            fill: rgb(244, 243, 239);

            &__zvezda:active {
              fill: rgb(225, 160, 21);
            }
          }
        }

        &__content {
          padding-top: 24px;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .name {
            font-family: DM Serif Display;
            font-size: 25px;
            font-weight: 400;
            line-height: 31px;
            letter-spacing: 0.02em;
            color: rgba(41, 47, 54, 1);
          }

          .text {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
          }
        }
      }
    }

  }
}
</style>