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
    <div class="card border-0 align-items-center">
        <img style="width: 200px;" class="card-img-top shadow" :src="image" alt="Title">
        <div class="card-body shadow mx-4 mb-4 w-75">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: slug } }">
                View More
            </router-link>
        </div>
    </div>
</template>