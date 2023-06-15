
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
        <div class="card text-start">
            <img class="card-img-top" :src="this.store.apiUrl + 'storage/' + project.image" alt="Title">
            <div class="card-body">
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
                        <img style="width: 40px;" :src="'http://127.0.0.1:8000/storage/' + technology.image" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>