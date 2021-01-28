<template>
    <div>
        <section class="secondary py-3">
            <v-container class="home">
                <v-row class="fill-height align-center">
                    <v-col cols="12" md="7" class="text-center text-md-left">
                        <h1 class="display-1 font-weight-bold">
                            {{$t('home.title')}}
                        </h1>
                        <p>
                            {{$t('home.subtitle')}}
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
                <h1 class="font-weight-bold">{{$t('home.howItWorks.title')}}</h1>
                <p class="text-justify">
                    {{$t('home.howItWorks.text')}}
                </p>
                <div class="font-weight-bold">{{$t('home.howItWorks.services')}}</div>
                <ul>
                    <li>{{$t('home.howItWorks.serv1')}}</li>
                    <li>{{$t('home.howItWorks.serv2')}}</li>
                </ul>
                <div>{{$t('home.howItWorks.text2')}}</div>
                <v-img src="../assets/video.png" width="800px" class="mx-auto video"/>
            </v-container>
        </section>
        <section class="dark">
            <v-container>
                <v-row class="fill-height align-center">
                    <v-col cols="12" md="7" class="text-center text-md-left">

                        <h1 class="white--text font-weight-bold">
                            {{$t('footer.downloadApp')}}
                        </h1>
                        <p class="white--text font-weight-bold">
                            {{$t('footer.think')}}
                        </p>
                        <v-container class="text-center">

                                 <img src="../assets/App store.png" width="120" height="40">
                                <img src="../assets/playStore.png" width="120" height="40">

                        </v-container>

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
                                {{$t('home.send')}}
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
