<template>
  <nav-bar></nav-bar>
  <homepage-comp></homepage-comp>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import HomepageComp from "@/components/Homepage-comp.vue";

export default {
  name: 'home-page',
  components: {NavBar, HomepageComp}
}
</script>

<style>

</style>