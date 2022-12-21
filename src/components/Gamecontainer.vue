<!--<template>-->
<!--  <div class="gamecontainer" id="gamecontainer">-->
<!--    <div class="game">-->
<!--      <li v-for="i in 8" :key="i">-->
<!--        <div class="fieldrow">-->
<!--      <li v-for="j in 8" :key="j">-->
<!--        <div class="field" id="field{{i}}*$root.size+{{j}}">-->
<!--          <img class="img" id="scalar{{i}}*$root.size+{{j}}" alt="">-->
<!--        </div>-->
<!--      </li>-->
<!--    </div>-->
<!--    </li>-->
<!--  </div>-->
<!--  </div>-->
<!--</template>-->



<!--<template>-->
<!--  <div class="gamecontainer" id="gamecontainer">-->
<!--    <div class="game">-->
<!--      <div v-for="i in 8" :key="i" class="fieldrow">-->
<!--        <div v-for="j in 8" :key="j" class="field" v-bind:id="'field'+((i*8+j)-(8+1))">-->
<!--          <img class="img" v-bind:id="'scalar'+((i*8+j)-(8+1))" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->




<template>
  <div class="gamecontainer" id="gamecontainer">
    <div class="game">
      <div v-for="row in 10" :key="row" class="fieldrow">
        <div v-for="column in 10" :key="column" class="field" :id="'field' + (column + (row - 1) * 10)">
          <img :id="'scalar' + (column + (row - 1) * 10)" class="img" />
        </div>
      </div>
    </div>
  </div>
</template>




<script>

//import {websocketsmixins} from "@/mixins/websocketsmixins";


export default {
  name: "game-container",
  created() {
    //this.gotData();
    //this.resize(8);
  },
  //mixins: [websocketsmixins]
};
</script>

<style lang="less">




@darkred: #641403;
@darkgrey:#333;
@lightgrey: #ccc;
@midgrey: #555;


.gamecontainer {
    margin:0;
    padding:0;
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
}


  .game {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }


  .field {
    flex: 1 0 calc(100% / var(--num-fields));
    box-sizing: border-box;
    border: 1px solid black;
  }



.img {
    width: 100%;
    height: 100%;
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




</style>
