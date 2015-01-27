// main control part for the note behavior
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
var iniX=8;	// default left position for the first note
var iniY=29;	// default top position for the first note
var newPosX=iniX;
var newPosY=iniY;
  $(document).ready(
  function(){
	  $("button").attr("tabIndex",-1);  // remove navigator buttons from tabindex
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
			$exit.attr('tabindex',-1);	// remove exit button from tabindex
			$newDiv.append($exit);
			$(".exit").click(    // click to delete this note
				function(){
					$(this).parent(".note").remove();
				}
			);
			newPosX=$(".note:last").position().left+$(".note:last").width()-14;
			newPosY=$(".note:last").position().top;
			if(newPosX+$(".note").width()>$(document).width()){
				newPosY=$(".note:last").position().top+$(".note:last").height();
				newPosX=8;
			}
			$( ".draggable" ).draggable();
		});
	  $('#add').click();	// add the first note
	  $("#output").click(
		  // output all textarea text to console
		  function() {
			  console.clear();
			  strOut="";
			  if($("textarea").length===0) return;
			  $("textarea").each(
				function(index){
					//console.log($(this).val());
					if($(this).val()) {	// if the value is not empty
						strOut += $(this).val();
						strOut += "\n<<<<<<<<<<\n";   // separate text between note
					}
				}
			  );
			  if(strOut==='') return;
			  strOut=strOut.replace(/\n/g, "<br />");  // replace \n with </br>
			  outputContentNewWindow(strOut);
		  }
	  );
	  $("#removeAll").click(		// remove all the notes
		  function(){
			  if($(".note").length===0){	// check if no elements is selected
				  return;
			  }
			  if(confirm("Are you sure to delete all notes?")) {
				  $(".note").remove();
				  newPosX=iniX;
				  newPosY=iniY;
			  }
		  }
	  );
	  $("#removeEmpty").click(	// remove empty notes
		function(){
			if($(".note").length===0){	// check if no elements is selected
				return;
			}
			$(".note").each(
				function(){
					if(!$(this).find("textarea").val()){
						$(this).remove();
					}
				}
			);
		}
	  );
	  $("#arrange").click(	// remove empty notes
		  function(){
			  if($(".note").length===0){	// check if no elements is selected
				  return;
			  }
			  newPosX=iniX;
			  newPosY=iniY;
			  $(".note").each(
				  function(){
					  $(this).css(
						  {
							  top:newPosY+"px",
							  left:newPosX+"px"
						  }
					  );
					  newPosX+=($(".note:last").width()-14);
					  if(newPosX+$(".note").width()>$(document).width()){
						  newPosY+=$(".note:last").height();
						  newPosX=iniX;
					  }
				  }
			  );
		  }
	  );
  }
  	);