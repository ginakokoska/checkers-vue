<template>
  <div>
    <div class="d-flex justify-content-center p-4 mb-3 bg-dark">
      <div>
        <router-link class="nav-link link-light" to="/signin">
          Login
        </router-link>
      </div>
      <div>
        <router-link class="nav-link link-light" to="/register-user">
          Register
        </router-link>
      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
