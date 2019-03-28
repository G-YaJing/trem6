<template>
  <header>
    <i class="iconfont icon-fanhui"></i>
    <span>
      <i class="iconfont icon-sousuo1"></i>
      <input type="text" placeholder="输入商家名、品类或商圈">
    </span>
    <i class="iconfont icon-denglu1"></i>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 50px;
  display: flex;
  background: #fafafa;
  align-items: center;
  span {
    flex: 1;
    height: 36px;
    width: 100%;
    background: #ebeced;
    border-radius: 50px;
    display: flex;
    align-items: center;
    input {
      border: none;
      outline: none;
      background: none;
    }
    i {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  i {
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
