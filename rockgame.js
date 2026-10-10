rockgame()
function rockgame() {    

let compscore = 0;
let humscore = 0;
 for(let i = 1; i <= 5; i++ ){   
function comptake() {
    let comp = Math.random();
   if( comp < 0.33) {
       return "rock";
   }
  else if( comp < 0.66) {
       return "paper";
   }
   else {
       return "scissors";
   }
}
function humtake() {
   const comp = comptake();
   let hum = prompt("rock,paper or scissors").trim().toLowerCase();
   if( hum === comp) {
       alert("round#"+i+":"+"computer choose_:"+comp+
           "__draw");
   }
  else if( hum === "rock" && comp === "paper") {
  compscore++;
       alert("round#"+i+":"+"computer choose-:"+comp+
           "__computer win"+"!"+"CPU score:"+ compscore);
   }
  else if( hum === "rock" && comp === "scissors") {
  humscore++;
      alert("round#"+i+":"+"computer choose_:"+comp+
          "__human win"+"!"+"your score:"+ humscore);  
   }
  else if( hum === "paper" && comp === "rock") {
  humscore++;
       alert("round#"+i+":"+"computer choose_:"+comp+
           "__human win"+"!"+"your score:"+ humscore); 
   }
  else if ( hum === "paper" && comp === "scissors") {
  compscore++;
       alert("round#"+i+":"+"computer choose_:"+comp+
           "__computer win!"+"CPU score:"+ compscore);
   }
  else if( hum === "scissors" && comp === "rock") {
  compscore++;
      alert("round#"+i+":"+"computer choose_:"+comp+
          "__computer win!"+"CPU score:"+ compscore);
  }
  else if( hum === "scissors" && comp === "paper") {
  humscore++;
      alert("round#"+i+":"+"computer choose_:"+comp+
          "__human win!"+"your score:"+ humscore);
  }
   else {
       alert("round#"+i+":"+"wrong input");
   }
  }
humtake()
}
if( compscore === humscore) {
    alert("it's a draw!\n"+
          humscore +":"+ compscore);
}
else if( compscore < humscore) {
    alert("you win\n"+
          humscore +":"+ compscore);
}
else {
    alert("computer win\n"+
          humscore +":"+ compscore);
  }

let playagain = confirm("Do you want to play again?");
if( playagain === true) {
    rockgame()
  }
 }