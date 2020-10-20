<template>
  <div class="box">
    <div class="contact-form">
      <form class="contact-form-aside">
        <div>
          <label for="userName">姓名</label>
          <input
            id="userName"
            class="contact-form-control"
            placeholder="輸入姓名"
          />
        </div>
        <div>
          <label for="userAddress">住址</label>
          <input
            id="userAddress"
            class="contact-form-control"
            placeholder="輸入住址"
          />
        </div>
        <div>
          <label for="userPhone">連絡電話</label>
          <input
            id="userPjone"
            class="contact-form-control"
            placeholder="輸入連絡電話"
          />
        </div>
        <div>
          <label for="userMail">E-mail</label>
          <input
            id="userMail"
            class="contact-form-control"
            placeholder="輸入電子郵件"
          />
        </div>
      </form>
      <form>
        <label for="userName">留言</label>
        <textarea
          id="userName"
          class="contact-form-textarea"
          placeholder="輸入留言"
        />
        <button class="contact-btn">POST COMMIT</button>
      </form>
    </div>
    <div class="contact-map">
      <l-map :zoom="zoom" :center="center" style="min-height: 100%">
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  &-aside {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
  &-control {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}
.contact-form-textarea {
  width: 100%;
  min-height: 80%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.contact-btn {
  width: 100%;
  min-height: 13.5%;
  color: #fff;
  font-size: 30px;
  background: #1eaf71;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
  }
}
</style>