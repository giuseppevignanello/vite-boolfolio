
<script>
import { store } from "../store"

import ProjectCard from '../components/ProjectCard.vue'


export default {
    name: 'AppHome',
    components: {
        ProjectCard
    },
    data() {
        return {
            store
        };
    },
    mounted() {
        this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
    },
}
</script>

<template>
    <div class="container">
        <div class="row">

            <ProjectCard v-for="project in  this.store.projects " :title="project.title" :slug="project.slug"
                :image="'http://127.0.0.1:8000/storage/' + project.image" :description="project.description" />

        </div>

    </div>
</template>


<style lang="scss" scoped></style>