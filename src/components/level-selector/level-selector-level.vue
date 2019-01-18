<template>
    <label class="level-selector-level" >
        <input
            class="level-selector-level__input"
            type="radio"
            :id="id"
            :name="group"
            :value="level.value"
            :checked="level.value === value"
            @input="$emit('input', level.value)"
        />
        <div class="level-selector-level__text">
            <span class="level-selector-level__title">{{level.title}}</span>
            <span class="level-selector-level__description">{{level.description}}</span>
        </div>
    </label>
</template>

<script>
export default {
    props: {
        group: {
            type: String,
            required: true
        },
        level: {
            type: Object,
            required: true
        },
        value: {
            required: true
        }
    },
    computed: {
        id() {
            return this.group + '-' + this.level.value + '-' + this.level.title;
        }
    }
}
</script>

<style scoped>
    .level-selector-level {
        background: #e0e0e0;
        padding: 1rem;
        display: block;
        display: flex;
        align-items: flex-start;
        cursor: pointer;
    }

    .level-selector-level__title {
        font-weight: bold;
        font-size: 1.2;
        text-transform: uppercase;
        display: block;
    }
</style>

