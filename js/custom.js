// main control part for the note behavior
$(function() {
    $( ".draggable" ).draggable();
  });
var strOut="";		// all text in notes div
  $(document).ready(
  function(){
	  $("#add").click(
		function(){
			var $newDiv=$('<div class="note draggable"><textarea></textarea></div>');
			$("body").append($newDiv);
			var newWidth=$(document).width()/2-$newDiv.width()/2;
			$newDiv.css(	// offset the position of new added note div
				{
					top:150+"px",
					left:newWidth+"px"
				}
			);
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
			  strOut="";
			  $("textarea").each(
				function(index){
					//console.log($(this).val());
					if($(this).val()) {	// if the value is not empty
						strOut += $(this).val();
						strOut += "\n<<<<<<<<<<\n";   // separate text between note
					}
				}
			  );
			  console.log(strOut);
		  }
	  );
  }
  	);