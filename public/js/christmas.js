$(window).ready(function() {  
  var pairings = {
    "Ben": "Brad",
    "Jenny": "Lily",
    "Brian": "Ben",
    "Lily": "Jenny",
    "Brad": "Bruce",
    "Smyra": "Peggy",
    "Bruce": "Brian",
    "Peggy": "Smyra"
  };
  function addRow(giver, getter) {
    var row = $('#templates .giver-row').clone();
    row.find('.giver').text(giver);
    row.find('.getter').text(getter);
    $('.main-table tbody').append(row);
  }

  $.each(pairings, addRow);
});
