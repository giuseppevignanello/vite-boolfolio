<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Aos from "aos";

export default {
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {

        }
    }, mounted() {
        Aos.init()
    },
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
</template>

