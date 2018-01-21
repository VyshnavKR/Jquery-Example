$(document).ready(function(){
		$.ajax({
			type: 'GET',
			url: 'http://api.railwayapi.com/v2/between/source/tcr/dest/cbe/date/21-12-2017/apikey/2kx9dne5je/',
			dataType: 'json',
			success: function (data){alert('success');},
			error: function (xhr,ajaxOptions,throwError){alert('error');}			
		}).done(function(data){
			console.log(data);
			renderHtml(data);
		});	
});

function renderHtml(data){
	var htmlString = "";
	for(i=1; i<data.trains.length; i++){
		htmlString += "<br>"+ "<p>" + i + ". Train Name: " + data.trains[i].name + "</p>" 
		+ "<p>" + "Train Number: " +  data.trains[i].number + "</p>"
		+ "<p>" + "Departure Time: " +  data.trains[i].src_departure_time + "</p>"
		+ "<p>" + "Arrival Time: " +  data.trains[i].dest_arrival_time + "</p>" 
		+ "<p>" + "Total Travle time: " + data.trains[i].travel_time + "</p>";
	}
	$("#container").append(htmlString);
}
