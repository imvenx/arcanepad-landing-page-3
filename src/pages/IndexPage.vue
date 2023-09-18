<template>
  <div id="cont">
    <div id="logo">logo</div>
    <div id="video">
      <video autoplay loop muted disablePictureInPicture>
        <source src="src/assets/videos/arcanepad-secret-promo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div id="menu">
      <a href="#">Kickstarter</a>
      <a href="#">Discord</a>
      <a href="#">Twitter</a>
      <a href="#">Develop</a>
    </div>
  </div>
</template>

<style scoped>
#video,
#logo,
#menu {
  /* border: 5px solid grey; */
}

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

#logo {
  width: 25vw;
  height: 35vh;
  background-color: rgba(0, 0, 0, .5);
  background-image: url('src/assets/images/arcanepad-logo.png');
}

#menu {
  width: 25vw;
  height: 65vh;
  background-color: rgba(0, 0, 0, .5);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
}

#menu>a {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) and (orientation: portrait) {

  #video {
    position: initial;
    width: 100vw;
    height: 33.33vh;
  }

  #logo {
    width: 100vw;
    height: 35vh;
    background-color: rgba(0, 0, 0, .5);
  }

  #menu {
    width: 100vw;
    height: 65vh;
    background-color: rgba(0, 0, 0, .5);
  }

  #video video {
    width: 100%;
    position: relative;
    z-index: -1;
  }

}

@media (max-height: 600px) and (orientation: landscape) {

  #logo {
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

  #video video {
    height: 100%;
    position: relative;
    z-index: -1;
  }

}
</style>
