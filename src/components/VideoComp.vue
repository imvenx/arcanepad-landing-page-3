<template>
  <div id="video">
    <video autoplay loop muted disablePictureInPicture>
      <source src="src/assets/videos/ArcanepadLandingPageVideo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#video {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

#video video {
  min-width: 100vw;
  min-height: 100vh;
  max-height: 105vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

@media (max-width: 600px) and (orientation: portrait) {

  #video {
    position: relative;
    width: 100vw;
    height: 33.33vh;
    overflow: hidden;
  }

  #video video {
    width: 110vw;
    min-height: 33.33vh;
    z-index: -1;
    /* border: 5px solid red; */
  }

}

@media (max-height: 600px) and (orientation: landscape) {

  #video video {
    height: 100%;
    position: relative;
    z-index: -1;
  }

}
</style>
