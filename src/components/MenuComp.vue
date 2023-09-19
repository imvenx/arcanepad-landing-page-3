<template>
  <div id="menu">
    <!-- <a href="#">Kickstarter</a> -->
    <a href="https://discord.com/invite/6Pr9JBCGXy" target="_blank">Discord</a>
    <a href="https://www.youtube.com/channel/UCSmE-GM8iXoJRjraQYYycww" target="_blank">Videos</a>
    <a href="https://twitter.com/arcanepad" target="_blank">Twitter</a>
    <a href="#" target="_blank" disabled title="soon!">Kickstarter</a>
    <a href="#" disabled title="soon!">Develop</a>
    <a href="#" disabled title="soon!">Download</a>
    <a href="mailto:arcanepad@gmail.com" target="_blank">
      arcanepad@gmail.com
    </a>
    <!-- <a href="#">Twitter</a> -->
    <!-- <a href="#">Develop</a> -->
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#menu {
  flex: 1.5;
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

  #menu {
    width: 100vw;
    height: 65vh;
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
