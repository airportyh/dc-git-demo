

var winningCombos= [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2],
];
function playerOccupiesSquares(player,combo, board){
  for (var i = 0; i < combo.length; i++){
    var idx = combo[i];
    var value = board[idx];
    if(value !== player){
      return false;
    }
  }
  return true;
}

function checkWinner(board){
  for (var i = 0; i < winningCombos.length; i++){
    var combo = winningCombos[i];
    if (playerOccupiesSquares ("O", combo, board)){
      return "O";
    }
    if(playerOccupiesSquares("X", combo, board)){
      return "X";
    }
  }
  return null;
}
function getCurrentBoard(){
  var buttons = $(".square");
  var moves= [];
  for(var i =0; i < buttons.length; i++){
    var button = $ (buttons[i]);
    moves.push(button.val());
  }
  return moves;
}


var turn = 0;
var winsO = 0;
var winsX = 0;
var draws = 0;
$(function(){
  $(".square").click(function(){
    debugger
    var text = $(this).val();
    if (text === "") {
      if ((turn % 2)===0){
        $(this).val("O");
      }
      else {
        $(this).val("X");
      }
      turn += 1;
    }
    var board = getCurrentBoard();
    var winner = checkWinner(board)
    if (winner){
      if (winner=== "O"){
        winsO++;
      }
      else{
        winsX++;
      }
      $("#winner")
      .text("The winner is " + winner)
      .show();
      updateScoreboard();
      $("#play-again-button").show();

    }
    else if ((text === "O")||(text === "X")) {

    }
    if (turn === 9 && !winner){

      draws++;
      updateScoreboard();
      $("#winner").text("Draw").show();
      $("#play-again-button").show();
    }
  });

  $("#play-again-button").click(function(){
    resetGame();
  });

  $("#playGame").click(function(){
    startGame();
  });
});

function resetGame(){
  turn=0;
  $(".square").val("");
  $("#winner").hide();
  $("play-again-button").hide();
}
function startGame(){
  turn = 0;
  winsO = 0;
  winsX = 0;
  draws = 0;
  $(".square").val("");
  $("#play-again-button").hide();
  $("#winner").text("Start playing...");
  $("#Oscore").text("");
  $("#Xscore").text("");
  $("#Drawscore").text("");
  updateScoreboard();
}


function updateScoreboard(){
  $("#Oscore").text("O:"+ winsO );
  $("#Xscore").text("X:"+ winsX );
  $("#Drawscore").text("D:"+ draws);
}
