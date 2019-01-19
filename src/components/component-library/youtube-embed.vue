<template>
    <iframe 
        class=""
        width="560"
        height="315"
        :src="videoSrc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >
    </iframe>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  computed: {
    videoSrc() {
      return "https://www.youtube-nocookie.com/embed/" + this.videoId;
    }
  }
};
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
