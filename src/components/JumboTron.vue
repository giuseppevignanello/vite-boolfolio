
<script>
export default {
    data() {


        return {}
    }
}
</script>

<template>
    <div>
        <div class="p-5 mb-3 rounded-3">
            <div class="container py-5 d-md-flex">
                <div class="text w-md-50 ">
                    <h1 class="display-5 fw-bold typewriter">Hi, I'm Peppe</h1>
                    <p class="fs-5 typewriter">I'm an italian junior fullstack developer based in Barcelona
                    </p>
                    <router-link :to="{ name: 'about' }">
                        <button class="btn bg_opacity btn-lg" type="button">About me</button>
                    </router-link>
                </div>
                <div class="avatar bg_header my-2">
                    <img class="me" src="../../public/img/me.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>