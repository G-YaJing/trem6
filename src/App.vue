<template>
  <div id="app">
    <!--  输出 -->
    <headercom></headercom>
    <sectioncom></sectioncom>
        <listercom></listercom>
  </div>
</template>

<script>
import headercom from "./components/headerCom";
import sectioncom from "./components/sectionCom";
import listercom from "./components/listercom";
export default {
  name: "App",
  components: { headercom, sectioncom,listercom }
};
</script>

<style>
</style>
