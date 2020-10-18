<template>
  <div class="box">
    <footer>
      <div class="col">
        <header class="col-header">INFORMATION</header>
        <div class="col-content">
          <ul>
            <li>About Us</li>
            <li>Customer Service</li>
            <li>Advanced Search</li>
            <li>Orders and Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">WHY BUY FROM US</header>
        <div class="col-content">
          <ul>
            <li>About Us</li>
            <li>Customer Service</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
            <li>Search Terms</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">MY ACCOUNT</header>
        <div class="col-content">
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div class="col">
        <header class="col-header">CONTACT</header>
        <div class="col-content">
          <ul>
            <li>+91-123-456789</li>
            <li>+00-123-000000</li>
          </ul>
        </div>
        <header class="col-header">FOLLOW US</header>
        <div class="icon-content">
          <i class="fab fa-facebook-f icon" />
          <i class="fab fa-twitter icon" />
          <i class="fab fa-instagram icon" />
          <i class="fab fa-linkedin-in icon" />
          <i class="fab fa-github icon" />
        </div>
      </div>
    </footer>
    <div class="copy">
      © 2013 home_shoppe. All rights reserved | Design by W3layouts
    </div>
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
  background: #f1f0f0;
  border-top: 0.5px solid #cecece;
}
footer {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
ul {
  list-style: none;
  padding: 0 0.5rem;
  & li {
    font-size: 10px;
    padding: 0.5rem 0;
  }
}
.col {
  border-left: 0.5px solid #cecece;
  padding-right: 5rem;
  &-header {
    padding: 0.5rem;
    border-bottom: 0.5px solid #cecece;
  }
}
.copy {
  width: 100%;
  min-height: 10vh;
  text-align: center;
  padding: 1rem 0;
  font-size: 15px;
  border-top: 0.5px solid #cecece;
}
.icon {
  color: #b81d22;
  font-size: 30px;
}
.icon-content {
  display: grid;
  padding: 0.5rem;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>