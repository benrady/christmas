$(window).ready(function() {  
  var pairings = {
    "Brian": "Peggy",
    "Lily": "Bruce",
    "Ben": "Brian",
    "Jenny": "Symra"
    "Smyra" : "Lily",
    "Brad": "Jenny",
    "Peggy": "Brad",
    "Bruce": "Ben"
  };
  function addRow(giver, getter) {
    var row = $('#templates .giver-row').clone();
    row.find('.giver').text(giver);
    row.find('.getter').text(getter);
    $('.main-table tbody').append(row);
  }

  $.each(pairings, addRow);
});
