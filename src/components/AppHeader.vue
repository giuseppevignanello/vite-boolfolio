
<script>
export default {
    setup() {


        return {}
    }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light justify-content-center">
            <div class="nav navbar-nav">
                <a class="nav-item nav-link" href="#">
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </a>
                <a class="nav-item nav-link" href="#">
                    <router-link :to="{ name: 'about' }">
                        About
                    </router-link>
                </a>
                <a class="nav-item nav-link" href="#">
                    <router-link :to="{ name: 'contacts' }">
                        Contacts
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped></style>