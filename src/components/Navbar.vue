<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer">
            <v-list class="pl-4">
                <v-list-item>
                    <v-list-item-title>
                        <v-btn :to="{name: 'About'}"
                               text class="black--text"
                        >
                            {{$t('navbar.about')}}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <v-btn :to="{name: 'Download'}"
                               text class="primary"
                               rounded
                        >
                            {{$t('navbar.downloadApp')}}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <v-btn
                                text class="black--text"
                        >
                            {{$t('navbar.contact')}}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>


        </v-navigation-drawer>
        <v-app-bar
                app
                color="secondary"
                dark
                flat
        >
            <div :class="$vuetify.breakpoint.mdAndUp?'mt-14':'mt-1'">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="../assets/logo.png"
                        transition="scale-transition"
                        :width="$vuetify.breakpoint.smAndDown?100:240"
                />
                <div class="dark--text" v-if="$vuetify.breakpoint.mdAndUp">
                    <strong>{{$t('navbar.atYourService')}}</strong>
                </div>

            </div>

            <v-spacer></v-spacer>
            <div class="hidden-md-and-down">
                <v-btn :to="{name: 'About'}"
                       text class="black--text"
                >
                    {{$t('navbar.about')}}
                </v-btn>

                <v-btn :to="{name: 'Download'}"
                       text class="primary"
                       rounded
                >
                    {{$t('navbar.downloadApp')}}
                </v-btn>

                <v-btn
                        text class="black--text"
                >
                    {{$t('navbar.contact')}}
                </v-btn>

            </div>

            <v-btn
                    text class="black--text ml-5"
                    v-if="$i18n.locale==='en'"
                    @click="switchLang('fr')"
            >
                FR
            </v-btn>
            <v-btn
                    text class="black--text ml-5"
                    v-if="$i18n.locale==='fr'"
                    @click="switchLang('en')"
            >
                EN
            </v-btn>
            <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-md-and-up"
            />
        </v-app-bar>

    </div>
</template>

<script>
    import i18n from '../i18n'

    export default {
        name: 'Navbar',
        methods: {
            switchLang(lang) {
                i18n.locale = lang;
            }
        },
        data: () => ({
            drawer: false
        }),
    }
</script>
