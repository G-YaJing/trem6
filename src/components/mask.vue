<template>
  <div class="mork" v-if="flags">
    <div class="mock">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flags:false
    }
  },
  created () {
    this.$Bus.$on('removes',val=>{
       this.flags = !val
    })
  },
  methods: {

  }
}
</script>

<style>
  .mork{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom:50px;
    background: rgba(0,0,0,0.4);
  }
</style>
