<template>
  <div class="box">
    <div class="same box-item-1">
      <span class="caps">IPHONE 6S</span>
      <h4>
        3D Touch. 12MP photos.<br />
        4K video.One powerful<br />
        phone
      </h4>
      <h6>Learn more or visit an Apple Store today</h6>
    </div>
    <div class="same box-item-2">
      <img src="../assets/News-01.png" />
    </div>
    <div class="same box-item-3">
      <span class="caps">LEARN more</span>
      <h1 class="header-3">
        How to Use Rotary<br />
        Evaporator in<br />
        Chemical Labs
      </h1>
      <h6>Download more</h6>
    </div>
    <div class="same box-item-4">
      <img src="../assets/News-02.png" />
      <h4>Our Brand New <br />Keyboard</h4>
      <h6 style="color: yellow">LEARN</h6>
    </div>
    <div class="same box-item-5">
      <div class="text-5">
        <div class="caps">IMAC.RETINA</div>
        Hardly a month passes these days where
      </div>
      <img src="../assets/News-03.png" alt="missing" />
    </div>
    <div class="same box-item-6">
      <div class="text">
        Apple may be experimenting in the virtual reality space. The company has
        been granted a patent for a head-mounted virtual reality device that
        would use the iPhone screen as the display.
        <div class="download">Download now</div>
      </div>
    </div>
    <div class="same box-item-7">
      <div class="circle">
        <h4>POPULAR</h4>
        <img src="../assets/News-04.png" />
        <div>MEET</div>
      </div>
      <h2>iClound</h2>
      <div class="pag">
        With iCloud, you always have the latest versions of your most important
        things — like documents, apps, notes, and contacts — on whatever device
        you’re using.
      </div>
      <div class="btn">learn more</div>
    </div>
    <div class="same box-item-8">
      <img src="../assets/News-05.png" />
      <h3>Games ourpasion</h3>
      <h5>LEARN ›</h5>
    </div>
    <div class="same box-item-9">
      <h4>Much MuchBetter</h4>
      <h4>Experience</h4>
      <img src="../assets/News-06.png" />
    </div>
    <div class="same box-item-10">
      <i class="fab fa-facebook-square" style="font-size: 50px" />
      <h4>
        Connect with<br />
        Facebook
      </h4>
    </div>
    <div class="same box-item-11">
      <h6>POPULAR</h6>
      <h4>Much MuchBetter Experience</h4>
    </div>
    <div class="same box-item-12">
      <img src="../assets/News-09.png"/>
      <div class="text-12">More than just a display, <br> it’s a vision</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
.same {
  color: #fff;
  padding: 20px;
  font-size: 150%;
  text-align: center;
  min-height: 30vh;
}
.caps {
  font-family: Montserrat, sans-serif;
  color: #9fa3a7;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.box {
  min-height: 70vh;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &-item-1 {
    background: rgb(235, 235, 235);
    & h4 {
      color: black;
    }
    & h6 {
      color: gray;
    }
  }
  &-item-2 {
    padding: 0;
    background: rgb(235, 235, 235);
    display: grid;
    align-items: flex-end;
    justify-content: center;
    & img {
      width: 249px;
    }
  }
  &-item-3 {
    grid-column-start: 3;
    grid-column-end: 5;
    background: #f7f8f9;
    & .header-3 {
      color: black;
    }
    & h6 {
      color: #27b9c2;
      text-decoration: underline;
    }
  }
  &-item-4 {
    background: #f05638;
    & img {
      width: 319px;
    }
  }
  &-item-5 {
    background: rgb(235, 235, 235);
    padding: 0 2rem;
    display: grid;
    align-items: flex-end;
    justify-content: center;
    & .text-5 {
      width: 50%;
      text-align: left;
      margin: 0 auto;
      color: #333;
    }
  }
  &-item-6 {
    background: #fff;
    text-align: left;
    & .text {
      width: 90%;
      margin: 0 auto;
      text-align: left;
      font-size: 15px;
      color: rgb(200, 200, 200);
    }
    & .download {
      color: #27b9c2;
      margin-top: 1rem;
      text-decoration: underline;
    }
  }
  &-item-7 {
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 4;
    background: #8f76bc;
    & .circle {
      display: flex;
      width: 373px;
      height: 373px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #8166b0;
      & img {
        width: 239px;
      }
    }
    & .pag {
      width: 50%;
      margin: 2rem auto;
      font-size: 10px;
    }
    & .btn {
      background: yellow;
      color: #333;
      font-weight: 900;
      width: 50%;
      padding: 0.5rem;
      margin: 2rem auto;
      border-radius: 5rem;
    }
  }
  &-item-8 {
    background: rgb(235, 235, 235);
    & img {
      width: 238px;
    }
    & h3 {
      color: #333;
    }
    & h5 {
      color: #27b9c2;
    }
  }
  &-item-9 {
    padding: 0;
    grid-column-start: 2;
    grid-column-end: 4;
    background: #93b6b7;
    display: grid;
    align-items: flex-end;
    justify-content: center;
    & img {
      width: 655px;
    }
  }
  &-item-10 {
    background: #3862f4;
  }
  &-item-11 {
    background: #f7f8f9;
    & h6 {
      background: #7bc424;
      padding: 0.5rem;
      border-radius: 1rem;
      width: 50%;
      margin: 0 auto;
    }
    & h4 {
      color: #333;
    }
  }

  &-item-12 {
    background: #333;
    grid-column-start: 3;
    grid-column-end: 5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    & img{
      width:249px;
    }
  }
}
</style>