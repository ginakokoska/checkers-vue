<template>
  <div v-if:="backendOnline">
    <game-page></game-page>
  </div>
  <div v-else: class="container">
    <p> server not connected </p>
  </div>
</template>

<script>
// import CheckersNavbar from "@/components/Checkersnavbar.vue";
// import GameContainer from "@/components/Gamecontainer.vue";
// import MoveComp from "@/components/Move.vue";
import GamePage from "@/components/Gamepage.vue"
import $ from "jquery";

export default {
  name: 'Checkers-view',
  components: {GamePage},
  data() {
    return{
      backendOnline: false,
    }
  },
  mounted() {
    $.ajax({
      url: 'http://localhost:9000/current'
    }).done(() => {
          this.backendOnline = true;
        }
    );
  },
}
</script>

<style>

</style>