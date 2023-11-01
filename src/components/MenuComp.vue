<template>
  <div id="menu">
    <a href="https://discord.com/invite/6Pr9JBCGXy" target="_blank">Discord</a>
    <a href="https://www.youtube.com/channel/UCSmE-GM8iXoJRjraQYYycww" target="_blank">Videos</a>
    <a href="https://twitter.com/arcanepad" target="_blank">Twitter</a>
    <a href="#" disabled title="soon!">Kickstarter</a>
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
  position:absolute;
  top:0;
  bottom:0;
  text-align:center;
  width:250px;
  padding-top:200px;
  margin-top:0px;
  background:linear-gradient(125deg, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.1));
}
a {
  color:#fff;
  font-size:0.9rem;
  line-height:1.6;
  padding:0;
  display:block;
  font-weight:normal;
  text-decoration:none;
  display:block;
}
a:hover {
  font-weight:bold;
  background-color:#000;
  
}
@media (max-width: 400px) {
  a {
    font-size:0.8rem;
    line-height:1.3;
    padding:3px;
    word-break: break-all;
  }
  #menu {
    position:fixed;
    left:0;
    top:auto;
    right:0;
    bottom:0;
    text-align:center;
    max-width:100vw;
    width:100vw;
    height:auto;
    columns: 2;
    margin-top:0px;
    padding:30px 10px 10px 120px;
  }
}
</style>
