<template>
  <header>
    <i class="iconfont icon-left"></i>
    <span>
    <i class="iconfont icon-magnifier"></i>
    <input type="text" placeholder="请输入商户名称">
    </span>
    <i class="iconfont icon-gerenyonghutouxiang"></i>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  i{
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span{
    flex:1;
    display: flex;
    border-radius: 50px;
      height: 38px;
    background: #eee;
    input{
      border: none;
      background: #eee;
      outline: none;
    }
  }
}
</style>
