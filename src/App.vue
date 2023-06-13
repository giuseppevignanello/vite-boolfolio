<script>
import axios from 'axios'

export default {
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/',
            ProjectsPath: 'api/projects',
            projects: [],
        }
    }, method: {
        getProjects(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                })

        }
    }, mounted() {
        const url = this.apiUrl + this.ProjectsPath
        console.log(url);
    }
}
</script>

<template>
    <div>

    </div>
</template>

