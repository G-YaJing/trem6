<template>
  <footer>
    <div class="line">
      <div class="foot">
        <span>
          <i class="iconfont icon-xingxing" @click="remove"></i>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      flag:true
    };
  },
  created() {},
  methods: {
    remove() {
      this.flag = !this.flag
      this.$Bus.$emit('removes',this.flag)
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .line {
    width: 90%;
    height: 50px;
    background: rgba(252, 245, 229, 0.4);
    display: flex;
    align-items: flex-end;
    .foot {
      width: 100%;
      height: 40px;
      background: rgba(10, 10, 9, 0.4);
      border-radius: 50px;
      span {
        flex: 1;
        display: flex;
        i {
          width: 40px;
          height: 40px;
          font-size: 50px;
          color: #ffe935;
          position: relative;
          bottom: 10px;
          left: 10px;
        }
      }
    }
  }
}
</style>
