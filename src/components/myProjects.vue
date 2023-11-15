
<script>
import { store } from "../store"
import axios from "axios"
import ProjectCard from "./ProjectCard.vue"
import PageButtons from "./PageButtons.vue"
export default {
    components: {
        ProjectCard,
        PageButtons
    },
    data() {


        return {
            store,
            types: [],
            selectedType: "",
        }
    },
    methods: {
        selectType() {
            this.loading = true;
            const url = this.store.apiUrl + this.store.ProjectsPath + '?type_id=' + this.selectedType;
            this.store.getProjects(url);
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
    <div class="my-5">
        <div class="container">
            <h2 class="text-center mb-3 display-3 my_projects_title"> MY PROJECTS </h2>
            <div class="mb-5 w-25 m-auto">
                <form action="" @change="selectType()">
                    <div class="d-flex gap-3">

                        <div class="input">
                            <label for="types" class="form-label">Select type</label>
                            <select class="form-select" name="types" id="types" v-model="selectedType">
                                <option value="">All</option>
                                <option v-for="tipo in this.types" :value="tipo.id">{{ tipo.name }}</option>
                            </select>
                        </div>
                    </div>

                </form>
            </div>
            <div class="row">
                <ProjectCard v-if="!this.store.loading" v-for="project in  this.store.projects " :title="project.title"
                    :slug="project.slug" :image="'https://api.giuseppevignanello.com/storage/' + project.image"
                    :type="project.type.name" />

                <AppLoader v-else />


            </div>


        </div>
        <PageButtons />
    </div>
</template>


<style lang="scss" scoped></style>