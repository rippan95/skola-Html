// JavaScript Dice Game by Coding Commanders 
// Full tutorials at codingcommanders.com/dice
// Tweet me: @codingcommander
var score=0;
var side_alt=["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
function throwdice(){
	 //create a random integer between 1 and 6 
	 var rand1=Math.round(Math.random()*5) + 1;
	 var rand2=Math.round(Math.random()*5) + 1;
	 var rand3=Math.round(Math.random()*5) + 1;
	 var rand4=Math.round(Math.random()*5) + 1;

	 // Set Image src 
	 document.getElementById("mydice1").src="images/d" + rand1 + ".png";
	 document.getElementById("mydice2").src="images/d" + rand2 + ".png";
	 document.getElementById("hisdice1").src="images/e" + rand3 + ".png";
	 document.getElementById("hisdice2").src="images/e" + rand4 + ".png";

	 // Set Image alt
	 document.getElementById("mydice1").alt=side_alt[rand1];
	 document.getElementById("mydice2").alt=side_alt[rand2];
	 document.getElementById("hisdice1").alt=side_alt[rand3];
	 document.getElementById("hisdice2").alt=side_alt[rand4];

	 who_won(rand1,rand2,rand3,rand4);
}

// Set appropriate gif: winner, looser, || tie 
function who_won(rand1,rand2,rand3,rand4){
	 let player_points=rand1 + rand2 + 2; // player's points 
	 let enemy_points=rand3 + rand4 + 2; // enemy's points 
	 let giffy=winner(player_points,enemy_points); 
	 document.getElementById("message").src="images/" + giffy; 
	 document.getElementById("message").alt=giffy;
	 document.getElementById("score").value=score;
}

function winner(player, enemy){
	 if (player < enemy){// if player looses
		 score=score-1; // subtract point from score
		 return "oof-looser.gif"; // looser gif name
	}
	 if (enemy < player){// if player wins
		 score=score + 1; // add a point to score
		 return "twerk-win.gif"; // winner gif name
	}
	 if (player==enemy){// if tie
		 return "equal.gif"; // tie gif name
	}
}

/* Version 2 Code Here */
// ol element containing high scores
const List=document.getElementById("highscores");
// game submition form
const myform=document.getElementById("myform");
// element displaying error messages
const Errors=document.getElementById("error");

// Function to Reset Score and High Score List
function resetForm (){
	 // delete li elements holding high score data
	 while (List.hasChildNodes()){
		 List.removeChild(List.firstChild);
	}
	 // fetch scores.json and create new li elements holding the data
	 get_scores(list_scores);
	 // set score back to 0
	 document.getElementById("score").value=0;
	 score=0;
}

// code to execute when
myform.addEventListener("submit", function (event){// listen for the submit button to be clicked
	 event.preventDefault(); // don't reload page
	 var tenth_score=document.getElementById("lowscore").value; // lowest high score
	 var this_score=document.getElementById("score").value; // player's current score

	 if (this_score > tenth_score){// if the player's current score > the lowest high score
		 document.getElementById("message").src="images/highscore.gif"; // change to highscore gif
		 document.getElementById("message").alt="You made it on the highscore list!!!"; // high score gif alt
	}
	 else{// if the player did not make it on the highscore list
		 document.getElementById("message").src="images/good-luck.gif"; // change to starting good luck gif
		 document.getElementById("message").alt="Good luck chump!"; // good luck alt text
	}
	 //Form Data Object (to send to PHP): contains the players name and score
	 var formData=new FormData(this);
	 formData.append("score", score);

	 // fetch request
	 fetch ("dice.php",{// sending to dice.php
		 method: "post", // using method post
		 body: formData // we are sending formData
	})
		 .then (function (response){
			 return response.text(); // Get the text contents
		})
		 .then(function(text){
			 resetForm(); // execute resetForm function
			 console.log(text); // print the text contents to console
		})
		 .catch(function (err){// If there is an error
			 Errors.innerHTML=err; // display error in errors element
		})
});

// Function to get the high score JSON
function get_scores (callback){
	 let file="scores.json";// file location
	 fetch(file,{cache: "no-cache"}) // fetch
		 // If the response isn OK
 		 .then(function(response){
 			 if (response.status !==200){
 				 Errors.innerHTML=response.status;
 			}
 		 // If the response is OK
 		 response.json().then(function(data){
 			 let scores=JSON.stringify(data);
 			 console.log(data);
 			 callback (scores);
 		})
 	})
 	// If there is an error
 	.catch(function(err){
 		 Errors.innerHTML=err;
 	});
}

//Function to display high score list
 var list_scores=function (scores){
 	 let object=JSON.parse(scores);
 	 let lowest_score=object[9].score;
 	 document.getElementById("lowscore").value=lowest_score;
 	 for (let i=0; i<object.length; i++){
 		 let li=document.createElement("LI");
 		 let text=document.createTextNode(object[i].name + " ... " + object[i].score);
 		 li.appendChild(text);
 		 List.appendChild(li);
		 if (i===0){
			 li.setAttribute("class","top1");
		}
		 if (i===1){
			 li.setAttribute("class","top2");
		}
		 if (i===2){
					 li.setAttribute("class","top3");
		}
 	}
}