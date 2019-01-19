<template>
    <button class="primary-button" v-on="$listeners">
        <slot>Default button text</slot>
    </button>
</template>

<script>
export default {};
</script>

<style>
.primary-button {
  background: #990ae3;
  appearance: none;
  text-transform: uppercase;
  border-radius: 1em;
  padding: 0.5em 1em;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1em;
}

.primary-button:hover {
  background: #cc00ff;
}

.primary-button:active {
  background: #9b009b;
}
</style>
