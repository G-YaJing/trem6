<template>
  <div id="app">
    <Headers/>
    <Navs/>
    <Content :Menu="Dates" :option="List"/>
    <Footer/>
    <Mork/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      List: [],
      flag: false,
      Dates: []
    };
  },
  created() {
    axios.get("/api/menu").then(({ data }) => {
      this.Dates = data.message.menu;
    });
    axios.get("/api/list").then(({ data }) => {
      this.List = data.message.data;
    });
  },
  mounted() {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
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
  overflow: hidden;
}
</style>
