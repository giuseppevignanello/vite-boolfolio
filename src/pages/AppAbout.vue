
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
        <h3>About</h3>
        <MyStory class="d-none d-md-block" />
        <MyStack />
    </div>
</template>


<style lang="scss" scoped></style>