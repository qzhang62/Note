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
			var $exit=$('<button class="exit">x</button>');
			$newDiv.append($exit);
			$(".exit").click(    // click to delete this note
				function(){
					$(this).parent(".note").remove();
				}
			);
			$( ".draggable" ).draggable();
		});
	  $("#output").click(
		  // output all textarea text to console
		  function() {
			  console.clear();
			  $("textarea").each(
				function(index){
					console.log($(this).val());
				}
			  );
		  }
	  );
  }
  	);