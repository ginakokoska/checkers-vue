import $ from "jquery";

export const websocketsmixins = {
    data: function () {
        return {
            vueWebsocket: new WebSocket("ws://" + location.hostname + ":9000/websocket"),
            data: {},
            game: {"gameState": "WHITE_TURN", "gameBoard":{"size": 8, "fields":[]}},
            gameBoard: "",
            size: 8,
        }
    },
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


    }

}