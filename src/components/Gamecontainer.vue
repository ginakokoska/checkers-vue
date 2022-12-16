<template>
  <div class="gamecontainer" id="gamecontainer">
    <div class="game">
      <li v-for="i in 8" :key="i">
        <div class="fieldrow">
      <li v-for="j in 8" :key="j">
        <div class="field" id="field{{i}}*$root.size+{{j}}">
          <img class="img" id="scalar{{i}}*$root.size+{{j}}" alt="">
        </div>
      </li>
    </div>
    </li>
  </div>
  </div>
</template>


<script>

import {websocketsmixins} from "@/mixins/websocketsmixins";
import Move from "@/components/Move.vue";

export default {
  name: 'game-container',
  methods: {
    Move() {
      return Move
    }
  },
  components: {},
  mixins: [websocketsmixins]
}
</script>

<style lang="less">
#gamecontainer {

@darkred: #641403;
@darkgrey:#333;
@lightgrey: #ccc;
@midgrey: #555;


.gamecontainer {
    padding-top: 4%;
    margin: 1em;
    display:flex;
    font-size: 40px;
    font-family: "Rockwell";
    font-weight: 500;
    color:black;
}

.game {
    border-style: solid;
    border-width: 0.15em;
    border-spacing: 0px;
    border-color: #222222;
    background-color: #222222;
    margin:auto;
    width: auto;
}

.field {
    display: inline-block;
    float:left;
    background-color: @darkred;
    width: 1.2em;
    height: 1.2em;
    text-align: center;
}


.field_black {
    display: inline-block;
    float:left;
    border-style: outset;
    border-width: 0em;
    background-color: #222;
    border-color: black;
    width: 1.2em;
    height: 1.2em;
    margin: 0.1em;
    text-align: center;
}

.img {
    width: 100%;
    height: 100%;
}

.field_red {
    display: inline-block;
    float:left;
    border-style: outset;
    border-width: 0em;
    background-color: @darkred;
    border-color: black;
    width: 1.2em;
    height: 1.2em;
    margin: 0.1em;
    text-align: center;
}

.piece_black {
    width: 100%;
    height: 100%;
    color: black;
    line-height: 55px;
    padding-left: 0.5px;
    padding-top: 0.2px;
    font-size: 60px;
    -webkit-text-stroke: 0.4px @lightgrey;
}

.piece_white {
    width: 100%;
    height: 100%;
    color: @lightgrey;
    line-height: 55px;
    padding-left: 0.5px;
    padding-top: 0.2px;
    font-size: 60px;
    -webkit-text-stroke: 1.5px #000000;
}

.piece_was_never_an_option {
    width: 100%;
    height: 100%;
}

.abc-navigation {
    height: 100%;
    width: 100%;
    margin: 1em;
    display:flex;
    font-size: 40px;
    font-family: "Rockwell";
    font-weight: 500;
    color:@lightgrey;
}

.field_row {
    display: inline-block;
    float:left;
    border-style: outset;
    border-width: 0em;
    background-color: @lightgrey;
    border-color: black;
    width: 1.2em;
    height: 1.2em;
    margin: 0.1em;
    text-align: center;

}

.field_col {
    display: inline-block;
    float:left;
    border-style: outset;
    border-width: 0em;
    background-color: @lightgrey;
    border-color: black;
    width: 9.6em;
    height:  9.6em;
    margin: 0.1em;
    text-align: center;

}

.game_gitter {
    border-style: inset;
    border-width: 0.05em;
    border-spacing: 0px;
    border-color: black;
    background-color: black;
    padding: 0.05em;
    margin:auto;
    width: auto;
}

.container {
    display: grid;
    grid-template-columns: [first] auto [line2] auto [line3] auto [line4] auto [line5] auto [line6] auto [line7] auto [end] auto ;
    grid-template-rows: [first] auto [row2] auto [row3] auto [row4] auto [row5] auto [row6] auto [row7] auto [end] auto ;
    background-color: #2196F3;
    padding: 10px;
}

.item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}



.myFont {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

.form-group {
  .myFont;
  box-shadow: @darkred;
  text-align: center;
  color: @darkred;
}


.btn {
    text-align: center;
    display:inline-block;
    border:0.1em solid @darkred;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    text-decoration:none;
    .myFont;
    font-weight:400;
    color:@midgrey;
    transition: all 0.2s;
}

btn:hover{
    color: @darkred;
    background-color:@lightgrey;
}


.form-control {
    text-align: center;
    .myFont;
    font-style: italic;
    letter-spacing: 0.2em;
    input-focus-border-color: @darkred;
    input-focus-border-color: tint-color(@darkred, 50%);
}

@media all and (max-width:30em){
    btn{
    display:block;
    margin:0.4em auto;
    }
}

.bouncy{
    animation:bouncy 5s infinite linear;
    position:relative;
}
@keyframes bouncy {
    0%{top:0em}
    40%{top:0em}
    43%{top:-0.9em}
    46%{top:0em}
    48%{top:-0.4em}
    50%{top:0em}
    100%{top:0em;}
}



}
</style>
