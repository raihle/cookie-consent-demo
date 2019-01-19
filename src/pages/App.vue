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
    <div class="app__content">
      <Heading1>Telia</Heading1>
      <ConsentGuard :requiredConsentLevel="3" :consentLevel="consentLevel">
        <YoutubeEmbed
          class="app_youtube-embed"
          videoId="Wy9q22isx3U"
          :consentLevel="consentLevel"
        />
        <div slot="fallback">
          Give your consent :)
        </div>
      </ConsentGuard>
    </div>
  </div>
</template>

<script>
import CookieConsent from "../components/cookie-consent/cookie-consent.vue";
import YoutubeEmbed from "../components/component-library/youtube-embed.vue";
import ConsentGuard from "../components/cookie-consent/consent-guard.vue";
import Heading1 from "../components/component-library/typography/heading-1.vue";

export default {
  name: "app",
  components: {
    CookieConsent,
    YoutubeEmbed,
    ConsentGuard,
    Heading1
  },
  data() {
    return {
      consentLevel: 2,
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
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app__content {
  padding: 1rem;
}
</style>
