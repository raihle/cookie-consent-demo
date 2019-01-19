<template>
    <ModalDialog 
        class="cookie-consent-dialog"
        :style="{display}"
        @close="resetAndCloseDialog"
    >
        <Heading1 slot="heading">Cookies och liknande tekniker</Heading1>
        <template slot="content">
            Här kan du ändra vilka sorters cookies och liknande tekniker du
            tillåter att vi använder på webbplatsen.

            Har du frågor? Läs mer i <TextLink :href="href">vår cookie-policy</TextLink>

            <LevelSelector 
                :name="name" 
                :levels="levels" 
                v-model="selectedLevel"
            />

            <PrimaryButton @click="saveAndCloseDialog">OK</PrimaryButton>

            Sparas i 90 dagar.
        </template>
    </ModalDialog>
</template>

<script>
import Heading1 from "../component-library/typography/heading-1.vue";
import ModalDialog from "../component-library/modal-dialog.vue";
import PrimaryButton from "../component-library/buttons/primary-button.vue";
import TextLink from "../component-library/links/text-link.vue";
import LevelSelector from "./level-selector/level-selector.vue";

export default {
  components: {
    Heading1,
    ModalDialog,
    TextLink,
    PrimaryButton,
    LevelSelector
  },
  props: {
    initialLevel: {
      type: Number,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    levels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedLevel: this.initialLevel
    };
  },
  computed: {
    display() {
      return this.visible ? "block" : "none";
    }
  },
  methods: {
    saveAndCloseDialog() {
      this.$emit("level-selected", this.selectedLevel);
      this.$emit("close-dialog");
    },
    resetAndCloseDialog() {
      this.selectedLevel = this.initialLevel;
      this.$emit("close-dialog");
    }
  }
};
</script>

<style scoped>
</style>
