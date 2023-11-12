
<script>
import { store } from "../store"
import AppLoader from "../components/AppLoader.vue"
import ProjectCard from '../components/ProjectCard.vue'
import PageButtons from "../components/PageButtons.vue"
import JumboTron from "../components/JumboTron.vue"
import axios from "axios"
import MyStack from "../components/MyStack.vue"
import OtherThings from "../components/OtherThings.vue"
import MyStory from "../components/MyStory.vue"
import AppContacts from "../components/AppContacts.vue"


export default {
    name: 'AppHome',
    components: {
        ProjectCard,
        AppLoader,
        PageButtons,
        JumboTron,
        MyStack,
        OtherThings,
        MyStory,
        AppContacts
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
        <MyStack></MyStack>
        <MyStory></MyStory>
        <OtherThings></OtherThings>
        <AppContacts></AppContacts>

    </div>
</template>


<style lang="scss" scoped></style>