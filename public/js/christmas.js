$(window).ready(function() {  
  var pairings = {
    "Ben": "Bruce",
    "Jenny": "Peggy",
    "Smyra" : "Ben",
    "Brad": "Jenny",
    "Peggy": "Brad",
    "Bruce": "Smyra"
  };
  function addRow(giver, getter) {
    var row = $('#templates .giver-row').clone();
    row.find('.giver').text(giver);
    row.find('.getter').text(getter);
    $('.main-table tbody').append(row);
  }

  $.each(pairings, addRow);
});
