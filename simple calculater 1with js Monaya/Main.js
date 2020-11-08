/*global console, alert ,prompt*/
function calcaddme() {
	"use strict";
	var myInput1 = document.getElementById("input1").value,
		myInput2 = document.getElementById("input2").value,
		// myResults=document.getElementById('answer').innerHTML,
		myAnswer=document.getElementById('answer'),
		myResults= parseFloat(myInput1)+parseFloat(myInput2);
		if (!isNaN(myResults)) {
			myAnswer.innerHTML="The answer is : " + myResults;
		}
}

function calcsubme() {
	"use strict";
	var myInput1 = document.getElementById("input1").value,
		myInput2 = document.getElementById("input2").value,
		// myResults=document.getElementById('answer').innerHTML,
		myAnswer=document.getElementById('answer'),
		myResults = parseFloat(myInput1)-parseFloat(myInput2);
		if (!isNaN(myResults)) {
			myAnswer.innerHTML="The answer is : " + myResults;
		}
}
function calcmulme() {
	"use strict";
	var myInput1 = document.getElementById("input1").value,
		myInput2 = document.getElementById("input2").value,
		// myResults=document.getElementById('answer').innerHTML,
		myAnswer=document.getElementById('answer'),
		myResults= parseFloat(myInput1)*parseFloat(myInput2);
		if (!isNaN(myResults)) {
			myAnswer.innerHTML="The answer is : " + myResults;
		}
}

function calcdivme() {
	"use strict";
	var myInput1 = document.getElementById("input1").value,
		myInput2 = document.getElementById("input2").value,
		// myResults=document.getElementById('answer').innerHTML,
		myAnswer=document.getElementById('answer'),
		myResults = parseFloat(myInput1)/parseFloat(myInput2);
		if (!isNaN(myResults)) {
			myAnswer.innerHTML="The answer is : " + myResults;
		}
}
