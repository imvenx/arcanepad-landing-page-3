<template>
  <div id="logo" @click="toggleFullScreen()">
    <div id="logoTextCont">
      <div style="text-decoration: none; font-size: calc(1vw + 7vh); ">Arcanepad</div>
      <!-- <small style="font-size: 2.5vw;">Decyphering Ancient Technology</small> -->
    </div>
  </div>
</template>

<script lang="ts" setup>

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

</script>

<style scoped>
#logo {
  display: flex;
  flex: 1;
  width: 25%;
  background-color: rgba(0, 0, 0, .8);
  z-index: 2;
  /* background-image: url('src/assets/images/arcanepad-logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%; */
}

#logo:hover {
  cursor: pointer;
}

#logoTextCont {
  margin: auto;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 1000;
  color: rgba(0, 255, 255, 0.622);
  background: linear-gradient(125deg, rgba(1, 206, 206), fuchsia);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


@media (max-width: 600px) and (orientation: portrait) {

  #logo {
    width: 100%;
    /* height: 35%; */
    background-color: rgba(0, 0, 0, .5);
  }

}

@media (min-width: 600px) and (min-height: 600px) {
  #logo:hover {
    /* background-color: rgba(0, 255, 255, 0.114); */
    /* background-color: rgba(0, 100, 100, 0.228); */
  }
}
</style>
