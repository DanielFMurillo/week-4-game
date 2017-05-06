



var wins = 0;
var losses = 0;
// var randomNumber = math.random();




randomNumber();
display();

function display(){
	var winsP = document.getElementById("wins");
	var lossesP = document.getElementById("losses");
	// var randP = document.getElementById("rand")
	winsP.innerHTML = wins;
	lossesP.innerHTML = losses;
	// randP.innerHTML = randomNumber;


}


function win(){
	wins++
}

function lose(){
	losses++
}

function randomNumber(){
	document.getElementById("rand").innerHTML = Math.floor((Math.random() * 100) +1);
}

$("#jewel1,#jewel2,#jewel3,#jewel4").on("click",function(){
	var value = $(this).attr("value");
	// alert("handler clicked.");
	



})

// console.log(#value)
// $("#jewel2").on("click",function(){
// 	alert("Handler for .click() called.")


// })
// $("#jewel3").on("click",function(){
// 	alert("Handler for .click() called.")


// })
// $("#jewel4").on("click",function(){
// 	alert("Handler for .click() called.")






// display();
// console.log(display)


