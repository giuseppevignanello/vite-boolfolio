
<script>
import axios from 'axios';

export default {
    name: "AppContacts",
    data() {

        return {
            name: '',
            email: '',
            message: '',
            errors: {},
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            this.errors = {};

            axios.post('https://api.giuseppevignanello.com/api/contacts', data)
                .then(response => {
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<template>
    <section id="contacts" class="contact_me py-5 w-75 m-auto">
        <div class="inner-wrapper">
            <div class="container text-center">
                <h2 class="text-uppercase">contact me</h2>
                <div v-if="success" class="alert alert-success text-start" role="alert">
                    Messaggio inviato con successo!
                </div>
                <div class="row">
                    <form @submit.prevent="sendForm()" class="col-12 text-start">
                        <div class="mb-3">
                            <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.name }"
                                type="text" name="name" id="name" placeholder="Name" v-model="name">
                            <p v-for="(error, index) in errors.name" :key="`message-error-${index}`"
                                class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>
                        <div class="mb-3">
                            <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.email }"
                                type="text" name="email" id="email" placeholder="Email" v-model="email">
                            <p v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                                class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>
                        <div class="mb-3">
                            <textarea class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.message }"
                                name="message" id="message" cols="30" rows="10" placeholder="Message"
                                v-model="message"></textarea>
                            <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                                class="invalid-feedback">
                                {{ error }}
                            </p>
                        </div>
                        <button class="btn btn-lg btn-primary text-white" type="submit" :disabled="loading">{{ loading ?
                            'Sending...' : 'Send'
                        }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped></style>