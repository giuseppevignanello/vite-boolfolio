
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
        <MyStory />
        <MyStack />
    </div>
</template>


<style lang="scss" scoped></style>