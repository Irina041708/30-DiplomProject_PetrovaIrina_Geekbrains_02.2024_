<template>
    <Str3BlogDetailsComponents />
</template>

<script>
import FooterComponents from '@/components/FooterComponents.vue';
import HeaderComponents from '@/components/HeaderComponents.vue';
import Str3BlogDetailsComponents from '@/components/Str3BlogDetailsComponents.vue';

export default {
    name: 'Str3Components',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { HeaderComponents, FooterComponents, Str3BlogDetailsComponents }
};
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
</style>