<template>
  <div id="cont">
    <LogoComp />
    <VideoComp />
    <MenuComp />

    <div id="shadow"></div>
  </div>
</template>

<script lang="ts" setup>
import LogoComp from 'components/LogoComp.vue'
import MenuComp from 'components/MenuComp.vue'
import VideoComp from 'components/VideoComp.vue'
</script>

<style scoped>
#cont {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#shadow {
  box-shadow: 5px 0px 20px 10px rgb(0, 0, 0);
  width: 25vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
}

/* #video,
#logo,
#menu {
  border: 5px solid grey;
} */


@media (max-width: 600px) and (orientation: portrait) {

  #cont {
    height: 90vh;
  }

  #shadow {
    display: none;
  }

}

@media (max-height: 600px) and (orientation: landscape) {

  #cont {
    height: 80vh;
  }

  #shadow {
    display: none;
  }

  /* #logo {
    display: inline-block;
    width: 50vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
  }

  #menu {
    display: inline-block;
    width: 50vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
  }

  */

}
</style>
