// main control part for the note behavior
$(function() {
    $( ".draggable" ).draggable();
  });
  $(document).ready(
  function(){
	  $("#add").click(
		function(){
			var $newDiv=$('<div class="note draggable"><textarea></textarea></div>');
			$("body").append($newDiv);
			$newDiv.addClass("pos");
			$( ".draggable" ).draggable();
		});
  }
  	);