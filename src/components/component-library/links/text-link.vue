<template>
    <a class="text-link" :href="href">
        <slot>Default link text</slot>
    </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.text-link {
  color: #990ae3;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1em;
}

.text-link:hover {
  color: #cc00ff;
}
</style>
