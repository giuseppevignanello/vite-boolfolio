
<script>

import { store } from '../store'
export default {
    name: 'SingleProject',
    data() {
        return {
            slugParam: '',
            store
        }
    },
    mounted() {
        this.slugParam = this.$route.params.slug
        this.store.getProjects(this.store.apiUrl + this.store.ProjectsPath)
    }
}
</script>
<template>
    <div>
        <div class="card text-start">
            <img class="card-img-top" src="" alt="Title">
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Body</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>