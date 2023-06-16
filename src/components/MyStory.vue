
<script>
export default {
    name: 'MyStory',
    data() {


        return {}
    }
}
</script>

<template>
    <div>
        <h2>My Story</h2>
        <div id="story-animation">
            <div class="destination sicilia d-flex">
                <img style="width: 300px;" src="../../public/img/sicily.png" alt="">
                <h5 class="destination_text ">Sicily</h5>

            </div>
            <div class="destination bologna d-flex">
                <img style="width: 300px;" src="../../public/img/bologna.png" alt="">

                <h5 class="destination_text">Bologna</h5>


            </div>
            <div class="destination barcelona d-flex">
                <img style="width: 300px;" src="../../public/img/barcelona.png" alt="">

                <h5 class="destination_text">Barcelona</h5>


            </div>
            <div class="me">
                <img style="width: 50px;" src="../../public/img/my_avatar.png" alt="">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>