<template>
  <div>
    <div id="root">
      <Header />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/static/Header.vue";
import Footer from "./components/static/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
#root {
  width: 90%;
  margin: 0 auto;
}
</style>
