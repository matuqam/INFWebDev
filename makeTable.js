$(document).ready(function() {
	Stades = JSON.parse(localStorage.getItem("stades")).data;
	$("#dataTable").DataTable({
			"data": Stades,
    "columns": [
        { "data": "nom" },
        { "data": "dateService"}   
    ]
	});
});


