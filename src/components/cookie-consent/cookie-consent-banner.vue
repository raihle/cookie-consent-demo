<template>
    <div class="cookie-consent-banner">
        <InformationBox class="cookie-consent-banner__information">
            <MagicText :text="text">
                <TextButton slot="changeDialog" slot-scope="{text}" @click="openDialog">{{text}}</TextButton>
                <TextLink slot="policy" slot-scope="{text}" :href="href">{{text}}</TextLink>
            </MagicText>
        </InformationBox>
        <PrimaryButton class="cookie-consent-banner__ok" @click="$emit('dismissed')">{{okText}}</PrimaryButton>
        <LinkButton class="cookie-consent-banner__change" @click="openDialog">{{changeText}}</LinkButton>
    </div>
</template>

<script>
import InformationBox from "../component-library/information-box.vue";
import LinkButton from "../component-library/buttons/link-button.vue";
import TextButton from "../component-library/buttons/text-button.vue";
import PrimaryButton from "../component-library/buttons/primary-button.vue";
import TextLink from "../component-library/links/text-link.vue";
import MagicText from "../component-library/magic-text.vue";

export default {
  components: {
    InformationBox,
    TextButton,
    LinkButton,
    PrimaryButton,
    TextLink,
    MagicText
  },
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    okText: {
      type: String,
      required: true
    },
    changeText: {
      type: String,
      required: true
    }
  },
  computed: {},
  methods: {
    openDialog() {
      this.$emit("open-dialog");
    }
  }
};
</script>

<style scoped>
.cookie-consent-banner {
  padding: 1em;
  border-bottom: 1px solid black;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.7);
}

.cookie-consent-banner__information {
  margin-bottom: 1rem;
}
</style>
