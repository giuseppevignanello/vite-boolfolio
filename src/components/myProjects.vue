
<script>
import { store } from "../store"
import axios from "axios"
import ProjectCard from "./ProjectCard.vue"
export default {
    components: {
        ProjectCard,
    },
    data() {


        return {
            store,
            types: [],
            selectedType: "",
        }
    },

    mounted() {
        this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)

        axios
            .get(this.store.apiUrl + 'api/types')
            .then((response) => {
                this.types = response.data.types
                console.log(this.types);
            })
    },
}
</script>

<template>
    <div class="my_projects">
        <div class="container">
            <h2 class="text-center mb-3 display-3 my_projects_title"> MY PROJECTS </h2>
            <div class="mb-5 w-25 m-auto">

            </div>
            <div class="row">
                <ProjectCard v-if="!this.store.loading" v-for="project in  this.store.projects " :title="project.title"
                    :slug="project.slug" :image="'https://api.giuseppevignanello.com/storage/' + project.image"
                    :type="project.type.name" />
                <AppLoader v-else />

            </div>
            <div class="d-flex justify-content-center">
                <a name="" id="" class="btn btn-dark" href="https://github.com/giuseppevignanello" role="button"><i
                        class="fa-brands fa-github"></i> Check by
                    GitHub for more</a>
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped></style>