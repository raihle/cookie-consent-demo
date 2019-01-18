<!-- This should be a "functional" component, but Vue does not support the
"components" property on functional components -->
<template>
    <div class="level-selector">
        <LevelSelectorLevel
            v-for="level in levels"
            :key="level.value"
            class="level-selector__level"
            :group="name"
            :level="level"
            :value="value"
            @input="$emit('input', $event)"
        />
    </div>
</template>

<script>
import LevelSelectorLevel from './level-selector-level.vue';

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
}
</script>

<style scoped>
.level-selector__level {
    margin: 1rem 0;
}
</style>

