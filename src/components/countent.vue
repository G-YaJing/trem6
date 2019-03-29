<template>
  <section>
      <Count :Menus="Menu" />
      <Right :options="option"/>
  </section>
</template>

<script>
import Count from './count.vue'
import Right from './right.vue'
export default {
  props:['Menu','option'],
  data () {
    return {

    }
  },
  components:{
    Count,
    Right
  },
  created () {
    console.log(this.Menu)
  }
}
</script>

<style scoped lang="scss">
  section{
    width: 100%;
    height: 100%;
    flex:1;
    display: flex;
  }
</style>
