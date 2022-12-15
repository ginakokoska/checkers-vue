<template>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
    <article>
      <div style="padding:100px">
        <h1>
          CHECKERS INSTRUCTION
        </h1>
        <p></p>
        <header>
          <h3>
            Object
          </h3>
          <p>
            The objective is to remove all of your opponent's
            checkers from the gameboard by capturing them.
          </p>
        </header>
        <header>
          <h3>
            Game Setup
          </h3>
          <p>
            You will find 8 or 10 checkers already placed on
            the boards black squares.
          </p>
        </header>
        <header>
          <h3>
            How to play
          </h3>
          <p>
            Choose a player to go first. On your turn, move
            any of your checkers. Follow the movement rules described
            below. After you move one checker, your turn is over. The
            game continues with players taking alternating turns.
          </p>
        </header>
        <header>
          <h3>
            Movement Rules
          </h3>
          <li>
            Always move your checker diagonally
            <i>
              forward
            </i>
            , toward your opponent's side of the
            boardgame.
            <i>
              Note:
            </i>
            After a checker becomes a "King",
            he can move diagonally forward or backward.
          </li>
          <li>
            Move your checker one space diagonbally, to an
            open adjacent to the checker you jumped. When you jump
            over an oppenent's checker, you
            <i>
              capture
            </i>
            it (see
            <i>
              Capturing an Opponent's Checker
            </i>
            ).
          </li>
          <li>
            If all squares adjacent to your checker are
            occupied, your checker is blocked and cannot move.
          </li>
          <p></p>
        </header>
        <header>
          <h3>
            Capturing an Opponent's Checker
          </h3>
          <p>
            If you jump an opponent's checker, you capture it.
            Remove it from the gameboard and place it in front of
            you.
          </p>
        </header>
        <header>
          <h3>
            Becoming a "King"
          </h3>
          <p>
            As soon a one of your checkers reachers the first
            row on your ipponent's side of the gameboard, he becomes
            a King. Place another checker of the same color on top of
            it. Now this double-decker checker can move forward
            <i>
              or
            </i>
            backward on the gameboard.
          </p>
        </header>
        <header>
          <h3>
            How to win
          </h3>
          <p>
            The first player to capture all opposing checkers
            from the gameboard wins the game!
          </p>
        </header>
    </article>
  </div>
</template>

<script>
  export default {
  name: 'Instructions-comp',
  components: {}
}

</script>

<style lang="less">

@darkred: #641403;
@lightgrey: #ccc;
@darkgrey:#333;
@midgrey: #555;
@whitegrey: #f1f1f1;


.myFont {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}

.myMargin {
  margin: 25px 200px 20px 200px;
}

.myAlign {
  text-align: center;
}

.myCursor {
  cursor: pointer;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


h1 {
  .myAlign;
  font-size: 40px;
  color: @darkred;
  letter-spacing: 0.3em;
}


h3 {
  .myAlign;
  font-size: 25px;
  letter-spacing: 0.2em;
  color: @darkred;
}


p {
  .myFont;
  .myMargin;
  .myAlign;
}



body {
  margin: 0;
  background-color: @whitegrey;
  .myFont;

}



article {
  border: 1px solid black;
  .myMargin;
  background: @lightgrey;
  position: absolute;
}


a {
  .myCursor;
}
</style>