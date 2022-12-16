<template>
  <checkers-navbar></checkers-navbar>
  <game-container></game-container>
  <move-comp></move-comp>
</template>

<script>
import CheckersNavbar from "@/components/Checkersnavbar.vue";
import GameContainer from "@/components/Gamecontainer.vue";
import MoveComp from "@/components/Move.vue";

export default {
  name: 'Checkers-view',
  components: {CheckersNavbar, GameContainer, MoveComp}
}
</script>

<style>

</style>