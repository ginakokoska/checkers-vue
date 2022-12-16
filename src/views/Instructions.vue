<template>
  <nav-bar></nav-bar>
  <instructions-comp></instructions-comp>
</template>

<script>
import InstructionsComp from "@/components/Instructions-comp";
import NavBar from "@/components/Navbar.vue";

export default {
  name: "Instructions-view",
  components: {NavBar, InstructionsComp}
}
</script>

<style>

</style>