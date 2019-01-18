<template>
  <div id="app">
    <CookieConsent
      class="app__cookie-consent"
      name="cookie-consent-name"
      @level-selected="levelSelected"
      :initialLevel="consentLevel"
    />
    <ConsentGuard
      :requiredConsentLevel="3"
      :consentLevel="consentLevel"
    >
      <YoutubeEmbed
        class="app_youtube-embed"
        videoId="Wy9q22isx3U"
        :consentLevel="this.consentLevel"
      />
      <div slot="fallback">
        Give your consent :)
      </div>
    </ConsentGuard>
  </div>
</template>

<script>
import CookieConsent from './components/cookie-consent.vue';
import YoutubeEmbed from './components/component-library/youtube-embed.vue';
import ConsentGuard from './components/consent-guard.vue';

export default {
  name: "app",
  components: {
    CookieConsent,
    YoutubeEmbed,
    ConsentGuard
  },
  data() {
    return {
      consentLevel: 2
    }
  },
  methods: {
    levelSelected(level) {
      this.consentLevel = level;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
