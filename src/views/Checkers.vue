<template>
  <div v-if:="backendOnline">
    <game-page></game-page>
  </div>
  <div v-else: class="container">
    <img src="../../public/images/frog-sad.gif" alt="" style="width:256px;height:256px" />
    <p>No server connected<br>Please start backend first</p>
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
      backi: false,
    }
  },
  mounted() {
    console.log('hi');
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

p {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

</style>