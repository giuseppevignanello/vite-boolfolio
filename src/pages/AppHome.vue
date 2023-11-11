
<script>
import { store } from "../store"
import AppLoader from "../components/AppLoader.vue"
import ProjectCard from '../components/ProjectCard.vue'
import PageButtons from "../components/PageButtons.vue"
import JumboTron from "../components/JumboTron.vue"
import axios from "axios"
import MyStack from "../components/MyStack.vue"
import OtherThings from "../components/OtherThings.vue"


export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        AppLoader,
        PageButtons,
        JumboTron,
        MyStack,
        OtherThings
    },
    data() {
        return {
            store,
            types: [],
            selectedType: "",
        };
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
    <JumboTron />
    <div class="container">
        <h1 class="text-center mb-3"> <strong> MY PROJECTS </strong></h1>
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
        <PageButtons />
        <div class="d-md-flex mt-">
            <MyStack></MyStack>
            <div id="about" class="card p-3 shadow bg_opacity col-md-6 m-3">
                <h2 class="display-5 fw-bold">My Story</h2>
                <div class=" d-flex flex-column justify-content-around h-100">
                    <div class="d-flex justify-content-around align-items-center">
                        <div class="story_image">
                            <img src="../../public/img/lemon.png" alt="">
                        </div>
                        <h3>🚩 I was born in Sicily</h3>

                    </div>
                    <div class="d-flex justify-content-around align-items-center">
                        <h3>🚩 I studied philosophy at the University of Bologna and web development at Boolean Academy</h3>
                        <div class="story_image">
                            <img class="story_image" src="../../public/img/tortellino.png" alt="">
                        </div>

                    </div>
                    <div class="d-flex justify-content-around align-items-center gap-2">
                        <div class="story_image">
                            <img class="story_image" src="../../public/img/bravas.png" alt="">
                        </div>
                        <h3>🚩 I currently live in Barcelona</h3>
                    </div>
                </div>
            </div>

        </div>
        <OtherThings></OtherThings>

    </div>
</template>


<style lang="scss" scoped></style>