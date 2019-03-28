<template>
  <section>
    <div class="top">
      <span>
        <u>全部类目</u>
        <i class="iconfont icon-gengduo7"></i>
      </span>
      <span>
        <u>附近商家</u>
        <i class="iconfont icon-gengduo7"></i>
      </span>
      <span>
        <u @click="sorts">智能排序</u>
        <i class="iconfont icon-gengduo7"></i>
      </span>
      <span>
        <u>筛选</u>
        <i class="iconfont icon-gengduo7"></i>
      </span>
    </div>
    <Section v-for="(item,index) in date" :key="index" :date="item"/>
  </section>
</template>
<script>
import axios from "axios";
import Section from "./sections.vue";
export default {
  data() {
    return {
      merchants: [
        {
          names: "",
          icons: ""
        },
        {
          names: "",
          icons: "iconfont icon-gengduo7"
        },
        {
          names: "",
          icons: "iconfont icon-gengduo7"
        },
        {
          names: "",
          icons: "iconfont icon-gengduo7"
        }
      ],
      date: []
    };
  },
  components: {
    Section
  },
  created() {
    axios.get("/api/list").then(data => {
      this.date = data.data.success;
    });
  },
  methods: {
    sorts() {
      this.date.sort(function(a,b){
        return a.pic - b.pic
      })
    }
  }
};
</script>

<style scoped lang="scss">
section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .top {
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    flex-shrink: 0;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        padding-top: 4px;
        padding-left: 4px;
      }
      u {
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
      }
    }
  }
}
</style>
