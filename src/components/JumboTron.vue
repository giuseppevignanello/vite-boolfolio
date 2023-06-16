
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
                <div class="text">
                    <h1 class="display-5 fw-bold">Hi, I'm Peppe</h1>
                    <p class="col-md-8 fs-4">I'm an italian junior fullstack developer based in Barcelona</p>
                    <router-link :to="{ name: 'about' }">
                        <button class="btn bg_opacity btn-lg" type="button">About me</button>
                    </router-link>
                </div>
                <div class="avatar d-none d-sm-block">
                    <img src="../../public/img/me.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>