<template>
    <div class="modal-dialog" @click.self="$emit('close')">
        <div class="modal-dialog__body">
            <div class="modal-dialog__heading">
                <slot name="heading">Default heading</slot>
            </div>
            <div class="modal-dialog__content">
                <slot name="content">Default content</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

.modal-dialog__body {
  position: absolute;
  box-sizing: border-box;
  top: 10%;
  left: 10%;
  width: 80%;
  max-height: 80%;
  padding: 2rem;
  background: white;
  border: 1px solid black;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
}

.modal-dialog__content {
  overflow: auto;
}
</style>
