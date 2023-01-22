<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" :href="homepagelink"> <font-awesome-icon icon="fa-solid fa-chess" /> Checkers</a>
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
            <li class="nav-item" >
              <a class="nav-link" aria-current="page" :href="homepagelink"> <font-awesome-icon icon="fa-solid fa-igloo" /> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/ginakokoska/Checkers_WA"> <font-awesome-icon icon="fa-brands fa-github-alt" /> GitHub</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="smallBoard"><font-awesome-icon icon="fa-regular fa-chess-king" /> 8x8</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="bigBoard"><font-awesome-icon icon="fa-solid fa-chess-queen" /> 10x10</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="instructlink"> <font-awesome-icon icon="fa-solid fa-clipboard-list" /> User Manual</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'nav-bar',
  data() {
    return {
      homepagelink: "/",
      instructlink: "/instructions",
      smallBoard: "/new8Grid",
      bigBoard: "/new10Grid"
    }
  },
  setup() {
    const auth0 = useAuth0();

    return {
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      login() {
        auth0.loginWithRedirect();
      },
      logout() {
        auth0.logout({
          returnTo: window.location.origin
        });
      }
    }
  },
  components: {}
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