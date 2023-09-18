<template>
  <div id="menuContainer">
    <div class="text-h3">Arcanepad</div>
    <div style="width: 200px; height: 200px; border:5px solid red; margin: auto;">Logo</div>
    <div id="links">
      <a href="https://asd.com" target="_blank">Kickstarter</a>
      <a href="#">Discord</a>
      <a href="#">Twitter</a>
      <a href="#">Develop</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#menuContainer {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50%;
  top: 45%;
  width: 100vw;
  transform: translate(-50%, -50%);
  padding: 1em 5em;
  text-align: center;
}

#links {
  display: grid;
  gap: 1vw;
}

#links a {
  display: inline-block;
  position: relative;
  white-space: nowrap;
}


@media (max-width: 600px) and (orientation: portrait) {
  #menuContainer {
    top: 0;
    border: 5px solid red;
    text-align: center;
  }

  #links {
    position: absolute;
    left: 50%;
    top: calc(50vh + 70vw);
    transform: translate(-50%);
    display: grid;
    border: 5px solid red;
  }
}
</style>
