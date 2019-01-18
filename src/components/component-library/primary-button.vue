<template>
    <button class="primary-button" v-on="$listeners">
        <slot>Default button text</slot>
    </button>
</template>

<script>
export default {
    
}
</script>