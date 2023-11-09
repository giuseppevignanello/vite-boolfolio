
<script>
export default {
    data() {


        return {

        }
    }

}
</script>

<template>
    <div>
        <div class="p-5 mb-3 rounded-3">
            <div class="container py-5">
                <div class="row">
                    <div class="text col-12 col-lg-6">
                        <h1 class="display-5 fw-bold">Hi, I'm Peppe</h1>
                        <p class="fs-3">I'm an Italian Fullstack Developer based in Barcelona
                        </p>
                        <router-link :to="{ name: 'about' }">
                            <button class="btn bg_opacity btn-lg" type="button">About me</button>
                        </router-link>

                    </div>
                    <div class="avatar bg_header ps-3 my-3 col-12 col-lg-6 d-flex h-50">
                        <div class="text-white d-flex align-items-center">
                            <p class="code_text my-3">
                                <span class="first_line"><span class="text-primary"> let</span>
                                    meHappy = <span class="text-primary">false</span>; </span>
                                <br>
                                <span class="second_line"> <span class="text-primary">let</span> hasBooks = <span
                                        class="text-primary">true</span>; </span>
                                <br>
                                <span class="third_line"> <span class="text-primary">let</span> hasCode = <span
                                        class="text-primary">true</span>; </span><br>
                                <span class="fourth_line"> <span class="text-primary">if</span> (hasBooks && hasCode) {
                                </span><br>
                                <span class="fifth_line"> &nbsp &nbsp meHappy = <span class="text-primary">true</span>
                                </span><br>
                                <span class="sixth_line">} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>