
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
            <div class="container py-5">
                <div class="row">
                    <div class="text col">
                        <h1 class="display-5 fw-bold typewriter">Hi, I'm Peppe</h1>
                        <p class="fs-3 typewriter">I'm an italian junior fullstack developer based in Barcelona
                        </p>
                        <router-link :to="{ name: 'about' }">
                            <button class="btn bg_opacity btn-lg" type="button">About me</button>
                        </router-link>
                    </div>
                    <div class="avatar bg_header my-2 col">
                        <img class="me" src="../../public/img/me.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>