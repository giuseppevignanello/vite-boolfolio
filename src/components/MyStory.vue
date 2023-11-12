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
    <div class="d-md-flex mb-5">
        <div class=" ps-3 my-3 col-12 col-lg-6 d-flex h-50">
            <div class="d-flex align-items-center">
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
        <div id="about" class="card p-3 shadow bg_opacity m-3 p-4 col-md-6">
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
</template>


<style lang="scss" scoped></style>