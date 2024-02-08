<template>
  <nav>
    <HeaderComponents />
    <!-- <router-view/> отображается нужная страница -->
  </nav>
  <router-view />
  <FooterComponents />
</template>

<script>
import HeaderComponents from './components/HeaderComponents.vue';
import FooterComponents from './components/FooterComponents.vue';


export default {
  components: {
    HeaderComponents,
    FooterComponents,
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/vars";

body {
  width: $widhSize1;
  background: rgb(255, 255, 255);
  font-family: "Lato", sans-serif;
}

a {
  text-decoration: none;
}

center {
  padding-left: calc(50% - $widhSize1);
  /*(1140)/2=570  1600/2=800*/
  padding-right: calc(50% - $widhSize1);
}

.content {
  padding: 0px 14.375% 0px 14.375%;
}

//
summary {
  display: block;
}

summary::webkit-details-marcer {
  display: none;
}
</style>

