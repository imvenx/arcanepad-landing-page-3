<template>
  <div id="logo" @click="toggleFullScreen()">
      <small>Decyphering Ancient Technology</small>
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
#logo small {
    font-weight: 300;
    color: rgba(0, 255, 255, 0.622);
    background: linear-gradient(125deg, cyan, fuchsia, purple);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size:0.9rem;
    display:inline-block;
    margin:20px;
    line-height:1.2;
    text-align:center;
    width:220px;
}
#logo {
  background-size:170px;
  background-position:40px 70px;
  background-repeat:no-repeat;
  background-image: url("src/assets/images/arcanepadLogo.svg");
  z-index:999;
  position:absolute;
  top:0;
  min-height:200px;
  min-width:200px;
}

#logo:hover {
  cursor: pointer;
}

@media (max-width: 400px) and (orientation: portrait) {
#logo {
    top:auto;
    background-size:110px;
    background-position:2vw 30px;
    width:110px;
    bottom:0;
    min-height:130px;
    text-align:center;
  }
  #logo small {
    width:80vw;
    text-align:left;
    padding:0;
    left:0;
    font-size:0.8rem;
    margin-top:5px;
    display:inline-block;
  }
}
</style>
