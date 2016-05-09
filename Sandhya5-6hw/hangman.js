debugger

  var number = 42;
  var i = 0;
  while ( i<= 7){
    var guess = Number(prompt("Enter a number between 1 and 100."));
    if (guess === number){
      console.log("You are correct")
      alert("Woohoo! You win.")
      break;
    }
     else if (number < guess){
      console.log("You are too high.")
    }
    else{
      console.log("You are too low.");
    }
    if (i>=7){
    alert("Try again :)");
    }
    i++;
  }
