<script>
export default {
    name: "ProjectCard",
    props: {
        image: String,
        title: String,
        description: String,
        slug: String
    },
}

</script>

<template>
    <div class="card">
        <img style="width: 300px;" class="card-img-top" :src="image" alt="Title">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: slug } }">
                View More
            </router-link>
        </div>
    </div>
</template>