
var myArray = [1,2,3,8,6,4];

var arrays = [];

var objects = {
	violets : "blue",
	roses : "red"
};


var name = "chris", name2 = "roman";

var my_global_data;

var myObjects = [
	{"type" : "roses", "color" : "red"},
	{"type" : "violets", "color" : "blue"}
];



$(document).ready(function() {
     
    $.getJSON( "data/unemployment_us.json", function(data) {
    	my_global_data = data;
    	drawChart(data);
   	});

    
});



function drawChart(mydata) {

	$.each(mydata, function(i, item) {

		var unemploymentPct = item.val *30;
		var mycolor = "blue";

		if(item.month === "Jan"){
			//do these things
			mycolor = "green";
		} else if(item.month === "Apr" || item.month === "Mar"){
			mycolor = "orange";
		} 

		if(item.val == null){
			$(".chart").append(
			"This hasn't happened yet"
			);
		}

		$(".chart").append(
			"<div class='bar' n='"+i+"' style='height: "+unemploymentPct+"px;background-color:"+mycolor+"; left: "+i+"px'></div>"
			);
		
	});

	/*
	$('.bar').on('mouseover',function(e){

		//console.log(this)
		$('.bar').css('height','10px')
	
		var thisnum = $(this).attr('n');

		console.log(my_global_data[thisnum])
		$(this).css('height','100px')

	})
	*/



}







