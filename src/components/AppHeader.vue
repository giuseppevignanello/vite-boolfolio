
<script>
export default {
    setup() {


        return {}
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg_header justify-content-center">
            <div class="nav navbar-nav">
                <a class="nav-item nav-link" href="#">
                    <router-link class="text-white" :to="{ name: 'home' }">
                        Home
                    </router-link>
                </a>
                <a class="nav-item nav-link text-white" href="#about">
                    About
                </a>
                <a class="nav-item nav-link text-white" href="#">
                    <router-link class="text-white" :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </a>

            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped></style>