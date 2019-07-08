$(window).ready(function()  {
  $('#book').turn({
    display: 'double',
    acceleration: true,
    elevation:500
  });
});

$(window).bind('keydown', function(e){

  if (e.keyCode==37)
    $('#book').turn('previous');
  else if (e.keyCode==39)
    $('#book').turn('next');
});

$(window).ready(function()  {
  setTimeout(function() {
    $('#book').turn('next');
    setInterval(function()  {
      $('#book').turn('next')
  }, (2*5736))}, 5736)});
