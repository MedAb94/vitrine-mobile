<template>
    <div>
        <section class="secondary py-3">
            <v-container class="home">
                <v-row class="fill-height align-center">
                    <v-col cols="12" md="7" class="text-center text-md-left">
                        <h1 class="display-1 font-weight-bold">
                            <span class="primary--text">No Need </span> To Push <br> You Car <span
                                class="primary--text">Anymore</span>
                        </h1>
                        <h1 class="display-1 font-weight-bold">
                            <span class="primary--text">Download </span> Our App <span class="primary--text">Now</span>
                        </h1>
                        <p>
                            We find you a towing or an road mechanic specialist service instantly, even if you're in the
                            middle of nowhere
                        </p>
                        <v-btn :to="{name: 'Download'}"
                               text class="primary"
                               rounded
                        >
                            {{$t('home.downloadNow')}}
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="5" class="text-center">
                        <v-img src="../assets/hero.png" class="mx-auto" style="max-width: 300px"/>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="light py-8">
            <v-container class="text-center text-md-left">
                <h1 class="font-weight-bold"> What's<span class="primary--text">TOWUGO</span></h1>
                <p class="text-justify">
                    When you need a towing or a service of a mechanic on the road or at your house, TOWUGO is an app
                    which connect you quickly with the service near you. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.

                </p>
                <v-img src="../assets/video.png" width="800px" class="mx-auto video">

                </v-img>
            </v-container>
        </section>
        <section class="dark">
            <v-container>
                <v-row class="fill-height align-center">
                    <v-col cols="12" md="7" class="text-center text-md-left">

                        <h1 class="white--text font-weight-bold">
                            DOWNLOAD OUR APPLICATION!
                        </h1>
                        <p class="white--text font-weight-bold">
                            Download the <span class="primary--text">TOWUGO</span> App and get notifications when new
                            auctions start or if there's any update to your items.

                        </p>
                        <v-img></v-img>
                    </v-col>
                    <v-col cols="12" md="5" class="text-center">
                        <v-img src="../assets/hero2.png" class="mx-auto" width="300px"/>
                    </v-col>
                </v-row>
            </v-container>

        </section>
        <section class="light py-8">
            <v-container>
                <h1 class="font-weight-bold text-uppercase text-center">CONTACT US</h1>
                <v-row>
                    <v-col md="6" class="mx-auto">
                        <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                        >
                            <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Your name"
                                    placeholder="Enter your name here"
                                    required
                                    outlined
                                    append-icon="mdi-card-account-details "
                            />

                            <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    placeholder="Enter your e-mail addresse here"
                                    label="Your E-mail"
                                    required
                                    outlined
                                    append-icon="mdi-email-outline "
                            />


                            <v-textarea outlined label="Message"
                                        append-icon="mdi-comment"
                                        placeholder="Type your message here">

                            </v-textarea>

                            <v-btn
                                    :disabled="!valid"
                                    color="primary"
                                    class="mr-4"
                                    block
                                    large
                                    @click="validate"
                            >
                                Validate
                            </v-btn>

                        </v-form>

                    </v-col>
                </v-row>
            </v-container>
        </section>
        <mail-box/>
    </div>

</template>
<script>
    import MailBox from "../components/MailBox.vue";

    export default {
        name: 'Home',
        components: {MailBox},
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 30) || 'Name must be less than 30 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'Invalid E-mail',
            ],
            select: null,
        }),

        methods: {
            validate() {
                this.$refs.form.validate()
            },
        },
    }
</script>
<style scoped>
    .home {
    }

    .video {
        border: 8px solid blue;
        border-top: 0;
        border-left: 0;
        border-radius: 10px;
    }
</style>
