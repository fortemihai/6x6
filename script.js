
window.addEventListener("load",loadListeners);

let correct_answer_counter=0;
let wrong_answer_counter=0;

function loadListeners()
{
	// add some listeners for enter in the input screen or pressing the button
	document.getElementById("submitButton").addEventListener("click",verifyResult);
	document.getElementById("resultInput").addEventListener("keypress",function(event)
		{
			if(event.key==="Enter")
			{
			event.preventDefault();
			document.getElementById("submitButton").click();
			}
		});
}

function loadRandomNumber()
{
let max=9;
let min=1;
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function verifyResult()
{
	let user_response=document.getElementById("resultInput").value;
	let actual_result=document.getElementById("firstOperandWrapper").innerHTML*document.getElementById("secondOperandWrapper").innerHTML;
	document.getElementById("contentWrapper").style.display="none"; // hide content
	document.getElementById("counterWrapper").style.display="none"; // hide counter
	document.getElementById("resultVerdictWrapper").style.display="inline-block"; // display the result verdict wrapper
	if(user_response==actual_result)
		{
			document.getElementById("resultVerdictWrapper").style.color="green"; // correct response so colour is green
			document.getElementById("resultVerdictWrapper").innerHTML="Correct asnwer.";
			correct_answer_counter++;
			var audio = new Audio('https://fortemihai.github.io/6x6_en/correct.mp3');
			audio.volume=0.2;
			audio.play();
			setTimeout(returnToNormalDisplay,5000);
		}
	else
		{
			document.getElementById("resultVerdictWrapper").style.color="white"; // correct response so colour is green
			document.getElementById("resultVerdictWrapper").innerHTML="Wrong answer!";
			document.getElementById("resultVerdictWrapper").innerHTML+="<br>";
			document.getElementById("resultVerdictWrapper").innerHTML+="The correct answer was:";
			document.getElementById("resultVerdictWrapper").innerHTML+="<span style='color:red'>"+actual_result+"</span>"
			wrong_answer_counter++;
			var audio = new Audio('https://fortemihai.github.io/6x6_en/wrong.mp3');
			audio.volume=0.2;
			audio.play();
			setTimeout(returnToNormalDisplay,5000);
		}
}

function returnToNormalDisplay()
{
	document.getElementById("contentWrapper").style.display="inline-block"; // restore content
	document.getElementById("resultVerdictWrapper").style.display="none"; // hide the result verdict wrapper
	document.getElementById("firstOperandWrapper").innerHTML=loadRandomNumber(); // reload the numbers
	document.getElementById("secondOperandWrapper").innerHTML=loadRandomNumber();
	document.getElementById("resultInput").value=""; // clear previous input
	document.getElementById("counterWrapper").style.display="inline"; // display the counter
	document.getElementById("counterWrapper").innerHTML="Correct answers: <span style='color:green'>"+correct_answer_counter+"</span>"// update the correct/wrong counters
	document.getElementById("counterWrapper").innerHTML+="<br>";
	document.getElementById("counterWrapper").innerHTML+="Wrong answers: <span style='color:red'>"+wrong_answer_counter+"</span>"
	document.getElementById("firstOperandWrapper").innerHTML=loadRandomNumber();
	document.getElementById("secondOperandWrapper").innerHTML=loadRandomNumber();
}	