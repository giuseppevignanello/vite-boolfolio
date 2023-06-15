
<script>
import { store } from "../store"
import AppLoader from "../components/AppLoader.vue"
import ProjectCard from '../components/ProjectCard.vue'
import PageButtons from "../components/PageButtons.vue"



export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        AppLoader,
        PageButtons,
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
    <div class="container my-5">
        <h1 class="text-center mb-3">All my projects</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5">
            <ProjectCard v-if="!this.store.loading" v-for="project in  this.store.projects " :title="project.title"
                :slug="project.slug" :image="'http://127.0.0.1:8000/storage/' + project.image"
                :description="project.description" />

            <AppLoader v-else />


        </div>
        <PageButtons />


    </div>
</template>


<style lang="scss" scoped></style>