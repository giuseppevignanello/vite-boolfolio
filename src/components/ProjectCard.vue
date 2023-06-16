<script>

export default {
    name: "ProjectCard",
    props: {
        image: String,
        title: String,
        type: String,
        slug: String,
    },

    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 card border-0 mb-5  bg-transparent">
        <img style="height: 140px;" :src="image" class="card-img-top border" alt="{{title}}">
        <div class="card-body bg_opacity shadow rounded-bottom">
            <h4 class="card-title">{{ title }}</h4>
            <p v-if="type == 'Front-End'" class="badge bg-secondary d-block w-50">{{ type }}</p>
            <p v-else-if="type == 'Back-End'" class="badge bg-primary d-block w-50">{{ type }}</p>
            <p v-else-if="type == 'Full-Stack'" class="badge bg-success d-block w-50">{{ type }}</p>
            <router-link class="text-black" :to="{ name: 'single-project', params: { slug: slug } }">
                View More
            </router-link>
        </div>
    </div>
</template>