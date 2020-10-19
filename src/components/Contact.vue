<template>
  <div class="box">
    <div class="contact-form">
      <form>
        <input />
      </form>
    </div>
    <div class="contact-map">
      <l-map :zoom="zoom" :center="center" style="height: 100%">
        <l-tile-layer :url="url" :attribution="attribution" />
      </l-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      zoom: 13,
      center: [22.612961, 120.304167],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: grid;
  padding: 2rem 0;
  min-height: 50vh;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}
.contact-form {
}
.contact-map {
}
</style>