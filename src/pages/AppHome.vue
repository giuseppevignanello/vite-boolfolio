
<script>

import AppLoader from "../components/AppLoader.vue"
import PageButtons from "../components/PageButtons.vue"
import JumboTron from "../components/JumboTron.vue"
import MyStack from "../components/MyStack.vue"
import OtherThings from "../components/OtherThings.vue"
import MyStory from "../components/MyStory.vue"
import AppContacts from "../components/AppContacts.vue"
import ScrollTopButton from "../components/ScrollTopButton.vue"
import myProjects from "../components/myProjects.vue"


export default {
    name: 'AppHome',
    components: {
        AppLoader,
        PageButtons,
        JumboTron,
        MyStack,
        OtherThings,
        MyStory,
        AppContacts,
        ScrollTopButton,
        myProjects
    },
    data() {
        return {

        };
    },

}
</script>

<template>
    <JumboTron />
    <myProjects />
    <MyStack />
    <MyStory />
    <OtherThings />
    <AppContacts />
    <ScrollTopButton />
</template>


<style lang="scss" scoped></style>