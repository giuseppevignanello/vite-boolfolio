
<script>

import { store } from '../store'
import axios from "axios";

export default {
    name: 'SingleProject',
    data() {
        return {
            project: null,
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
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">Body</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>