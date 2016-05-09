// HangmanWord
// var word = "box";
// var lettersArray = word.split("");
// var matchArray = [];
// var k = 0;
// while (k <= 5) {
//     var guess = prompt("Guess a letter");
//
//     for (i = 0; i <= lettersArray.length; i++) {
//         //for (var j = 0; j <= guess.length; j++) {
//             if (guess === lettersArray[i]) {
//                     matchArray[i] = true;
//                     console.log(lettersArray);
//             } else {
//                 matchArray[i] = false;
//                 prompt("Keep Guessing");
//             }
//           }
//         //}
//         var won = true;
//         for(var m = 0; m < matchArray.length; m++) {
//           if (matchArray[i] == false || matchArray.length != lettersArray.length) {
//             won = false;
//           }
//         }
//
//         if (won) {
//           alert("You are a winner");
//         }
//         else if (k >= 5) {
//           alert("Try again");
//         }
//   k++;
// }


//
// Prints rows of stars in ascending order:
var row = "";
for (var j = 0; j < 6; j++){
for (var i = 0; i < 6; i++){
  row += "*";
  console.log(row)
  }
}


var str =  "The Caesar cipher is one of the earliest known and simplest ciphers." ;
var stringChar = str.char();

var count = 0;
for (var i = 0; i <= str.length; i++){
   if (str === "the"){
     count += 1
   }
}

var str = "hello world!";
var str1 = str.toUpperCase();
console.log(str1);

var str = "Hello World";
var newStr = "";
for(var i = str.length - 1; i >=0; i--){
  str += str[i];
  console.log(str)
}



var num = [2, 45, 6, 23];
var newArray = [];
for (var i = 0; i < num.length; i++) {
  var largest = num[i];
	if (num[i] >= num[i]){
		 var myArray = newArray.push(num[i]);
	}
	}
