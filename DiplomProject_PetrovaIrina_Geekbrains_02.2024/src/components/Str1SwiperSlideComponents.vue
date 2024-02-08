<template>
  <section class="center content section13">
    <h1 class="animate-reduce">ВАША ИСТОРИЯ В МОМЕНТЕ</h1>
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :zoom="true" :navigation="true" :pagination="{
  clickable: true,
}" :modules="modules" class="mySwiper">
      <swiper-slide>
        <div class="swiper-zoom-container">
          <a href="./Str3Components" class="swiper-zoom-container">
            <img class="swiper-zoom-container-img" src="@/assets/img/001.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/002.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/004.jpg" />
          </a>
        </div>
      </swiper-slide><swiper-slide>
        <div class="swiper-zoom-container">
          <a href="./Str3Components" class="swiper-zoom-container">
            <img class="swiper-zoom-container-img" src="@/assets/img/007.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/001.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/008.jpg" />
          </a>
        </div>
      </swiper-slide><swiper-slide>
        <div class="swiper-zoom-container">
          <a href="./Str3Components" class="swiper-zoom-container">
            <img class="swiper-zoom-container-img" src="@/assets/img/011.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/005.jpg" />
            <img class="swiper-zoom-container-img" src="@/assets/img/010.jpg" />
          </a>
        </div>
      </swiper-slide>
      >
    </swiper>
  </section>
  <!--  -->
</template>
  
<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
  
<style lang="scss" scoped>
.swiper-zoom-container {
  gap: 30px;
}

.section13 {
  background: rgba(255, 255, 255, 1);
  padding-bottom: 200px;

  .animate-reduce {
    height: 200px;
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

  .swiper {
    width: 100%;
    height: 100%;
    background-color: #db12cb;
  }

  .swiper-slide {
    overflow: hidden;
  }
}

.swiper-zoom-container {
  .swiper-zoom-container-img {
    border-radius: 70px;
    height: 1000px;
  }
}
</style>