<template>
  <div class="form-group" id="form-group">
    <label for="text-input"> </label>
    <input type="text" class="form-control" id="text-input" placeholder="Enter your move like 'XX YY'" onFocus="this.placeholder = ''" input-focus-border-color="#99999">
    <div style="padding:20px"></div>
    <button @click="$root.jsMove()" type="button" class="btn bouncy"> Enter</button>
    <p id="message-field"></p>
  </div>
</template>


<script>

import $ from "jquery";
import {websocketsmixins} from "@/mixins/websocketsmixins";

export default {
  name: 'Move',
  mixins: [websocketsmixins],
  methods: {
    connectWebSocket() {
      this.vueWebsocket.onopen = (event) => {
        this.vueWebsocket.send("Connect to server");
        console.log("connecting to server")
      }

      this.vueWebsocket.onclose = (event) => {
        this.vueWebsocket.send("reset", "")
      };

      this.vueWebsocket.onerror = (event) => {
      };

      this.vueWebsocket.onmessage = (event) => {
        if (typeof event.data === "string") {
          this.data = JSON.parse(event.data)
          if (this.data.reset === 1) {
          }
        }
        this.game = this.data.game
        this.gameBoard = this.data.game.gameBoard
        this.size = this.data.game.gameBoard.size
        // TODO: HERE IDK gameoboard, site etc ?
        this.checkWin()
        this.updateGameBoard()
      };
    },
    processCmdWS(cmd, data) {
      this.vueWebsocket.send(cmd + "|" + data + "|")
    },
    processCommand(cmd, returnData) {
      this.post("POST", "/command", {"cmd": cmd, "data": returnData}, cmd).then(() => {
      })
    },
    post(method, url, returnData, cmd)
    {
      return $.ajax({
        method: method,
        url: url,
        data: JSON.stringify(returnData),
        dataType: "json",
        contentType: "application/json",

        success: function (response) {
          this.data = response;
        },
        error: function (response) {
          console.log("Error")
          console.error(response);
        }
      });
    },
    checkWin() {
      let gamestate = this.data.game.gameState
      if (gamestate in ["BLACK_WON", "WHITE_WON"]) {
        let winner = (gamestate === "WHITE_WON" ? "White" : "Black")
        swal({
          icon: "info",
          text: winner + " has won the game.",
          title: "Title"
        })
      }

    },
    newBoard(num) {
      this.processCmdWS("newBoard", num)
    },
    jsMove() {
      let mv = $('#text-input').val();
      console.log(mv)
      this.processCmdWS("jsMove", mv)
    },
    updateGameBoard() {
      this.size = this.data.game.gameBoard.size;
      let newGame = $('#gamecontainer');
      newGame.html('');
      let newContent = '';
      //newContent += '<div class="gamecontainer" id="gamecontainer">';
      newContent += '<div class="game">';
      for(let row=0; row < this.data.game.gameBoard.size; row++) {
        newContent += '<div class="fieldrow">';
        for(let col=0; col < this.data.game.gameBoard.size; col++) {

          if ((row+col+this.data.game.gameBoard.size)%2 === 0) {
            newContent += '<div class="field" style="background-color: #641403">';
          } else {
            newContent += '<div class="field" style="background-color: #000000">';
          }

          let scalar = row*this.size+col;

          let color = this.data.game.gameBoard.fields[scalar].field.piece.color;
          let state = this.data.game.gameBoard.fields[scalar].field.piece.state;

          switch (state) {
            case "normal":
              newContent += '<img class="img" src="/assets/images/' + color + '.png" alt=""/>';
              newContent += '</div>';
              break;
            case "queen":
              newContent += '<img class="img" src="/assets/images/' + color + '_queen.png" alt=""/>';
              newContent += '</div>';
              break;
            default:
              newContent += '<img class="img" src="/assets/images/empty.png" alt=""/>';
              newContent += '</div>';
              break;
          }

        }
        newContent += '</div>'
      }

      newContent += '</div></div>';
      newGame.html(newContent);
      let msg = $('#message-field');
      msg.html(this.data.game.message);
    },
    gotData() {
      let that = this;
      return $.ajax({
        method: "GET",
        url: "/current",
        dataType: "json",

        success: function (response) {
          that.data = response;
          that.size = response.game.gameBoard.size;
          that.getData();
        },
        error: function (response) {
          console.log("Error")
          console.error(response);
        }
      });

    },
    getData() {
      let newGame = $('#gamecontainer');
      newGame.html('');
      let newContent = '';
      //newContent += '<div class="gamecontainer" id="gamecontainer">';
      newContent += '<div class="game">';
      for(let row=0; row < this.size; row++) {
        newContent += '<div class="fieldrow">';
        for(let col=0; col < this.size; col++) {


          if ((row+col+this.size)%2 === 0) {
            newContent += '<div class="field" style="background-color: #641403">';
          } else {
            newContent += '<div class="field" style="background-color: #000000">';
          }

          let scalar = row*this.size+col;
          let color = this.data.game.gameBoard.fields[scalar].field.piece.color;
          let state = this.data.game.gameBoard.fields[scalar].field.piece.state;

          switch (state) {
            case "normal":
              newContent += '<img class="img" src="/assets/images/' + color + '.png" alt=""/>';
              newContent += '</div>';
              break;
            case "queen":
              newContent += '<img class="img" src="/assets/images/' + color + '_queen.png" alt=""/>';
              newContent += '</div>';
              break;
            default:
              newContent += '<img class="img" src="/assets/images/empty.png" alt=""/>';
              newContent += '</div>';
              break;
          }

        }
        newContent += '</div>'
      }

      newContent += '</div></div>';
      newGame.html(newContent);

    }


  },
  created() {
    this.gotData();
    this.connectWebSocket();
  },
}

</script>

<style lang="less" scoped>

.form-control {
  border-radius: 0;
}

[class^='ion-'] {
  font-size: 1.2em;
}

.has-feedback .form-control-feedback {
  top: 0;
  left: 0;
  width: 46px;
  height: 46px;
  line-height: 46px;
  color: #555;
}

.has-feedback .form-control {
  padding-left: 42.5px;
}

.btn {
  font-weight: bold;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);
}

.btn-lg {
  font-size: 18px;
}

</style>
