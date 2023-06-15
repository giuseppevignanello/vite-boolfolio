
<script>
import axios from 'axios';
import { store } from '../store'

export default {
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
        <h3>About</h3>

        <h2>My Stack</h2>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                <div v-for="technology in this.technologies" class="card text-start">
                    <img class="card-img-top" src="holder.js/100px180/" alt="Title">
                    <div class="card-body">
                        <h4 class="card-title">{{ technology.name }}</h4>
                        <p class="card-text">Body</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>