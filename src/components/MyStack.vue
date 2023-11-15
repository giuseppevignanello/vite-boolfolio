
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
    <div class="technologies_section">

        <div class="container py-3 mb-5 overflow-hidden">
            <div class="d-md-flex gap-5">
                <div class="card shadow bg_opacity p-4 col-md-6" data-aos="fade-right" data-aos-easing="ease-out">

                    <h2 class="display-4 fw-bold">My tech stack</h2>
                    <div>
                        <ul class="row row-cols-3 list-unstyled justify-content-around">
                            <li class="technology" v-for="technology in this.technologies">
                                <div class="tech d-flex flex-column align-items-center my-2">
                                    <img class="text-center tech_icon"
                                        :src="'https://api.giuseppevignanello.com/storage/' + technology.image" alt="">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-easing="ease-out" class="col-md-6 d-none d-md-flex align-items-center">
                    <p class="display-2 quote"> Coding is a continuous learning journey</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>