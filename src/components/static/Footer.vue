<template>
  <div class="box">
    <footer>
      <div class="col">
        <header class="col-header">INFORMATION</header>
        <div class="col-content">
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">WHY BUY FROM US</header>
        <div class="col-content">
            <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">MY ACCOUNT</header>
        <div class="col-content">
            <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">CONTACT</header>
        <div class="col-content">
            <ul>
            <li>a</li>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  min-height: 20vh;
  background: #FCFCFC;
}
footer {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
ul{
  list-style: none;
  padding: 0 .5rem;
}
.col {
  border-left: 0.5px solid #CECECE;
  padding-right: 5rem;
  &-header {
    padding: 0.5rem;
    border-bottom: 0.5px solid #CECECE;
  }
}
</style>