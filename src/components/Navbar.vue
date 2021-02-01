<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list class="pl-4">
        <v-list-item>
          <v-list-item-title>
            <a href="#about">
              <v-btn text class="black--text">
                {{ $t('navbar.about') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a class="white--text" href="#download">
              <v-btn text class="primary" rounded>
                {{ $t('navbar.downloadApp') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="#faq">
              <v-btn text class="black--text">
                FAQ
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="#contact">
              <v-btn text class="black--text">
                {{ $t('navbar.contact') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
    <v-app-bar
        color="secondary"
        dark
        flat
        :height="$vuetify.breakpoint.mdAndUp?'120':'50'"
    >
      <div :class="$vuetify.breakpoint.mdAndUp?'mt-1':'mt-1'">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            :width="$vuetify.breakpoint.smAndDown?100:240"
        />
        <div class="dark--text text-center" v-if="$vuetify.breakpoint.mdAndUp">
          {{ $t('navbar.atYourService') }}
        </div>

      </div>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <a href="#about" v-smooth-scroll>
          <v-btn text class="black--text">
            {{ $t('navbar.about') }}
          </v-btn>
        </a>

        <a class="white--text" href="#download" v-smooth-scroll>
          <v-btn text class="primary" rounded>
            {{ $t('navbar.downloadApp') }}
          </v-btn>
        </a>

        <a href="#faq" v-smooth-scroll>
          <v-btn text class="black--text">
            FAQ
          </v-btn>
        </a>
        <a href="#contact" v-smooth-scroll>
          <v-btn text class="black--text">
            {{ $t('navbar.contact') }}
          </v-btn>
        </a>

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
<style>
a {
  text-decoration: none;
}
</style>
