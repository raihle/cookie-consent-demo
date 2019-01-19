<template>
  <div id="app" class="app">
    <CookieConsent
      class="app__cookie-consent"
      name="cookie-consent-name"
      @level-selected="levelSelected"
      @dismissed="dismissCookieConsent"
      :initialLevel="consentLevel"
      v-show="displayConsentControl"
    />
    <ConsentGuard :requiredConsentLevel="1" :consentLevel="consentLevel" id="level-1">
      level 1 given
      <div slot="fallback">level 1 missing</div>
    </ConsentGuard>
    <ConsentGuard :requiredConsentLevel="2" :consentLevel="consentLevel" id="level-2">
      level 2 given
      <div slot="fallback">level 2 missing</div>
    </ConsentGuard>
    <ConsentGuard :requiredConsentLevel="3" :consentLevel="consentLevel" id="level-3">
      level 3 given
      <div slot="fallback">level 3 missing</div>
    </ConsentGuard>
    <ConsentGuard :requiredConsentLevel="4" :consentLevel="consentLevel" id="level-4">
      level 4 given
      <div slot="fallback">level 4 missing</div>
    </ConsentGuard>

  </div>
</template>

<script>
import CookieConsent from "../components/cookie-consent/cookie-consent.vue";
import ConsentGuard from "../components/cookie-consent/consent-guard.vue";

export default {
  name: "app",
  components: {
    CookieConsent,
    ConsentGuard
  },
  data() {
    return {
      consentLevel: 1,
      displayConsentControl: true
    };
  },
  methods: {
    levelSelected(level) {
      this.consentLevel = level;
    },
    dismissCookieConsent() {
      this.displayConsentControl = false;
    }
  }
};
</script>

<style>
</style>
