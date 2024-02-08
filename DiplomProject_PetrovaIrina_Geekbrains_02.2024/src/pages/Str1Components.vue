<template>
    <IndexComponents />
    <Str1SwiperSlideComponents />
</template>

<script>
import FooterComponents from '@/components/FooterComponents.vue';
import HeaderComponents from '@/components/HeaderComponents.vue';
import Str1SwiperSlideComponents from '@/components/Str1SwiperSlideComponents.vue';

export default {
    name: 'Home',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { HeaderComponents, FooterComponents, Str1SwiperSlideComponents }
};
</script>

<style lang="scss" scoped></style>