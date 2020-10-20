<template>
  <div class="box">
    <div class="page item-1">
      <div class="page-header">OUR HISTORY-1998</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-2">
      <div class="page-header">OPPORTUNITIES</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-3">
      <div class="page-header">OPPORTUNITIES</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-4">
      <div class="page-header">OUR HISTORY-2001</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-5">
      <div class="page-header">OPPORTUNITIES</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <ul>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
          <li>Text of the printing</li>
        </ul>
      </div>
    </div>
    <div class="page item-6">
      <div class="page-header">OPPORTUNITIES</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-7">
      <div class="page-header">OUR HISTORY-2010</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="page item-8">
      <div class="page-header">OUR HISTORY-2019</div>
      <div class="page-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.page {
  background: #ededed;
  min-height: 20vh;
  border-radius: 1rem;
  padding: 1rem;
  color: #333;
  &-header {
    font-size: 25px;
    padding-bottom: 1rem;
    border-bottom: 0.5px solid rgba($color: #333, $alpha: 0.5);
  }
  &-body {
    padding: 1rem 0;
   
  }
}
.box {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  & .item-4 {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  & .item-5 {
    grid-row-start: 4;
    grid-row-end: 6;
    grid-column-start: 2;
    grid-column-end: 3;
  }
}
p::first-letter{
  font-size: 25px;
}
</style>