<template>
    <div class="list">
      <dl>
        <input type="checkbox" v-model="options.check">
      </dl><div class=""></div>
      <dl>
        <!-- <img src="../images/pic.jpg" alt=""> -->
        <p>
          <button>+</button>
          <input type="text" v-model="options.count">
          <button>-</button>
        </p>
      </dl>
      <dl>
        <p class="title">{{options.title}}</p>
        <p>
          <span v-for="(item,index) in options.xqfood" :key="index"></span>
        </p>
        <span>单价：￥{{options.price}}</span>
      </dl>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:["options"]
};
</script>

<style scoped>
.shop_list {
  flex: 1;
}
.dx {
  width: 100%;
  height: 50px;
  border: 2px solid red;
}
.dx p {
  margin-left: 20px;
  line-height: 50px;
}
.list {
  height: 200px;
  width: 100%;
  border: 2px solid red;
  display: flex;
  align-items: center;
}
.list dl {
  margin-left: 15px;
  justify-content: space-around;
}
.list dl input {
  width: 100px;
}
.list dl img {
  width: 100px;
  height: 125px;
}
</style>
