<template>
  <div id="video" @click="playVideo()">
    <div ref="loadingEl" id="loadingEl">
      <div id="loadingCircle">
      </div>
    </div>
    <div @click="playVideo()" ref="playEl" id="playEl">
      <div id="playButton"></div>
      <!-- <div id="playBtnCircleCont">
      </div> -->
    </div>
    <video ref="videoEl" autoplay loop muted disablePictureInPicture>
      <source
        src="https://github.com/imvenx/arcanepad-landing-page-3/raw/main/src/assets/videos/ArcanepadLandingPageVideo.mp4"
        type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const videoEl = ref<HTMLVideoElement>()
const playEl = ref<HTMLVideoElement>()
const loadingEl = ref<HTMLDivElement>()
let isVideoPlaying = false
onMounted(() => {
  videoEl.value?.addEventListener('play', () => isVideoPlaying = true);

  videoEl.value?.addEventListener('canplay', (e) => {
    loadingEl.value!.style.opacity = '0'
    setTimeout(() => { if (isVideoPlaying) return; playEl.value!.style.opacity = '1' }, 500);
  })
})

function playVideo() {
  videoEl.value?.play()
  playEl.value!.style.opacity = '0'
  setTimeout(() => playEl.value!.style.display = 'none', 1000);
}
</script>

<style scoped>
#video {
    min-width: 80vw;
    max-width: 80vw;
    margin:auto;
}

#video video {
    border-radius:0px;
    border-width:20px;
    border-color:#fff;
    border-style:solid;
    display:inline-block;
    border-style:dashed;
    min-width: 80vw;
    max-width: 80vw;
}

#playEl {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: 1s all;
}

#playButton {
  width: 0;
  height: 0;
  border-top: 5vw solid transparent;
  border-bottom: 5vw solid transparent;
  border-left: 9vw solid cyan;
  cursor: pointer;
}


#loadingEl {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1s all;
  z-index: 1;
}

#loadingCircle {
  width: 15vw;
  height: 15vw;
  border: .5vw solid darkcyan;
  border-right: .5vw solid cyan;
  border-radius: 200px;
  animation: 1s rotate linear infinite;
  box-shadow: 0 0 10px cyan;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
