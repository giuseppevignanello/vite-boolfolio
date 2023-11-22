
<script>
export default {
    data() {


        return {}
    }
}
</script>

<template>
    <div class="app_footer py-4 mt-5 bg_header">
        <div class="text-center text-white">
            <h4>Follow me!</h4>
            <div class="social d-flex align-items-center justify-content-center my-3">
                <div class="mx-2 not_overflow">
                    <a href="https://www.linkedin.com/in/giuseppe-vignanello-91b31020b/" target="_blank" class="text-white">
                        <i class="fa-brands fa-linkedin fa-xl"></i></a>
                </div>
                <div class="mx-2 not_overflow">
                    <a href="https://github.com/giuseppevignanello" target="_blank" class="text-white"> <i
                            class="fa-brands fa-github fa-xl"></i></a>
                </div>
                <div class="mx-2 not_overflow">
                    <a href="https://medium.com/@giuseppevignanello" target="_blank" class="text-white"> <i
                            class="fa-brands fa-medium fa-xl"></i></a>
                </div>


            </div>
            <div class="copyright">
                <router-link class="text-white" :to="{ name: 'privacy-policy' }">
                    <a href="" class="text-white"> Privacy Policy
                    </a> </router-link>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>