<template>
  <div class="sections">
    <!-- {{date}} -->
    <dl>
      <dt>
        <img :src="require('../../src/assets/images/'+date.imgs)" alt>
      </dt>
      <dd>
        <h2>{{date.titles}}</h2>
        <div class="line">
          ￥
          <b>{{date.pic}}</b>
          <u>{{date.address}}</u>
        </div>
      </dd>
    </dl>
    <li>
      <a href="javascript:;"></a>
      <p>
        <span>
          <i :class="date.icon"></i>
          <em>{{date.group}}</em>
        </span>
        <span>
          <i :class="date.icons"></i>
          <em>{{date.vouchers}}</em>
        </span>
      </p>
    </li>
  </div>
</template>

<script>
export default {
  props: ["date"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.sections {
  flex: 1;
  height: 100%;
  dl {
    width: 100%;
    height: 100px;
    display: flex;
    dt {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      flex: 1;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #eeee;
      h2 {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
  li {
    width: 100%;
    height: 60px;
    display: flex;
    a {
      width: 100px;
      height: 100px;
    }
    p {
      flex: 1;
      display: flex;
      flex-direction: column;
      span{
          display: flex;
        flex:1;
        i{
          width: 20px;
          height: 20px;
          background: #f82;
          color:#fff;
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
