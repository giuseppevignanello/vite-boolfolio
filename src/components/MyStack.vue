
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

        <div class="container py-3">
            <div class="card shadow bg_opacity p-4">
                <h2 class="display-5 fw-bold">My tech stack</h2>
                <div>
                    <ul class="row row-cols-3 list-unstyled justify-content-around">
                        <li class="technology displayBox" v-for="technology in this.technologies">
                            <div class="tech d-flex flex-column align-items-center my-2">
                                <img class="text-center tech_icon"
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