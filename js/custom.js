// main control part for the note behavior
$(function() {
    $( ".draggable" ).draggable();
  });
$(function () {		// disable F5 to refresh
	$(document).keydown(function (e) {
		if((e.which || e.keyCode) != 116){   // the key hit is not F5
			return true;
		}else{
			console.log("Cannot refresh");  // the key hit is F5
			return false;
		}
	});
});
function outputContentNewWindow(str){	// function to create a new page
	var w=window.open();
	$(w.document.body).html(str);
}
var strOut="";		// all text in notes div
var newPosX=$(".note").position().left+$(".note").width();
var newPosY=$(".note").position().top;
  $(document).ready(
  function(){
	  $("#add").click(
		function(){
			var $newDiv=$('<div class="note draggable"><textarea></textarea></div>');
			$("body").append($newDiv);
			$newDiv.css(	// offset the position of new added note div
				{
					top:newPosY+"px",
					left:newPosX+"px"
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
			newPosX=$(".note:last").position().left+$(".note:last").width();
			newPosY=$(".note:last").position().top;
			if(newPosX+$(".note").width()>$(document).width()){
				newPosY=$(".note:last").position().top+$(".note:last").height();
				newPosX=8;
			}
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
			  strOut=strOut.replace(/\n/g, "<br />");  // replace \n with </br>
			  outputContentNewWindow(strOut);
		  }
	  );
	  $("#removeAll").click(		// remove all the notes
		  function(){
			  if(confirm("Are you sure to delete all notes?")) {
				  $(".note").remove();
				  newPosX=8;
				  newPosY=29;
			  }
		  }
	  );
  }
  	);