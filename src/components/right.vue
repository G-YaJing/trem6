<template>
  <div class="right">
    <!-- {{Date}} -->
    <ol v-for="(item,i) in options" :key="i">
      <h3>{{item.listtitle}}</h3>
      <li v-for="(items,j) in item.list" :key="j">
        <dl>
          <dt>
            <img :src="items.shopImg" alt>
          </dt>
          <dd>
            <!-- {{items.hot}} -->
            <h4>{{items.hot}}</h4>
            <div class="line">
              <p>{{items.num}}</p>
              <span>
                月售
                <a href="javascript:;">{{items.month}}</a>
                赞
                <em>{{items.bars}}</em>
              </span>
            </div>
            <div class="bottom">
              <a href="javascript:;">￥{{items.pic}}</a>
              <i :class="items.icons"></i>
            </div>
          </dd>
        </dl>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data () {
    return {
      Dates:[]
    }
  },
  created () {
    // this.Dates
    // console.log(this.options)
    this.$Bus.$on('current',val=>{
      // console.log(this.options[val])
       this.Dates = this.options[val]
    // console.log(this.Dates)
      // console.log(this.Date)
      // this.options = this.options[val]
    })
  },
  mounted () {

  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
.right {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ol {
    width: 100%;
  }
  h3 {
    width: 100%;
    height: 50px;
  }
  dl {
    width: 100%;
    height: 100px;
    display: flex;
    dt {
      width: 100px;
      height: 100%;
      padding: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    dd {
      flex: 1;
      padding:0 10px;
    }
    em {
      font-style: normal;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      i {
        font-size: 30px;
      }
    }
  }
}
</style>
