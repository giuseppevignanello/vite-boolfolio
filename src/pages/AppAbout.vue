
<script>
import MyStack from '../components/MyStack.vue';
import MyStory from '../components/MyStory.vue';

export default {
    name: 'AppAbout',
    components: {
        MyStack,
        MyStory
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
        <MyStack />
    </div>
</template>


<style lang="scss" scoped></style>