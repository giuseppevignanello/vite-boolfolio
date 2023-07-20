
<script>
import { store } from '../store';
import axios from 'axios';
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
        <div class="p-5 mb-3 rounded-3">
            <div class="container py-5">
                <div class="row">
                    <div class="text col-12 col-lg-6">
                        <h1 class="display-5 fw-bold">Hi, I'm Peppe</h1>
                        <p class="fs-3">I'm an italian junior fullstack developer based in Barcelona
                        </p>
                        <router-link :to="{ name: 'about' }">
                            <button class="btn bg_opacity btn-lg" type="button">About me</button>
                        </router-link>

                    </div>
                    <div class="avatar bg_header my-3 col-12 col-lg-6 d-flex h-50">
                        <img class="me col-sm-6 col-md-7 d-none col-lg-6 d-sm-block" src="../../public/img/me.png" alt="">
                        <div class="text-white d-flex align-items-center">
                            <p class="code_text my-3">
                                <span class="first_line"><span class="text-primary"> let</span>
                                    meHappy = <span class="text-primary">false</span>; </span>
                                <br>
                                <span class="second_line"> <span class="text-primary">let</span> hasBooks = <span
                                        class="text-primary">true</span>; </span>
                                <br>
                                <span class="third_line"> <span class="text-primary">let</span> hasCode = <span
                                        class="text-primary">true</span>; </span><br>
                                <span class="fourth_line"> <span class="text-primary">if</span> (hasBooks && hasCode) {
                                </span><br>
                                <span class="fifth_line"> &nbsp &nbsp meHappy = <span class="text-primary">true</span>
                                </span><br>
                                <span class="sixth_line">} </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card p-3 shadow bg_opacity mt-3">
                    <h2 class="fw-bold">My tech stack</h2>
                    <ul class="d-flex list-unstyled flex-wrap justify-content-center">
                        <li class="technology my-3" v-for="technology in this.technologies">
                            <div class="me-5 tech">
                                <img class="text-center" style="width: 100px; height: 100px;"
                                    :src="'https://api.giuseppevignanello.com/storage/' + technology.image" alt="">
                                <p class="text-center"> <strong>{{ technology.name }} </strong> </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>