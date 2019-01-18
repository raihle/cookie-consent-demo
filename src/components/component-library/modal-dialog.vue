<template>
    <div class="modal-dialog" @click.self="$emit('close')">
        <div class="modal-dialog__body">
            <slot name="heading">Default heading</slot>
            <slot name="content">Default content</slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.modal-dialog {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}

.modal-dialog__body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 2rem;
    background: white;
    border: 1px solid black;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.7);
}
</style>
