<template>
  <div id="menu">
    <a href="https://imvenx.github.io/arcanedocs/guide/get-started.html" target="_blank"> Download<q-icon
        name="launch" /></a>
    <a href="https://imvenx.github.io/arcanedocs/" target="_blank">Develop <q-icon name="launch" /></a>
    <a href="https://discord.com/invite/6Pr9JBCGXy" target="_blank">Discord <q-icon name="launch" />
    </a>
    <a href="https://twitter.com/arcanepad" target="_blank">Twitter <q-icon name="launch" /></a>
    <a href="https://www.youtube.com/channel/UCSmE-GM8iXoJRjraQYYycww" target="_blank">Videos <q-icon name="launch" /></a>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
#menu {
  flex: 1.5;
  width: 25%;
  background-color: rgba(0, 0, 0, .5);
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-evenly;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  z-index: 2;
}

#menu>a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.distribute {
  border: 3px outset darkcyan;
}

@media (max-width: 600px) and (orientation: portrait) {

  #menu {
    width: 100%;
    /* width: 100vw;
    height: 65vh; */
    background-color: rgba(0, 0, 0, .5);
  }
}
</style>
