<template>
    <button class="link-button" v-on="$listeners">
        <slot>Default button text</slot>
    </button>
</template>

<script>
export default {};
</script>

<style>
.link-button {
  color: #990ae3;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0.25em 0.5em;
  cursor: pointer;
  font-size: 1em;
}

.link-button:hover {
  text-decoration: underline;
  color: #cc00ff;
}
</style>
