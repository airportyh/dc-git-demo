var word = "box";
var wordArray = word.split('');
var myArray = ["", "", ""];
var guess = "";
for(var i = 0; i < 5; i++) {
    if(i == 0) {
      guess = prompt("Enter a letter");
    } else {
      guess = prompt("Keep Guessing!");
    }

    for(var j = 0; j < wordArray.length; j++) {
      if(guess && guess.toLowerCase() === wordArray[j].toLowerCase()) {
        myArray[j] = guess;
      }
    }

    console.log(myArray);
    if(myArray.join("").toLowerCase() === word) {
      alert("You won!")
      break;
    } else if( i === 4 && myArray.join("").toLowerCase() !== word) {
      alert("Try again!");
    }
}
