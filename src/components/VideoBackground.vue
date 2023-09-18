<template>
  <div class="video-background-wrapper">
    <video autoplay loop muted disablePictureInPicture class="video-background">
      <source src="src/assets/videos/arcanepad-secret-promo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* .video-background-wrapper {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
} */

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  background: no-repeat center center fixed;
  background-size: cover;
}

@media (max-width: 600px) and (orientation: portrait) {

  .video-background-wrapper {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 80vw;
    top: 50vh;
    transform: translate(0, -50%);
  }

  .video-background {
    height: 1px;
    max-width: 100vw;
    max-height: 100vh;
  }
}

@media (orientation: landscape) {


  .video-background {
    max-height: 100vh;
  }
}
</style>
