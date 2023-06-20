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
    <div>

        <div class="container py-3">
            <div class="card p-5 shadow bg_opacity">
                <h2 class="display-5 fw-bold">Other Things</h2>
                <h5> I love reading and writing and I collaborate with some publishing projects</h5>
                <ul class="d-flex list-unstyled flex-wrap justify-content-center">
                    <li class="technology my-3" v-for="publishing in  this.publishings ">
                        <a class="text-dark" :href="publishing.website" target="_blank">
                            <div class="me-5 tech">
                                <div class="d-flex justify-content-center">
                                    <img style="width: 100px; height: 100px;"
                                        :src="'http://127.0.0.1:8000/storage/' + publishing.image" alt="">
                                </div>
                                <p class="text-center"> <strong>{{ publishing.name }} </strong> <br>
                                    {{ publishing.location }} <br>

                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>