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
    <div data-aos="fade-down" data-aos-easing="ease-out"
        class="col-12 col-sm-6 col-md-4 col-lg-3 card border-0 mb-4 bg-transparent project_card px-5 px-sm-2">
        <router-link class="text-black" :to="{ name: 'single-project', params: { slug: slug } }">
            <img style="height: 140px;" :src="image" class="card-img-top border" alt="{{title}}">
            <div class="card-body bg_opacity shadow rounded-bottom">
                <h5 class="card-title">{{ title }}</h5>
                <p v-if="type == 'Front-End'" class="badge bg-secondary d-block w-50">{{ type }}</p>
                <p v-else-if="type == 'Back-End'" class="badge bg-primary d-block w-50">{{ type }}</p>
                <p v-else-if="type == 'Full-Stack'" class="badge bg-success d-block w-50">{{ type }}</p>
            </div>
        </router-link>
    </div>
</template>