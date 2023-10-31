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
    font-size:1.3rem;
    margin:20px; 
    display:inline-block;
    line-height:1.1;
}
#logo {
  background-image:url("src/assets/images/arcanepadLogo.svg");
  background-size:200px;
  background-position:center 60px;
  background-repeat:no-repeat;
  background-color:#000;
  min-height:200px !important;
  display:block !important;
  color:#ccc;
}

#logo:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
    #logo small {
        font-size:1rem;
    }
}
</style>
