
<script>
import axios from 'axios';

export default {
    data() {


        return {
            axios,
            name: '',
            email: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        submitForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post('http://127.0.0.1:8000/api/contacts', data)
                .then(response => {
                    if (!response.data.succes) {
                        this.errors = response.data.errors
                    }
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<template>
    <div>
        <div class="container mt-5">
            <div class="card p-4 bg_opacity">
                <h1 class="display-5 fw-bold text-center"> <strong> CONTACT ME! </strong></h1>
                <form action="" @submit.prevent="submitForm()">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name="name" id="name" class="form-control" aria-describedby="nameHelper"
                            v-model="name">
                        <small id="nameHelper" class="text-muted">Type your full name here</small>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name="email" id="email" class="form-control" aria-describedby="emailHelper"
                            v-model="email">
                        <small id="emailHelper" class="text-muted">Type your email here</small>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="8" v-model="message"></textarea>
                    </div>

                    <button type="submit" class="btn bg_header text-white">Send</button>
                </form>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>