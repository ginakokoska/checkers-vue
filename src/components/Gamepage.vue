<template>
  <CheckersNavbar :method="newBoard"/>
  <GameContainer/>
  <Move :method="jsMove"/>
</template>

<script>
import CheckersNavbar from "@/components/Checkersnavbar.vue";
import {websocketsmixins} from "@/mixins/websocketsmixins";
import GameContainer from "@/components/Gamecontainer.vue";
import $ from "jquery";
import Move from "@/components/Move.vue";


let path = window.location.pathname;
let page = path.split("/").pop();
window.onbeforeunload = function() {
  if (page === "new8Grid" || page === "new10Grid") {
    return 'Are you sure you want to leave this page?';
  } return undefined;
}

export default {
  name: "Game-page",
  components: {Move, GameContainer, CheckersNavbar},
  methods: {
    newBoard(num) {
      this.processCmdWS("newBoard", num)
    },
    jsMove() {
      let mv = $('#text-input').val();
      mv += (" " + this.color)
      console.log(mv)
      this.processCmdWS("jsMove", mv)
    },
  },
  created() {
    this.gotData();
    this.connectWebSocket();
    //this.updateGameBoard();
  },
  mixins: [websocketsmixins],

}
</script>

<style scoped>

</style>