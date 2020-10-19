<template>
  <div>
    <nav>
      <div class="container b-bottom" style="padding: 0.5rem">
        <div class="text">
          <span><strong>Need help ?</strong></span>
          <span>call us 0912-3456789</span>
        </div>
        <div class="link-box">
          <div class="link" v-for="link in pageLink" :key="link">
            {{ link }}
          </div>
        </div>
      </div>
      <div class="container" style="padding: 0.5rem">
        <div class="logo-box">
          <img
            :src="logoImg"
            alt="logo_missing"
            style="width: 10%"
          />
          <span style="font-size: 25px">Grid-Vue-shop</span>
        </div>
        <div class="logo-text">
          Welcome to our Online Store! Cart:0 item(s) - $0.00 you have no items
          in your Shopping cart
        </div>
      </div>
    </nav>
    <nav class="router-box">
      <div>
        <router-link
          class="routerLink"
          v-for="route in pageRouter"
          :key="route.text"
          :to="route.path"
        >
          {{ route.text }}
        </router-link>
      </div>
      <form class="search-form">
        <input type="text" class="search" placeholder="搜尋.." />
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      pageLink: ["Register", "Login", "My Account"],
      pageRouter: [
        { path: "/", text: "首頁" },
        { path: "/About", text: "關於我們" },
        { path: "/New", text: "消息牆" },
      ],
      logoImg:require('../../assets/logo.png')
    };
  },
};
</script>

<style scoped lang="scss">
$routerNav-color: #333;
.container,
.router-box {
  display: grid;
  grid-template-columns: 50% 50%;
}
.router-box {
  background: $routerNav-color;
  border-radius: 0.5rem;
}
.link-box {
  display: flex;
  justify-content: flex-end;
}
.logo-box,
.logo-text {
  display: flex;
  align-items: center;
}
.logo-text {
  justify-content: flex-end;
  font-size: 10px;
}
.link {
  margin-right: 0.5rem;
  &:hover {
    color: red;
    cursor: pointer;
  }
  &:nth-child(2)::after,
  &:nth-child(2)::before {
    content: "|";
    margin: .5rem;
  }
}
.routerLink {
  color: #fff;
  display: inline-block;
  text-decoration: none;
  padding: 0.8rem;
  border-right: 0.5px solid #aaa;
  &:hover {
    cursor: pointer;
    background: #b81d22;
  }
}
.search-form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
}
.search {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 50%;
}
</style>