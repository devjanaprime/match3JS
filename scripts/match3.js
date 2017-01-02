// 0 = empty
var board = [
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ]
]; // end board

var matchPieces = [];

function addMatch( matchObject ){
  console.log( 'in matchObject:', matchObject );
  matchPieces.push( matchObject );
  console.log( matchPieces );
} // end function

function checkForMatches(){
  console.log( 'sdf' );
  var matchPieces = [];
  // horiz match
  for ( var i = 0; i < board.length; i++ ) {
    for ( var j = 0; j < board[i].length-2; j++ ) {
      if( board[i][j] != 0 ){
        if( board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2] ){
          addMatch( { x: i, y: j } );
          addMatch( { x: i, y: j+1 } );
          addMatch( { x: i, y: j+2 } );
        } // end match checker if
      } //end ! empty
    } // end inner for
  } // end outer for
  // vert match
  for ( var k = 0; k < board.length-2; k++ ) {
    for ( var l = 0; l < board[k].length; l++ ) {
      if( board[k][l] != 0 ){
        if( board[k][l] == board[k+1][l] && board[k][l] == board[k+2][l] ){
          addMatch( { x: k, y: l } );
          addMatch( { x: k+1, y: l } );
          addMatch( { x: k+2, y: l } );
        } // end match checker if
      } //end ! empty
    } // end inner for
  } // end outer for
} // end checkForMatches
