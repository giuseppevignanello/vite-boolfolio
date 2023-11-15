
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
    <JumboTron class="full-height" />
    <myProjects class="full-height" />
    <MyStack class="full-height" />
    <MyStory class="full-height" />
    <OtherThings class="full-height" />
    <AppContacts class="full-height" />
    <ScrollTopButton />
</template>


<style lang="scss" scoped></style>