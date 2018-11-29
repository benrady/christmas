$(window).ready(function() {  
  var pairings = {
    "Ben": "Peggy",
    "Brad": "Bruce",
    "Brian": "Smyra",
    "Bruce": "Lily",
    "Jenny": "Brian",
    "Lily": "Jenny",
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
