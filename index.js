//
$(document).ready(function(){
  //
  function listenForClicksOnCells() {
    $(".cell").click(markCell)
  }  
  
  listenForClicksOnCells()
  //
  var MARK = "x"
  
  function markCell() {
    this.innerText = MARK
    MARK = "o".repeat
  }
  //
         $("#square").fadeOut(2000);
    // $("#close-square").click(function(){
    //     $("#square").fadeOut(200);
    // });
})
