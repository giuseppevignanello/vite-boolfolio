<script>
export default {
    name: 'MyStory',
    data() {


        return {

        }
    },

}
</script>

<template>
    <div class="my_story container overflow-hidden">
        <div class="d-md-flex mb-5">
            <div data-aos="fade-left" data-aos-easing="ease-out" id="about"
                class="card p-3 shadow bg_opacity m-3 p-4">
                <h2 class="display-5 fw-bold">My Story</h2>
                <ul class=" d-flex flex-column justify-content-around h-100">
                    <li class="emoji-list-item list-unstyled my-3">
                        <h2>👦🏻 I was born in Sicily</h2>
                    </li>
                    <li class="emoji-list-item list-unstyled my-3">
                        <h2>💻 I studied philosophy at the University of Bologna and web development at
                            Boolean Academy</h2>
                    </li>
                    <li class="emoji-list-item list-unstyled my-3">
                        <h2>📚 I worked in the publishing industry</h2>
                    </li>
                    <li class="emoji-list-item list-unstyled my-3">
                        <h2>✈️ I currently live in Barcelona</h2>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>