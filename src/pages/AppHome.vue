
<script>
import { store } from "../store"
import AppLoader from "../components/AppLoader.vue"
import ProjectCard from '../components/ProjectCard.vue'


export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        AppLoader
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        nextPage() {
            if (this.store.currentPage < this.store.lastPage) {
                this.store.currentPage++;
                this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
            }
        },
        prevPage() {
            if (this.store.currentPage > 1) {
                this.store.currentPage--;
                this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
            }
        }
    },
    mounted() {
        this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <ProjectCard v-if="!this.store.loading" v-for="project in  this.store.projects " :title="project.title"
                :slug="project.slug" :image="'http://127.0.0.1:8000/storage/' + project.image"
                :description="project.description" />
            <AppLoader v-else />
        </div>
        <div class="buttons">
            <div>
                <i @click="nextPage" class="fa-solid fa-arrow-right"></i>
            </div>
            <div>
                <i @click="prevPage" class="fa-solid fa-arrow-left"></i>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>