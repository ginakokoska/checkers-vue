<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" :href="homepagelink"> <i class="fa-solid fa-chess"></i> Checkers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Checkers Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" :href="homepagelink"> <i class="fa-solid fa-igloo"></i> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ginakokoska/Checkers_WA"> <i class="fa-brands fa-github-alt"></i> GitHub</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#" @click="newBoard(8)"><i class="fa-solid fa-chess-queen"></i> 8x8</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#" @click="newBoard(10)"><i class="fa-regular fa-chess-queen"></i> 10x10</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" :href="instructlink"> <i class="fa-solid fa-clipboard-list"></i> User Manual</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>


<script>

import {websocketsmixins} from "@/mixins/websocketsmixins";

export default {
  name: 'checkers-navbar',
  data() {
    return {
      homepagelink: "/",
      instructlink: "/instructions"
    }
  },
  mixins: [websocketsmixins],
  methods: {
    newBoard(num) {
      this.processCmdWS("newBoard", num)
    }
  }
}

</script>

<style lang="less">
@whitegrey: #f1f1f1;
@darkred: #641403;

h5 {
    font-size: 35px;
    color: @darkred;
    -webkit-text-stroke: 0.3px @whitegrey;
}


.navbar-nav a:hover, .dropdown:hover .dropbtn {
  background-color: @whitegrey;
  color: @darkred;
}

.navbar-brand {
   font-size: 35px;
   -webkit-text-stroke: 0.5px @darkred;
}
</style>