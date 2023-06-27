
<script>

import { store } from '../store'
import axios from "axios";

export default {
    name: 'SingleProject',
    data() {
        return {
            project: "",
            store
        }
    },
    mounted() {
        axios.get(this.store.apiUrl + 'api/projects/' + this.$route.params.slug).then((response) => {
            if (response.data.success) {

                this.project = response.data.project;
                console.log(this.project);
            } else {
                this.$router.push({ name: 'not-found' })
            }
        });
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="card bg-transparent border-0 align-items-center">
                <img style="width: 500px;" class="card-img-top my-5" :src="this.store.apiUrl + 'storage/' + project.image"
                    alt="Title">
                <div class="card-body bg_opacity rounded m-auto project_body">
                    <h1 class="card-title">{{ project.title }}</h1>
                    <p class="card-text">{{ project.description }}</p>
                    <p v-if="project.status == 'pending'">👨‍💻🚧In progress</p>
                    <p v-else-if="project.status == 'completed'">✅ Completed</p>
                    <p> <strong>Repo Link: </strong><a :href="project.repo_link" target="_blank">{{ project.repo_link }}</a>
                    </p>
                    <p> <strong>View Link: </strong><a :href="project.view_link" target="_blank">{{ project.view_link }}</a>
                    </p>
                    <p> <strong> Start on: </strong> {{ project.start_date }} </p>
                    <ul class="d-flex list-unstyled">
                        <li class="me-2"><strong>Technologies: </strong></li>
                        <li v-for="technology in project.technologies" class="me-2">
                            <div class="d-flex">
                                <img style="height: 50px; object-fit: contain;"
                                    :src="'https://api.giuseppevignanello.com/storage/' + technology.image" alt="">
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>