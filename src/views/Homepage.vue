<template>
  <login></login>
  <logout></logout>
  <nav-bar></nav-bar>
  <homepage-comp></homepage-comp>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import HomepageComp from "@/components/Homepage-comp.vue";
import Login from "@/components/login.vue";
import Logout from "@/components/logout.vue";

export default {
  name: 'home-page',
  components: {Logout, Login, NavBar, HomepageComp}
}
</script>

<style>

</style>