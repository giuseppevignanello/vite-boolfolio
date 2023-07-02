
<script>
export default {
    name: "Non Found",
    data() {


        return {}
    }
}
</script>

<template>
    <div>
        <h1 class="text-center mt-2"> <strong>Oh no, you seem to be lost </strong></h1>
        <h3 class="text-center">This is a 404 page actually</h3>
        <p class="text-center"> I hope you find your way back home. Maybe the link below can help</p>
        <div class="d-flex justify-content-center">
            <div class="avatar_404 bg_header">
                <img class="me-404" src="../../public/img/avatar_404.png" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-center">

            <router-link :to="{ name: 'home' }" class="text-center">
                <h2 class="mt-3">Home</h2>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>b