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
                    <p>
                       {{$t('navbar.atYourService')}}
                    </p>
                </v-col>
                <v-col cols="12" md="5" sm="12" class="mx-auto">
                    <v-row class="text-left">
                        <v-col cols="12">
                            <h3 class="text-center">
                                {{$t('footer.links')}}
                            </h3>
                        </v-col>
                        <v-col>
                            <div class="mt-2">
                                <a href="#about" v-smooth-scroll class="mr-2">{{$t('navbar.about')}}
                                </a>
                                <br>
                                <a href="#contact" v-smooth-scroll>{{$t('navbar.contact')}}</a>
                            </div>
                        </v-col>
                        <v-col>
                            <div class="mt-2">
                                <a href="#download" v-smooth-scroll class="mr-2">{{$t('footer.downloadApp')}}
                                </a>
                                <br>
                                <a href="#faq" v-smooth-scroll >FAQ</a> <br>
                                <a href="/terms-and-conditions" >Terms</a>
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
                          3000 Boul. des Laurentides, Suite 12-203
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

        <div class="white--text text-center">
                    @{{ new Date().getFullYear() }} — <strong>Towugo. All rights reserved</strong>
        </div>
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
