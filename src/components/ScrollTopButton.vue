

<script>
export default {
    data() {
        return {
            showButton: false,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        handleScroll() {
            this.showButton = window.scrollY > 100;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<template>
    <div>
        <div v-if="showButton" @click="scrollToTop" class="back_to_top">
            <div>
                <i class="fa-solid fa-chevron-up fa-xl text-white"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>