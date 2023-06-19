
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
    <div class="container py-3">
        <div class="my_story card p-4 bg_opacity">
            <div>
                <h2 class="display-5 fw-bold">My Story</h2>
                <div>
                    <div class="d-flex flex-column flex-sm-row justify-content-between text-white">
                        <div class="d-flex align-items-center">
                            <h3 class:>Sicily</h3>
                            <img class="mb-2 ms-2" style="width: 30px" src=" ../../public/img/lemon.png" alt="lemon">

                        </div>
                        <div class="d-flex align-items-center">
                            <h3>Bologna</h3>
                            <img class="mb-2 ms-2" style="width: 30px" src="../../public/img/tortellino.png"
                                alt="tortellino">

                        </div>
                        <div class="d-flex align-items-center">
                            <h3>Barcelona</h3>
                            <img class="mb-2 ms-2" style="width: 30px" src="../../public/img/bravas.png" alt="bravas">

                        </div>
                    </div>
                    <div class="flight align-items-bottom d-none d-sm-flex">
                        <div class="line me-2">

                        </div>
                        <div>
                            <img style="width: 30px;" src="../../public/img/plane.png" alt="paper_airplane">
                        </div>
                    </div>
                </div>
            </div>
            <div class="text d-flex row row-cols-1 row-cols-sm-3 flex-column flex-sm-row">

                <p class="born">🚩 I was born in Sicily in 1997</p>

                <p class="study">🚩 I studied philosophy at the University of Bologna <br>
                    and web development at Boolean Academy </p>

                <p class="live">🚩I currently live in Barcelona </p>
            </div>
        </div>



    </div>

    <div class="container my-3">


    </div>
</template>


<style lang="scss" scoped></style>