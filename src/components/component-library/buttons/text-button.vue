<template>
    <button class="text-button" v-on="$listeners">
        <slot>Default button text</slot>
    </button>
</template>

<script>
export default {};
</script>

<style>
.text-button {
  color: #990ae3;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1em;
}

.text-button:hover {
  color: #cc00ff;
}
</style>
