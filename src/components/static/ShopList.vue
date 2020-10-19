<template>
  <div>
    <div
      class="loading"
      v-loading="loading"
      element-loading-text="商品讀取中"
      element-loading-spinner="el-icon-loading"
      v-show="loading"
    />
    <div class="box" v-show="!loading">
      <div class="card" v-for="item in shopRes" :key="item.shopImg">
        <div
          class="card-img"
          alt="missing"
          :style="`background-image:url(${item.shopImg})`"
        />
        <div class="card-title">{{ item.title.substring(0, 120) }}...</div>
        <div class="card-footer">
          <span>${{ item.price }}</span>
          <button class="card-btn">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ShopList",
  data() {
    return {
      shopRes: "",
      loading: true,
    };
  },
  mounted() {
    axios
      .get("https://silence-react-travel-api.herokuapp.com/vue/shop")
      .then((res) => {
        this.shopRes = res.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  display: grid;
  padding: 1rem 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2%;
  row-gap: 25px;
}
.card {
  border: 1px solid #aaa;
  border-radius: 1rem;
  padding: 0.5rem;
  min-height: 40vh;
  display: grid;
  grid-template-rows: 70% 20% 10%;
  grid-template-areas:
    "img"
    "title"
    "footer";
  &-img {
    width: 100%;
    border-radius: 0.5rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    grid-area: img;
  }
  &-title {
    font-weight: 900;
    grid-area: title;
  }
  &-footer {
    border-top: 0.5px solid #b81d22;
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  &-btn {
    padding: 0.5rem;
    background: #b81d22;
    border: transparent;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      border: none;
    }
    &:focus {
      border: none;
    }
  }
}
.loading {
  min-height: 20vh;
  margin: 2rem auto;
  border-radius: 1rem;
}
</style>