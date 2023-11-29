<template>
  <div id="logo" @click="toggleFullScreen()">
    <div id="logoTextCont">
      <div id="arcanepadText">Arcanepad</div>
      <small style="font-size: 3vh;">A new way of playing</small>
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
#arcanepadText {
  font-size: 8vh;
  text-decoration: underline;
  border: 1px solid rgba(128, 128, 128, 0.334);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.826);
  padding: 2vh;
}

#logo {
  display: flex;
  flex: 1;
  width: 25%;
  background-color: rgba(0, 0, 0, .6);
  /* border-right: 1px solid rgba(0, 0, 0, 0.328); */
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
  gap: .5em;
  display: grid;
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

  #arcanepadText {
    font-size: 7vh;
  }

  #logo {
    width: 100%;

    /* height: 35%; */
    background-color: rgba(0, 0, 0, .7);
  }

}

@media (min-width: 600px) and (min-height: 600px) {
  #logo:hover {
    /* background-color: rgba(0, 0, 0, 0.7); */
  }
}
</style>
