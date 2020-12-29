<template>
    <v-card
            flat
            tile
            width="100%"
            class="text-center"
            color="dark"
    >
        <v-card-text class="white--text font-weight-bold">
            <v-row align="center">
                <v-col cols="12" md="3" sm="12">
                    <v-img
                            :src="require('../assets/logo.png')"
                            class="mx-auto mb-0"
                            max-width="200px"
                    />
                    <br>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid assumenda at commodi
                        deserunt fugit inventore porro veritatis voluptatibus. Consequatur
                    </p>
                </v-col>
                <v-col cols="12" md="5" sm="12" class="mx-auto">
                    <v-row class="text-left">
                        <v-col cols="12">
                            <h3 class="text-center text-md-left">
                                {{$t('footer.links')}}
                            </h3>
                        </v-col>
                        <v-col>
                            <div class="mt-2">
                                <router-link :to="{name: 'About'}" tag="a" class="mr-2">{{$t('navbar.about')}}
                                </router-link>
                                <br>
                                <router-link :to="{name: 'Home'}" tag="a" class="mr-2">{{$t('navbar.downloadApp')}}
                                </router-link>
                                <br>
                                <router-link :to="{name: 'Contact'}" tag="a">{{$t('navbar.contact')}}</router-link>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="mt-2">
                                <router-link :to="{name: 'About'}" tag="a" class="mr-2">Terms & Conditions
                                </router-link>
                                <br>
                                <router-link :to="{name: 'Home'}" tag="a" class="mr-2">Privacy Policy
                                </router-link>
                                <br>
                                <router-link :to="{name: 'Contact'}" tag="a">FAQ</router-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="3">
                    <h3 class="text-center text-md-left">
                        Contact info
                    </h3>
                    <v-row class="text-left">
                        <v-col cols="1">
                            <v-icon color="white" class="mr-5">mdi-map-marker</v-icon>
                        </v-col>
                        <v-col cols="11">
                            No: 100, Avenue Road, NewYork, United States
                        </v-col>
                    </v-row>
                    <v-row class="text-left">
                        <v-col cols="1">
                            <v-icon color="white" class="mr-5">mdi-phone</v-icon>
                        </v-col>
                        <v-col cols="11">
                            +44 125 23 2563
                        </v-col>
                    </v-row>
                    <v-row class="text-left">
                        <v-col cols="1">
                            <v-icon color="white" class="mr-5">mdi-email-outline</v-icon>
                        </v-col>
                        <v-col cols="11">
                            info@towugo.com
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider/>

        <v-card-text class="white--text">
            <v-row>
                <v-col md="8">
                    @{{ new Date().getFullYear() }} — <strong>Towugo. All rights reserved</strong>
                </v-col>
                <v-col md="4">
                    <v-icon color="white" class="mr-5">mdi-facebook</v-icon>
                    <v-icon color="white" class="mr-5">mdi-instagram</v-icon>
                    <v-icon color="white" class="mr-5">mdi-twitter</v-icon>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "AppFooter",
        data() {
            return {};
        },
        computed: mapGetters(["lang"]),
    };
</script>
<style lang="scss" scoped>
    a {
        color: white !important;
        text-decoration: none;
    }
</style>