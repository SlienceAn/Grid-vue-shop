<template>
  <div class="box">
    <div class="page item-1">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-2">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-3">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-4">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
      <div class="page-footer"></div>
    </div>
    <div class="page item-5">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-6">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-7">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
    </div>
    <div class="page item-8">
      <div class="page-header">header</div>
      <div class="page-body">body</div>
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
  background: rgb(200, 200, 200);
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
  & .item-1 {
  }
  & .item-2 {
  }
  & .item-3 {
  }
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
</style>