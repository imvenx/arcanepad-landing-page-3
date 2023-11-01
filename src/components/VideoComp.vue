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
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image:  repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7);
    background-position: 0 0, 3px 3px;
    background-size: 6px 6px;
    
}

#video video {
    min-width: 100vw;
    min-height: 100vh;
    font-size:0;
    line-height:0;
    transform-oringin: center center;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image:  repeating-linear-gradient(45deg, #444cf7 25%, transparent 25%, transparent 75%, #444cf7 75%, #444cf7), repeating-linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%, #e5e5f7 75%, #444cf7 75%, #444cf7);
    background-position: 0 0, 3px 3px;
    background-size: 6px 6px;
}

#playEl {
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  transition: 1s all;
  z-index: 1;
}

#loadingCircle {
  width: 3vw;
  height: 3vw;
  border: .5vw solid darkcyan;
  border-right: .5vw solid cyan;
  border-radius: 200px;
  animation: 1s rotate linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@media (max-width: 400px) and (orientation: portrait) {
#video video {
    min-width: 100vw;
    min-height: 100vh;
    margin-left:-70%;
}
}
</style>
