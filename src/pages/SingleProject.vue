
<script>

import { store } from '../store'
import axios from "axios";

export default {
    name: 'SingleProject',
    data() {
        return {

            store
        }
    },
    mounted() {
        axios.get(`${this.store.apiUrl}${this.store, ProjectsPath}${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.project = response.data.project;
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
            <img class="card-img-top" src="" alt="Title">
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">Body</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>