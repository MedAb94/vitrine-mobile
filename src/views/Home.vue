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
            <v-img v-if="$i18n.locale==='fr'" src="../assets/screens/1fr.png" class="mx-auto" style="max-width: 250px"/>
            <v-img v-if="$i18n.locale==='en'" src="../assets/screens/1en.png" class="mx-auto" style="max-width: 250px"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light py-8" id="about">
      <v-container class="text-center text-md-left">
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
        <v-img src="../assets/screens/video.png" width="800px" class="mx-auto video"/>
      </v-container>
    </section>
    <section class="dark py-8" id="download">
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

              <img src="../assets/App store.png" class="mx-2" width="120" height="40">
              <img src="../assets/playStore.png" class="mx-2" width="120" height="40">

            </v-container>

          </v-col>
          <v-col cols="12" md="5" class="text-center">
            <v-img v-if="$i18n.locale==='en'" src="../assets/screens/3en.png" class="mx-auto" max-width="200px"/>
            <v-img v-if="$i18n.locale==='fr'" src="../assets/screens/3fr.png" class="mx-auto" max-width="200px"/>
          </v-col>
        </v-row>
      </v-container>

    </section>
    <section class="light py-8" id="faq">
      <v-container>
        <h1 class="font-weight-bold" v-if="$i18n.locale==='fr'">Les questions les plus fréquemment posées</h1>
        <h1 class="font-weight-bold" v-if="$i18n.locale==='en'">Frequently Asked Questions</h1>
        <v-expansion-panels>
          <v-expansion-panel class="my-2 transparent rounded py-1" v-if="$i18n.locale==='fr'">
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
          <v-expansion-panel class="my-2 transparent rounded py-1" v-if="$i18n.locale==='en'">
            <v-expansion-panel-header color="font-weight-bold">
              Which services does the TOWUGO mobile app provides?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              TOWUGO offers these two services: <br>
              <ul>
                <li>The towing.</li>
                <li>Mechanical repair of vehicles, at home or on the road.</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel class="my-2 transparent rounded py-1" v-for="item in faq">
            <v-expansion-panel-header color="font-weight-bold">
              {{ $i18n.locale === 'fr' ? item.q : item.qen }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ $i18n.locale === 'fr' ? item.r : item.ren }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </section>
    <section class="secondary py-8" id="contact">
      <v-container>
        <h1 class="font-weight-bold text-uppercase text-center">{{ $t('contact.title') }}</h1>
        <v-row>
          <v-col md="9" class="mx-auto">
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
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
    >
      <v-icon>mdi-chevron-up </v-icon>
    </v-btn>
  </div>

</template>
<script>
import MailBox from "../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({
    fab: false,
    faq: [
      {
        q: "Quand est-ce que la géolocalisation est saisie?",
        qen: "When is the geolocalization taken?",
        r: "La géolocalisation est saisie lorsqu’un doigt est placé dans le cercle, et maintenu assez longtemps pour déverrouiller la fenêtre de choix de services, ainsi l’emplacement est prélevé dans le but de faire un jumelage instantané avec une entreprise de service proche.",
        ren: "The geolocalization is taken when a finger is placed in the circle, and held long enough to unlock the choice of services window, then the location is picked for the purpose of making an instant match with a nearby service company."
      },
      {
        q: "Qui sont ces entreprises de service dans TOWUGO?",
        qen: "Who are those service companies in TOWUGO?",
        ren: "These are companies reputed to be reliable by the quality of their services, in the region where they operate.",
        r: "Ce sont des entreprises réputées fiables par la qualité de leurs services, dans chaque région ou elles opèrent. "
      },
      {
        q: "Quels sont les heures d’opérations de TOWUGO?",
        qen: "What are TOWUGO's app hours of operation?",
        ren: "The mobile app is available 24 hours, all year round. Thus, it can be used to contact a service company at any time in the event of a problem with the vehicle.",
        r: "L’application mobile est disponible 24h sur 24, toute l’année. Ainsi, elle peut être utilisée pour contacter une entreprise de service, à tous moment en cas de problème avec le véhicule."
      },
      {
        q: "Quels sont les services dont une entreprise de remorquage peut fournir?",
        qen: "What services can a towing company provide?",
        ren: "Typically a towing company can provide the towing itself, battery boosting, tire change after a puncture, unlocking doors, and delivering of gasoline.",
        r: "Généralement, un service de remorquage comprend le remorquage lui-même, le survoltage de la batterie, le changement de pneu après une crevaison, le déverrouillage des portières et la livraison d’essence."
      },
      {
        q: "Quels sont les services dont une entreprise de réparation (garagiste mobile)  peut fournir?",
        qen: "Which services can a repair company (mobile mechanic) provide?",
        ren: "In general, the mechanical repair support offered at the location of the vehicle includes repairs that do not require the complete lifting of the vehicle, such as boosting the battery, changing tires, oil, alternator, brakes, discs, unlocking doors, etc.",
        r: "De façon générale, le support de réparation mécanique offert à l’emplacement de votre véhicule, inclut les réparations ne nécessitant pas le levage complet du véhicule tel que le survoltage de la batterie, changement des pneus, huile, alternateur, freins, disques, déverrouillage des portières, etc."
      },
      {
        q: "Y a-t-il un coût pour l’utilisation de l’application mobile?",
        qen: "Is there a cost for using TOWUGO mobile app?",
        ren: "The app is free. At their discretion, Customers can leave tips if they are satisfied with the services received.",
        r: "L’application est gratuite.  A leurs discrétions, Les client(e)s peuvent laisser des pourboires s’ils ont été satisfait(e)s de services reçus."
      },
      {
        q: "Qu’arrive-il si l’entreprise de service ne répond pas? ",
        qen: "What happens if the service company does not respond?",
        ren: "Normally, that should not happen. Exceptionally, if this is the case, use the swipe, so you can call the next support company near your location.",
        r: "Normalement, cela ne devrait pas se produire. Exceptionnellement, si tel est bien le cas, utilisez la bascule (swipe), pour ainsi pouvoir appeler la prochaine entreprise de support proche de votre emplacement."
      },
      {
        q: "Le service de réparation à domicile/sur la route inclus-il les motocyclettes?",
        qen: "Does home or on the road repair services include motorcycles?",
        ren: "No. For the moment, motorcycle repairs are not supported by TOWUGO, however towing services can be used in the event of accidents or breakdowns.",
        r: "Non. Pour l’instant, les réparations de motocyclettes ne sont pas supportées par TOWUGO, cependant les services de remorquages peuvent être utilisés en cas d’accident ou panne.    "
      },
      {
        q: "Couvrez-vous toutes les régions?",
        qen: "Do you cover all regions?",
        ren: "For the moment we are not covering all regions, but it will happen soon. You can suggest regions under the contact us form.",
        r: "Pour le moment, nous ne couvrons pas toutes les régions, vous pouvez-vous nous suggérer des régions sous contactez-nous."
      },
      {
        q: "Dans combien de temps un remorquage ou le/la mécanicien(ne) peut arriver à mon véhicule?",
        qen: "How long it can take before the support company arrive at my vehicle?",
        ren: "An accident or a breakdown of a vehicle can be very stressful and delicate. The TOWUGO mobile app is designed to find a service company near the location of the breakage or failure of the vehicle, which will arrive very quickly and take the situation in charge.",
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
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }

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
