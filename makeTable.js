$(document).ready(function() {
	makeHTMLTable();
	$('table').eq(0).DataTable();
});

function makeHTMLTable(){
	
	txt = localStorage.getItem("stades");
	obj = JSON.parse(txt);
	HTML = "";
	
	stadiumCount = countStadiums(obj);
	
	//alert("runngin");
	
	for(i = 0; i < stadiumCount; i++){
		stadiumX = getNextStadium(obj, i); 
		HTML += makeTR(stadiumX);
	}
	
	//alert(HTML);
	addHTMLToTable(HTML);
	
}

function getNextStadium(obj, i){
	//alert(obj.data[i].nom);
	return obj.data[i];
}

function makeTR(stadiumX){
	txt = "<TR>";
	txt += "<TD>" + stadiumX.nom + "</TD>";
	txt += "<TD>" + stadiumX.capacite + "</TD>";
	txt += "</TR>";
	return txt;
}

function addHTMLToTable(HTML){
	$("thead").after(HTML);
}

function countStadiums(obj){
	//alert(JSON.stringify(localStorage.getItem("stades")));
	//alert(obj.data.length);
	return obj.data.length;;
}

/*
 	obj = {};
	obj.nom = stadeXName;
	obj.capacite = capaciteX;
	obj.acces = accesX;
	obj.environnement = environnementX;
 */
