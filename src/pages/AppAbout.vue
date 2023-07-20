
<script>
import MyStory from '../components/MyStory.vue';
import OtherThings from '../components/OtherThings.vue';

export default {
    name: 'AppAbout',
    components: {
        MyStory,
        OtherThings
    },
    data() {

        return {

        }
    },
}
</script>

<template>
    <div>
        <h1 class="display-5 fw-bold text-center pt-5">About me </h1>
        <MyStory />
        <OtherThings />
    </div>
</template>


<style lang="scss" scoped></style>