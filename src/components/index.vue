<template>
  <div>
    <div class="container">
      <div class="list-box">
        <div class="list-header">目錄</div>
        <div class="list-content b-bottom" v-for="item in cate" :key="item">
          {{ item }}
        </div>
      </div>
      <div class="carousel-box">
        <el-carousel :interval="4000" height="400px">
          <el-carousel-item v-for="(item, index) in 6" :key="item">
            <img
              style="width: 100%"
              :src="`https://picsum.photos/600/500?random=${index}`"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <header class="shop-header">商品列表</header>
    <keep-alive>
      <ShopList />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShopList from "./static/ShopList";
export default {
  name: "index",
  components: {
    ShopList,
  },
  computed: {
    ...mapState(["cate"]),
  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-gap: 10px;
  padding: 1rem 0;
}
.list-box {
  border: 0.5px solid #aaa;
}
.list-header {
  background: #b81d22;
  color: #fff;
  padding: 0.75rem 0.5rem;
}
.list-content {
  padding: 0.75rem 1rem;
}
.shop-header{
  padding:1rem .75rem;
  width: 100%;
  font-weight: 400;
  font-size: 2rem;  
  border-radius: .75rem;
  border:1px solid #aaa
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>