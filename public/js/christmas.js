$(window).ready(function() {  
  var pairings = {
    "Ben": "Bruce",
    "Brad": "Peggy",
    "Brian": "Jenny",
    "Bruce": "Lily",
    "Jenny": "Brad",
    "Lily": "Symra",
    "Peggy": "Ben",
    "Smyra": "Brian",
  };
  function addRow(giver, getter) {
    var row = $('#templates .giver-row').clone();
    row.find('.giver').text(giver);
    row.find('.getter').text(getter);
    $('.main-table tbody').append(row);
  }

  $.each(pairings, addRow);
});
