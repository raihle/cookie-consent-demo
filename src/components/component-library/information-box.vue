<template>
    <div class="information-box">
        <slot>Default information content</slot>
    </div>
</template>

<script>
export default {};
</script>

<style>
.information-box {
  border: 1px solid #00cdff;
  border-left: 0.5em solid #00cdff;
  padding: 1em;
}
</style>
