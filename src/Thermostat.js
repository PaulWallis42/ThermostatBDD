$('#temperature_up').click(function(){
  var new_temp = parseInt($('#temperature').text()) + 1;
  $('#temperature').text(new_temp);
});

$('#temperature_down').click(function(){
  $('#temperature').text(parseInt($('#temperature').text()) - 1);
});
