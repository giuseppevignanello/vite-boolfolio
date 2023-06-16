
<script>
export default {
    setup() {


        return {}
    }
}
</script>

<template>
    <div>
        <div class="container mt-5">
            <div class="card p-4 bg_opacity">
                <h1 class="text-white text-center"> <strong> CONTACT ME! </strong></h1>
                <form action="">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name="name" id="name" class="form-control" aria-describedby="nameHelper">
                        <small id="nameHelper" class="text-muted">Type your full name here</small>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">email</label>
                        <input type="email" name="email" id="email" class="form-control" aria-describedby="emailHelper">
                        <small id="emailHelper" class="text-muted">Type your email here</small>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="8"></textarea>
                    </div>

                    <button type="submit" class="btn bg_header text-white">Submit</button>
                </form>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>