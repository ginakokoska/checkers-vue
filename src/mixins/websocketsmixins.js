import $ from "jquery";
import * as swal from "vue-sweetalert2";

export const websocketsmixins = {
    data: function () {
        return {
            vueWebsocket: Object,
            data: {},
            game: {"gameState": "WHITE_TURN", "gameBoard":{"size": 8, "fields":[]}},
            gameBoard: "",
            size: 8,
        }
    },
    methods: {
        connectWebSocket() {
            this.vueWebsocket = new WebSocket("ws://" + location.hostname + ":9000/websocket") // change location.hostname to backend ip
            this.vueWebsocket.onopen = () => {
                this.vueWebsocket.send("Connect")
            }

            this.vueWebsocket.onclose = () => {
                this.vueWebsocket.send("reset", "")
            };

            this.vueWebsocket.onerror = () => {
            };

            this.vueWebsocket.onmessage = (event) => {
                console.log("onmessage")
                if (typeof event.data === "string") {
                    this.data = JSON.parse(event.data)
                    if (this.data.reset === 1) {
                        swal({
                            icon: "warning",
                            text: "Game has been reset!",
                            title: "Error!"
                        })
                    }
                }
                if (!this.connected && this.data.game.playerCount === 0) {
                    this.connectPlayer()
                    this.connected = true
                    this.color = "White"
                    console.log(this.color)
                } else if (!this.connected && this.data.game.playerCount === 1) {
                    this.connectPlayer()
                    this.connected = true
                    this.color = "Black"
                    console.log(this.color)
                } else {
                    this.connected = true
                    console.log("already too many players")
                }
                console.log("pc: ", this.data.game.playerCount)
                this.game = this.data.game
                this.gameBoard = this.data.game.gameBoard
                this.size = this.data.game.gameBoard.size
                // TODO: HERE IDK gameboard, site etc ?
                this.checkWin()
                this.updateGameBoard()
            };
        },
        resize(s) {
            this.processCmdWS("newBoard", s)
        },
        processCmdWS(cmd, data) {
            this.vueWebsocket.send(cmd + "|" + data)
            console.log("processCmd: " + cmd + "|" + data)
        },
        processCommand(cmd, returnData) {
            this.post("POST", "/command", {"cmd": cmd, "data": returnData}, cmd).then(() => {
            })
        },
        post(method, url, returnData)
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
            mv += (" " + this.color)
            console.log(mv)
            this.processCmdWS("jsMove", mv)
        },
        connectPlayer() {
            this.processCmdWS("connectPlayer", "x")
            console.log("connectPlayer")
        },
        updateGameBoard() {
            this.size = this.data.game.gameBoard.size;
            console.log("update")
            console.log(this.data.game.gameBoard.size);
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

                    let scalar = col*this.size+row;

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
                url: "http://localhost:9000/current",
                crossDomain: true,
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

                    let scalar = col*this.size+row;
                    let color = this.data.game.gameBoard.fields[scalar].field.piece.color;
                    let state = this.data.game.gameBoard.fields[scalar].field.piece.state;

                    switch (state) {
                        case "normal":
                            newContent += '<img class="img" src="/assets/images/' + color + '.png" alt=""/>';
                            newContent += '</div>';
                            break;
                        case "queen":
                            newContent += '<img class="img" src="./images/' + color + '_queen.png" alt=""/>';
                            newContent += '</div>';
                            break;
                        default:
                            newContent += '<img class="img" src="./images/empty.png" alt=""/>';
                            newContent += '</div>';
                            break;
                    }

                }
                newContent += '</div>'
            }

            newContent += '</div></div>';
            newGame.html(newContent);

        }


    }

}