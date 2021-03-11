<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

var $hands = $('#staticclock div.hand') // reference all the hand DIVs

function setclock(fieldval, fieldtype){
 if (fieldtype == 'hrfield'){ //fieldval should be 0-23
  var hour_as_degree = fieldval / 12 * 360 //express hours in degs
  $hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' }) //rotate hour DIV x degrees
 }
 else if (fieldtype == 'minfield'){ //fieldval should be 0-59
  var minute_as_degree = fieldval / 60 * 360 // same deal in mins
  $hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
 }
 else if (fieldtype == 'secfield'){ //fieldval should be 0-59
  var second_as_degree = fieldval /60 * 360
  $hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' })
 }
}
