<template>
    <div class="cookie-consent">
        <CookieConsentBanner
            class="cookie-consent__banner"
            text="Våra webbplatser använder cookies och andra liknande tekniker för att förbättra din uppleve, för statistik och analys, samt för marknadsföring. En del är tredjepartscookies. Förtsätter du surfa på vår webbplats godkänner du att cookies används. Du väljer själv om du vill godkänna eller inte, och du kan välja vilka cookies som får användas genom att ${changeDialog|ändra dina inställningar}. Innan du gör ditt val rekommenderar vi att du ${policy|läser mer} om vilka cookies vi använder och hur du kan stänga av dem."
            okText="OK"
            changeText="Ändra nivå"
            href="/policy"
            v-on="$listeners"
            @open-dialog="openDialog"
            @dismissed="$emit('dismissed')" />
        <CookieConsentDialog
            class="cookie-consent__dialog"
            :name="name" @close-dialog="closeDialog"
            href="/policy"
            :visible="dialogVisible"
            :initialLevel="initialLevel"
            :levels="levels"
            @level-selected="$listeners['level-selected']"
        />
    </div>
</template>

<script>
import CookieConsentBanner from "./cookie-consent-banner.vue";
import CookieConsentDialog from "./cookie-consent-dialog.vue";

export default {
  name: "app",
  components: {
    CookieConsentBanner,
    CookieConsentDialog
  },
  props: {
    name: {
      type: String,
      default: "cookie-consent"
    },
    initialLevel: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    levels() {
      return [
        {
          value: 1,
          title: "1 Nödvändiga",
          description:
            "Siten fungerar som den ska, och vi får lagra " +
            "cookies som kommer ihåg om du är inloggad eller ej."
        },
        {
          value: 2,
          title: "2 Funktionella",
          description:
            "Vi kommer ihåg dina inställningar (som språkval, " +
            "adresser osv.) och samlar in anonymiserad " +
            "statistik för att förbättra siten."
        },
        {
          value: 3,
          title: "3 Tredjepart",
          description:
            "Vi får dela viss data med våra partners som gör " +
            "det möjligt att erbjuda verktyg på webbplatsen, " +
            "som chatt och säker inloggning"
        },
        {
          value: 4,
          title: "4 Marknadsföring",
          description:
            "Vi får lagra information om ditt användande som " +
            "delas med (men aldrig säljs till andra parter), " +
            "för att ge dig bättre erbjudanden och en " +
            "trevligare upplevelse på webbsidan."
        }
      ];
    }
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    }
  }
};
</script>
