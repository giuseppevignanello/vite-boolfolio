<script>
export default {
    name: "ProjectCard",
    props: {
        image: String,
        title: String,
        description: String
    }
}

</script>

<template>
    <div class="card">
        <img style="width: 100px;" class="card-img-top" :src="image" alt="Title">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ description }}</p>
        </div>
    </div>
</template>