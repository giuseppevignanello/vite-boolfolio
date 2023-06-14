
<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'


export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/",
            ProjectsPath: "api/projects",
            projects: [],
        };
    },
    methods: {
        getProjects(url) {
            axios.get(url)
                .then(response => {
                    this.projects = response.data.projects;
                    console.log(this.projects);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const url = this.apiUrl + this.ProjectsPath;
        this.getProjects(url);
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- <router-link :to="{ name: 'single-project' }"> -->
            <ProjectCard v-for="project in  projects " :title="project.title"
                :image="'http://127.0.0.1:8000/storage/' + project.image" :description="project.description" />
            <!-- </router-link> -->

        </div>

    </div>
</template>


<style lang="scss" scoped></style>