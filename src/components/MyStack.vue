
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
            <div class="card p-5 shadow bg_opacity">
                <h2 class="display-5 fw-bold">My tech stack</h2>
                <ul
                    class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 list-unstyled flex-wrap justify-content-around">
                    <li class="technology my-4 displayBox" v-for="technology in this.technologies">
                        <div class="tech d-flex flex-column align-items-center">
                            <img class="text-center tech_icon" style="width: 90px; height: 90px; "
                                :src="'https://api.giuseppevignanello.com/storage/' + technology.image" alt="">
                            <p class="text-center tech_text mt-2"> <strong>{{ technology.name }} </strong> </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>