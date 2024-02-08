<template>
  <section class="center content section6">
    <div class="section6__box">
      <article class="section6__box__item">
        <a href="./Str2Components" class="img">
          <img src="@/assets/img/PIA.jpg" alt="" />
        </a>
        <div class="text">
          <h1 class="text__h1">
            Добро пожаловать!!!<br>
          </h1>
          <li class="text__h">
            Меня зовут Ирина. Я создатель данного сайта по предоставлению фотоуслуг в г. Самара.
          </li>
          <li class="text__h2">
            Обрабатываю и печатаю фотографии
          </li>
          <li class="text__h2">
            Креативный и творческий подход
          </li>
          <h1 class="text__h1">
            Ждем именно тебя!!!
          </h1>
        </div>
      </article>
      <article class="section6__box__item">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9550.668760824676!2d50.1939614092927!3d53.24174197517148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4166193ee59f5feb%3A0xcf2da57b39241b11!2z0J3QvtCy0L4t0JLQvtC60LfQsNC70YzQvdCw0Y8g0YPQuy4sIDIxNywg0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQzMDg0!5e0!3m2!1sru!2sru!4v1705467097008!5m2!1sru!2sru"
            width="100%" height="800px" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contakt">
          <h1 class="heading">Наши контакты:</h1>
          <h2 class="text1">
            г.Самара, ул.Ново-Вокзальная,д.217, офис 301
          </h2>
          <h2 class="text1">+79370751295@mail.ru</h2>
          <h2 class="text1">+7-937-075-12-95</h2>
        </div>
      </article>
    </div>

  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "@/assets/vars";

.section6 {
  background-image: url("@/assets/img/str2-blog-section5-background.jpg");
  background-size: cover; //растянуть на весь экран
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;

  &__box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;

    &__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 30px;

      .img {
        height: 800px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text,
      .contakt {
        width: 50%;
        // height: 375px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 30px;

        &__h1 {
          font-family: DM Serif Display;
          font-size: 60px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: $coloSite;
        }

        &__h {
          font-family: DM Serif Display;
          font-size: 40px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #0817eb;
        }

        &__h2 {
          font-family: DM Serif Display;
          font-size: 40px;
          font-weight: 400;
          line-height: 31px;
          letter-spacing: 0.01em;
          color: $coloSite;
          gap: 20px;
        }
      }

      .map {
        min-width: 50%;
      }

      .heading {
        font-style: normal;
        font-weight: 300;
        font-size: 50px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #0817eb;
      }

      .text1 {
        display: flex;
        align-items: center;
        gap: 30px;
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        text-align: center;
        letter-spacing: 0.15em;
        color: $coloSite;
      }
    }
  }
}
</style>