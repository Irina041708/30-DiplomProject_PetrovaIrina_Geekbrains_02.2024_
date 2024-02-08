<template>
  <section class="center content section9">
    <div id="app" class="demo">
      <component :is="changeComponent"></component>
      <div class="div2">
        <h1 class="div2__h1">Список фотографий</h1>
        <div class="div2__block1">
          <div class="elem">
            <button @click="currentTab = nameButton" v-for="nameButton in nameButtons" :key="nameButton"
              class="elem__elem1">
              <p class="elem__elem1__p">{{ nameButton }}</p>
            </button>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>

<script>
import Foto001 from '@/components/Str3Foto001Components.vue';
import Foto002 from '@/components/Str3Foto002Components.vue';
import Foto003 from '@/components/Str3Foto003Components.vue';
import Foto004 from '@/components/Str3Foto004Components.vue';
import Foto005 from '@/components/Str3Foto005Components.vue';
import Foto006 from '@/components/Str3Foto006Components.vue';
import Foto007 from '@/components/Str3Foto007Components.vue';
import Foto008 from '@/components/Str3Foto008Components.vue';
import Foto009 from '@/components/Str3Foto009Components.vue';
import Foto010 from '@/components/Str3Foto010Components.vue';

export default {
  data() {
    return {
      nameButtons: [`Foto001`, `Foto002`, `Foto003`, `Foto004`, `Foto005`, `Foto006`,
        `Foto007`, `Foto008`, `Foto009`, `Foto010`],
      currentTab: 'Foto001',
    }
  },
  components: {
    Foto001,
    Foto002,
    Foto003,
    Foto004,
    Foto005,
    Foto006,
    Foto007,
    Foto008,
    Foto009,
    Foto010,
  },
  computed: {
    changeComponent() {
      return this.currentTab
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/vars";

center {
  padding-left: calc(50% - $widhSize1);
  /*(1140)/2=570  1600/2=800*/
  padding-right: calc(50% - $widhSize1);
}

.content {
  padding: 0px 14.375% 0px 14.375%;
}

.section9 {
  background-image: url("@/assets/img/str4-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .demo {
    padding-bottom: 96px;
    display: flex;
    flex-direction: row;
    padding-top: 96px;
    gap: 4.3%;

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
          height: 539px;
          border-radius: 62px;

          &__img1 {
            height: 539px;
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
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
          }

          .menu {
            font-family: Jost;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
          }
        }

        &__elem4,
        &__elem5 {
          padding-top: 48px;
          font-family: Jost;
          font-size: 22px;
          font-weight: 400;
          line-height: 33px;
          letter-spacing: 0.01em;
          color: rgba(77, 80, 83, 1);
        }
      }

      &__block2 {
        padding-top: 35px;

        &__background {
          height: 267px;
          border-radius: 50px;
          background: rgba(244, 240, 236, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 53px 0px 53px 0px;

          &__p1 {
            font-family: DM Serif Display;
            // font-size: 200px;
            font-style: italic;
            font-weight: 400;
            // line-height: 250px;
            letter-spacing: 0.02em;
            color: rgba(205, 162, 116, 1);
          }

          &__p2 {
            height: 70px;
            width: 47%;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: italic;
            font-weight: 400;
            line-height: 31px;
            letter-spacing: 0.02em;
            color: rgba(205, 162, 116, 1);
            display: flex;
            justify-content: center;

            .p3 {
              height: 70px;
              width: 47%;
              font-family: DM Serif Display;
              font-size: 25px;
              font-style: italic;
              font-weight: 400;
              line-height: 31px;
              letter-spacing: 0.02em;
              color: rgba(205, 162, 116, 1);
            }
          }
        }
      }

      &__block3 {
        padding-top: 21px;
        display: flex;
        flex-direction: column;

        &__h1 {
          padding-top: 20px;
          font-family: DM Serif Display;
          font-size: 50px;
          font-weight: 400;
          line-height: 63px;
          letter-spacing: 0.02em;
          color: rgba(41, 47, 54, 1);
        }

        &__p1 {
          padding-top: 20px;
          font-family: Jost;
          font-size: 22px;
          font-weight: 400;
          line-height: 33px;
          letter-spacing: 0.01em;
          color: rgba(77, 80, 83, 1);
        }

        &__ul {
          padding-top: 24px;
          display: flex;
          gap: 32px;
          flex-direction: column;

          .li {
            font-family: Jost;
            font-size: 22px;
            font-weight: 400;
            line-height: 33px;
            letter-spacing: 0.01em;
            color: rgba(77, 80, 83, 1);
          }
        }

        &__img {
          padding-top: 44px;
          height: 365px;
          width: 100%;

          .img1 {
            width: 100%;
            height: 365px;
          }
        }

        &__p2 {
          padding-top: 35px;
          font-family: Jost;
          font-size: 22px;
          font-weight: 400;
          line-height: 33px;
          letter-spacing: 0.01em;
          color: rgba(77, 80, 83, 1);
        }
      }
    }

    .div2 {
      width: 41.6%;
      display: flex;
      flex-direction: column;

      &__h1 {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: $coloSite;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__block1 {
        padding-top: 24px;

        .elem {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
          gap: 10px;
          padding-bottom: 41px;

          &__elem1 {
            border: none;
            font: inherit;
            border-radius: 10px;
            background: rgba(244, 240, 236, 1);

            &__p {
              padding: 9px 30px 9px 30px;
              font-family: Jost;
              font-size: 18px;
              font-weight: 400;
              line-height: 23px;
              letter-spacing: 0.02em;
              color: rgba(41, 47, 54, 1);
            }

            .p:hover {
              color: rgba(255, 255, 255, 1);
            }
          }

          &__elem1:hover {
            background-color: $coloSite;
            text-decoration: none;

          }

          &__elem1:active {
            background-color: $coloSite !important;
            text-decoration: none;
          }

          &__elem1:focus {
            background-color: $coloSite !important;
            text-decoration: none;
          }

          .elem1:hover {
            color: rgba(255, 255, 255, 1);
            background: rgba(41, 47, 54, 1);
          }
        }
      }
    }
  }

}
</style>