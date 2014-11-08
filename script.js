$(document).ready(function() {

    $('#make_grid').click(function() {
    $('#make_grid').attr("disabled", true);

    var grid_height = $('#height').val();
    var grid_width = $('#width').val();
    var rows = [];
    var columns = [];

    if(grid_height=='' && grid_width==''){
      alert("Please enter a height and width.");
      $('#make_grid').attr("disabled", false);
    } else if(grid_width==''){
      alert("Please enter a width.");
      $('#make_grid').attr("disabled", false);
    } else if(grid_height==''){
      alert("Please enter a height.");
      $('#make_grid').attr("disabled", false);
    }

    for(i = 0; i < grid_height; i++) {
      var row= $('<div class="row"></div>');
      rows.push(row);
    }

    for(i = 0; i < grid_width; i++) {
      var column = $('<div class="column"></div>');
      columns.push(column);
    }

    $('.table').append(rows);
    $('.row').append(columns);

    $('.table').on('mouseenter', '.column', function() {
      $(this).css("background", "black");
    });
  });

  $('#reset').click(function() {
    $('.row').remove();
    $('#height').val("");
    $('#width').val("");
    $('#make_grid').attr("disabled", false);
    $('#trails').attr("disabled", false);
    $('#colors').attr("disabled", false);
  });

  $('#trails').click(function() {
    $('.table').on('mouseenter', '.column', function() {
      $('#colors').attr("disabled", false);
      $('#trails').attr("disabled", true);
      $(this).css("background", "black");
      $(this).animate({"opacity":0.0},500);
    });
  });

  $('#colors').click(function() {
    $('.table').on('mouseenter', '.column', function() {
      $('#trails').attr("disabled", false);
      $('#colors').attr("disabled", true);
      $(this).css({"background-color":"rgba(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) +"," + Math.floor(Math.random()*255) +",1)"});
      $(this).animate({"opacity":0.0},500);
    });
  });
});
