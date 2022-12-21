<template>
  <div style="padding:100px"></div>
  <h1>Welcome to Checkers</h1>
  <div style="padding:80px"></div>
  <div class="container" align="center">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/images/Startpoint.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../../public/images/movediag.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../../public/images/capture.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="../../public/images/queen.png" class="d-block w-100">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage-comp',
  components: {}
}
</script>

<style lang="less">

.carousel {
  position: relative;
  max-width: 400px;
  max-height: 400px;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.carousel.carousel-fade .item {
  -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -ms-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out;
  transition: opacity 0.5s ease-in-out;
  opacity:0;
}

.carousel.carousel-fade .active.item {
  opacity:1;
}

.carousel.carousel-fade .active.left,
.carousel.carousel-fade .active.right {
  left: 0;
  z-index: 2;
  opacity: 0;
  filter: alpha(opacity=0);
}

.carousel.carousel-fade .next,
.carousel.carousel-fade .prev {
  left: 0;
  z-index: 1;
}

.carousel.carousel-fade .carousel-control {
  z-index: 3;
}
</style>