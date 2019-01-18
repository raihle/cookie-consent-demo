<template>
  <div class="cookie-consent">
    <CookieConsentBanner class="cookie-consent__banner" @open-dialog="openDialog"  />
    <CookieConsentDialog
      class="cookie-consent__dialog"
      :name="name" @close-dialog="closeDialog"
      :visible="dialogVisible"
      :initialLevel="initialLevel"
      @level-selected="$listeners['level-selected']"
    />
  </div>
</template>

<script>
import CookieConsentBanner from './cookie-consent-banner.vue';
import CookieConsentDialog from './cookie-consent-dialog.vue';

export default {
  name: "app",
  components: {
    CookieConsentBanner,
    CookieConsentDialog
  },
  props: {
    name: {
      type: String,
      default: 'cookie-consent'
    },
    initialLevel: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
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
