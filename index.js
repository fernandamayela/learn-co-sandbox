//
$(document).ready(function(){
  //
  function listenForClicksOnCells() {
    $(".cell").click(markCell)
  }  
  
  listenForClicksOnCells()
  //
  var MARK = "x"
  //
  
  function markCell() {
    if (this.innerText == "") {
    this.innerText = MARK
    // MARK = "o"
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
