<template>
  <nav>
    <span>
      <b>点菜</b>
      <b>评价</b>
      <b>商家</b>
    </span>
    <u>
      <a href="javascript:;">好友拼单</a>
    </u>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  span {
    flex: 1;
    display: flex;
    b {
      flex: 1;
      font-style: normal;
      display: flex;
      justify-content: center;
    }
  }
  u {
    width: 160px;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    a {
      text-decoration: none;
      color: #000;
      width: 80px;
      height: 30px;
      border:1px solid #ff0;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
