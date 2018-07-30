//
$(document).ready(function(){
  //
  var winArr = [
    ["#0-0", "#1-0", "#2-0"], // top row
    ["#0-1", "#1-1", "#2-1"], // middle row
    ["#0-2", "#1-2", "#2-2"], // bottom row
    ["#0-0", "#0-1", "#0-2"], // left column
    ["#1-0", "#1-1", "#1-2"], // middle column
    ["#2-0", "#2-1", "#2-2"], // right column
    ["#0-0", "#1-1", "#2-2"], // black slash
    ["#0-2", "#1-1", "2-0"] // forward slash
  ]
  //
  function listenForClicksOnCells() {
    $(".cell").click(markCell)
  }  
  
  listenForClicksOnCells()
  //
  var MARK = "x"
  //
  
  function markCell() {
    if (this.innerText === "") {
      //
    this.innerText = MARK
    numberTile = numberTiles + 1
    //
    if (playerWon(MARK)) {
    console.log(MARK +" won the game")
    } else if (numberTiles == 9) {
      console.log("Tie")
    }
    //
    if (MARK=="x") {
      MARK = "o";
    } 
    else if (MARK=="o") {
      MARK = "x";
    }
    }
   }
  //
  // takes in a DOM id and checks whether its text is equal to the second argument (mark)
function elementContains(id, mark) {
  return $(id).text() === mark
}

// to be run after each turn. checks whether a given mark ('X'/'O') populates all three spots in any given win combination
function playerWon(mark) {
  for (var idx = 0; idx < winArr.length; idx++) { // for every win combination
    var winCombo = winArr[idx]
    var won = winCombo.every(id => elementContains(id, mark)) // check if elementContains returns true for every id
    if (won) return true
  }
  return false // if we got here, it means no winning combination was found and we can safely return false
}
  //
  function resetGame() {
    MARK = "x"
    numberTiles = 0
    $('.cell').innerText = ""
  }
  //
         $("#square").fadeOut(2000);
    // $("#close-square").click(function(){
    //     $("#square").fadeOut(200);
    // });
})
