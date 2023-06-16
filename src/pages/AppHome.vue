
<script>
import { store } from "../store"
import AppLoader from "../components/AppLoader.vue"
import ProjectCard from '../components/ProjectCard.vue'
import PageButtons from "../components/PageButtons.vue"
import JumboTron from "../components/JumboTron.vue"


export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        AppLoader,
        PageButtons,
        JumboTron
    },
    data() {
        return {
            store,
        };
    },

    mounted() {
        this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
    },
}
</script>

<template>
    <JumboTron />
    <div class="container">
        <h1 class="text-center mb-3 text-white"> <strong> MY PROJECTS </strong></h1>
        <div class="row gx-5">
            <ProjectCard v-if="!this.store.loading" v-for="project in  this.store.projects " :title="project.title"
                :slug="project.slug" :image="'http://127.0.0.1:8000/storage/' + project.image" :type="project.type.name" />

            <AppLoader v-else />


        </div>
        <PageButtons />


    </div>
</template>


<style lang="scss" scoped></style>