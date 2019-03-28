<template>
  <div id="app">
    <Headercom>
        <i slot="left" class="iconfont icon-return"></i>
    </Headercom>
    <Listcom></Listcom>
    <Footercom></Footercom>
  </div>
</template>

<script>
import Headercom from './components/headercom';
import Footercom from "./components/footercom";
import Listcom from "./components/listcom";
export default {
  name: 'App',
  components: {
    Headercom,
    Footercom,
    Listcom
  }
}
</script>

<style>
*{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    #app{
      display: flex;
      flex-direction: column
    }
    Listcom{
      flex:1;
    }
</style>
