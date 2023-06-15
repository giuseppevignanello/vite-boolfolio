
<script>
import axios from 'axios';
import { store } from '../store'

export default {
    name: 'MyStack',
    data() {

        return {
            store,
            TechnologiesPath: "api/technologies",
            technologies: [],
            loading: true,
        }
    }, methods: {
        getTechnologies(url) {
            axios
                .get(url)
                .then((response) => {
                    this.loading = false;
                    this.technologies = response.data.technologies
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, mounted() {
        this.getTechnologies(this.store.apiUrl + this.TechnologiesPath)

    }
}
</script>

<template>
    <div>
        <h2 class="text-center">My Stack</h2>
        <div class="container mt-4">
            <div class="card p-5 shadow">
                <ul class="d-flex list-unstyled flex-wrap justify-content-center">
                    <li class="technology" v-for="technology in this.technologies">
                        <div class="me-5">
                            <img class="text-center" style="width: 100px;"
                                :src="'http://127.0.0.1:8000/storage/' + technology.image" alt="">
                            <p class="text-center"> <strong>{{ technology.name }} </strong> </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>