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
         $("#square").fadeOut(2000);
    // $("#close-square").click(function(){
    //     $("#square").fadeOut(200);
    // });
})
