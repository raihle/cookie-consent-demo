<template>
    <ol class="level-selector">
        <li class="level-selector__level">
            <LevelSelectorLevel
                v-for="level in levels"
                :key="level.value"
                class="level-selector__level"
                :group="name"
                :level="level"
                :value="value"
                @input="$emit('input', $event)"
            />
        </li>
    </ol>
</template>

<script>
import LevelSelectorLevel from "./level-selector-level.vue";

export default {
  components: {
    LevelSelectorLevel
  },
  props: {
    value: {
      required: true
    },
    levels: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.level-selector {
  margin: 0;
  padding: 0;
  list-style: none;
}

.level-selector__level {
  margin: 1rem 0;
}
</style>
