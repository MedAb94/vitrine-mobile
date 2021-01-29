<template>
  <div>
    <section class="secondary py-3">
      <v-container class="home">
        <v-row class="fill-height align-center">
          <v-col cols="12" md="7" class="text-center text-md-left">
            <h1 class="display-1 font-weight-bold">
              {{ $t('home.title') }}
            </h1>
            <p>
              {{ $t('home.subtitle') }}
            </p>

          </v-col>
          <v-col cols="12" md="5" class="text-center">
            <v-img src="../assets/hero.png" class="mx-auto" style="max-width: 300px"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light py-8">
      <v-container class="text-center text-md-left" id="about">
        <h1 class="font-weight-bold">{{ $t('home.howItWorks.title') }}</h1>
        <p class="text-justify">
          {{ $t('home.howItWorks.text') }}
        </p>
        <div class="font-weight-bold">{{ $t('home.howItWorks.services') }}</div>
        <ul>
          <li>{{ $t('home.howItWorks.serv1') }}</li>
          <li>{{ $t('home.howItWorks.serv2') }}</li>
        </ul>
        <div>{{ $t('home.howItWorks.text2') }}</div>
        <v-img src="../assets/video.png" width="800px" class="mx-auto video"/>
      </v-container>
    </section>
    <section class="dark" id="download">
      <v-container>
        <v-row class="fill-height align-center">
          <v-col cols="12" md="7" class="text-center text-md-left">

            <h1 class="white--text font-weight-bold">
              {{ $t('footer.downloadApp') }}
            </h1>
            <p class="white--text font-weight-bold">
              {{ $t('footer.think') }}
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
    <section class="light" id="faq">
      <v-container>
        <h3>Les questions les plus fréquemment posées</h3>
        <v-expansion-panels>
          <v-expansion-panel class="my-2 transparent rounded py-1">
            <v-expansion-panel-header color="font-weight-bold">
              Quels sont les services offerts par l’application mobile TOWUGO?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              TOWUGO offre ces deux services : <br>
              <ul>
                <li>Le remorquage.</li>
                <li>Réparation mécanique du véhicule, à domicile ou sur la route.</li>
              </ul>


            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="my-2 transparent rounded py-1" v-for="item in faq">
            <v-expansion-panel-header color="font-weight-bold">
              {{ item.q }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.r }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>
    <section class="light py-8" id="contact">
      <v-container>
        <h1 class="font-weight-bold text-uppercase text-center">{{ $t('contact.title') }}</h1>
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
                  :label="$t('contact.name')"
                  required
                  outlined
                  append-icon="mdi-card-account-details "
              />

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$t('contact.email')"
                  required
                  outlined
                  append-icon="mdi-email-outline "
              />
              <v-textarea outlined
                          :label="$t('contact.message')"
                          append-icon="mdi-comment"/>
              <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mr-4"
                  block
                  large
                  @click="validate"
              >
                {{ $t('home.send') }}
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
    faq: [
      {
        q: "Quand est-ce que la géolocalisation est saisie?",
        r: "La géolocalisation est saisie lorsqu’un doigt est placé dans le cercle, et maintenu assez longtemps pour déverrouiller la fenêtre de choix de services, ainsi l’emplacement est prélevé dans le but de faire un jumelage instantané avec une entreprise de service proche."
      },
      {
        q: "Qui sont ces entreprises de service dans TOWUGO?",
        r: "Ce sont des entreprises réputées fiables par la qualité de leurs services, dans chaque région ou elles opèrent. "
      },
      {
        q: "Quels sont les heures d’opérations de TOWUGO?",
        r: "L’application mobile est disponible 24h sur 24, toute l’année. Ainsi, elle peut être utilisée pour contacter une entreprise de service, à tous moment en cas de problème avec le véhicule."
      },
      {
        q: "Quels sont les services dont une entreprise de remorquage peut fournir?",
        r: "Généralement, un service de remorquage comprend le remorquage lui-même, le survoltage de la batterie, le changement de pneu après une crevaison, le déverrouillage des portières et la livraison d’essence."
      },
      {
        q: "Quels sont les services dont une entreprise de réparation (garagiste mobile)  peut fournir?",
        r: "De façon générale, le support de réparation mécanique offert à l’emplacement de votre véhicule, inclut les réparations ne nécessitant pas le levage complet du véhicule tel que le survoltage de la batterie, changement des pneus, huile, alternateur, freins, disques, déverrouillage des portières, etc."
      },
      {
        q: "Y a-t-il un coût pour l’utilisation de l’application mobile?",
        r: "L’application est gratuite.  A leurs discrétions, Les client(e)s peuvent laisser des pourboires s’ils ont été satisfait(e)s de services reçus."
      },
      {
        q: "Qu’arrive-il si l’entreprise de service ne répond pas? ",
        r: "Normalement, cela ne devrait pas se produire. Exceptionnellement, si tel est bien le cas, utilisez la bascule (swipe), pour ainsi pouvoir appeler la prochaine entreprise de support proche de votre emplacement."
      },
      {
        q: "Le service de réparation à domicile/sur la route inclus-il les motocyclettes?",
        r: "Non. Pour l’instant, les réparations de motocyclettes ne sont pas supportées par TOWUGO, cependant les services de remorquages peuvent être utilisés en cas d’accident ou panne.    "
      },
      {
        q: "Couvrez-vous toutes les régions?",
        r: "Pour le moment, nous ne couvrons pas toutes les régions, vous pouvez-vous nous suggérer des régions sous contactez-nous."
      },
      {
        q: "Dans combien de temps un remorquage ou le/la mécanicien(ne) peut arriver à mon véhicule?",
        r: "Un accident ou un bris d’un véhicule peut être très stressant et délicat. L’application mobile TOWUGO est conçue pour trouver une entreprise de service proche de l’emplacement du bris ou de la panne,  qui va ainsi arriver très rapidement et prendre la situation en charge."
      },
    ],
    valid: true,
    name: '',
    nameRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre nom' : 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre couriel' : 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail Invalide',
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
