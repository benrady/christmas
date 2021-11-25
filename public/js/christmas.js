$(window).ready(function() {  
  var pairings = {
    "Ben": "Smyra",
    "Brad": "Bruce",
    "Brian": "Jenny",
    "Bruce": "Brian",
    "Jenny": "Lily",
    "Lily": "Peggy",
    "Peggy": "Brad",
    "Smyra": "Ben"
  };
  function addRow(giver, getter) {
    var row = $('#templates .giver-row').clone();
    row.find('.giver').text(giver);
    row.find('.getter').text(getter);
    $('.main-table tbody').append(row);
  }

  $.each(pairings, addRow);
});
