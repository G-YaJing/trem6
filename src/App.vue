<template>
  <div id="app">
    <Header />
    <Section />
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {

};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
