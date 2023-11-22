<script>
import axios from 'axios';
import { store } from '../store'

export default {
    name: 'OtherThings',
    data() {

        return {
            store,
            PublishingsPath: "api/publishings",
            publishings: [],
            loading: true,
        }
    }, methods: {
        getPublishings(url) {
            axios
                .get(url)
                .then((response) => {
                    this.loading = false;
                    this.publishings = response.data.publishings
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, mounted() {
        this.getPublishings(this.store.apiUrl + this.PublishingsPath)

    }
}
</script>

<template>
    <div class="other_things mb-5">

        <div class="container py-3">
            <div data-aos="fade-down" class="card p-4 shadow bg_opacity">
                <h2 class="display-5 fw-bold">Other Projects</h2>
                <h5> I love reading and writing and I collaborate with some publishing projects</h5>
                <ul class="d-flex list-unstyled row-cols-2 row-cols-md-3 row-cols-lg-6 flex-wrap">

                    <li class="my-3" v-for="publishing in  this.publishings ">

                        <a class="text-dark" :href="publishing.website" target="_blank">

                            <div class="d-flex justify-content-center">
                                <img style="width: 100px; height: 100px;"
                                    :src="'https://api.giuseppevignanello.com/storage/' + publishing.image" alt="">
                            </div>
                            <div>
                                <p class="text-center"> <strong>{{ publishing.name }} </strong> <br>
                                    {{ publishing.location }} <br>

                                </p>
                            </div>

                        </a>

                    </li>

                </ul>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-dark"> <a href="https://medium.com/@giuseppevignanello" target="_blank"
                            class="text-white text-decoration-none"> <i class="fa-brands fa-medium fa-xl"></i> Read my
                            coding
                            articles
                        </a> </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>