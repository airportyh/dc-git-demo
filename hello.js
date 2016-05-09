var num;
var  even;
for (var i = 0; i<100; i++){
  if (i % 2 !== 0 ){
    even = false;
  }
  else { even = true;
  }
}

## Multiple of Five?
for (var i=1; i<=100; i++){
  if(i%5 === 0){
    console.log(i + "is multiple of 5");
  }
  else{
    console.log(i + "is not multiple of 5")
  }
}

## Multiple of Five?
var i=1;
while (i <=100){
  if(i%5 === 0){
    console.log(i + "is multiple of 5");
  }
  else{
    console.log(i + "is not multiple of 5")
  }
  i++;
}

## Days of the Week
var day = 9;
  if (day === 0){
  	console.log("Sunday");
  }
  else if (day === 1){
  	console.log("Monday");
  }
  else if (day === 2){
  	console.log("Tuesday");
  }
  else if (day === 3){
  	console.log("Wednesday");
  }
  else if (day === 4){
  	console.log("Thursday");
  }
  else if (day === 5){
  	console.log("Friday");
  }
  else if (day === 6){
  	console.log("Saturday");
  }
  else if (day === 7){
  }
  else{"Not a day."}

## Work or Sleep In?
  var day = 9;
    if (day === 0){
    	console.log("Sleep in.");
    }
    else if (day === 1){
    	console.log("Go to work.");
    }
    else if (day === 2){
    	console.log("Go to work.");
    }
    else if (day === 3){
    	console.log("Go to work.");
    }
    else if (day === 4){
    	console.log("Go to work.");
    }
    else if (day === 5){
    	console.log("Go to work.");
    }
    else if (day === 6){
    	console.log("Sleep in.");
    }
    else if (day === 7){
    }
    else{console.log("Not a day.")}

## Odd or Even?
    for (var i = 0; i<100; i++){
  if (i % 2 !== 0 ){
    console.log("Odd");
  }
  else { console.log("Even");
  }
}


## 1 to 100
var i = 1;
while ( i <= 100){
  console.log(i);
  i++;
}

## Odd Numbers
var i;
for (i=1; i<= 100; i++){
  if(i%2 !==0){
    console.log(i);
  }
}

## Even Numbers
var i;
for (i=1; i<= 100; i++){
  if(i%2 ===0){
    console.log(i);
  }
}

## Even Numbers II
var total = 0;
var i;
for (i=1; i<= 100; i++){
  if(i%2 === 0){
    total+= i;
    console.log(total);
  }
}

var bill = 100;
var tip ;
var service = "fair";
if (service === "good"){
  tip = bill * 0.2;
}
else if (service === "fair") {
  tip = bill * .15;
}
else if (service === "bad"){
  tip = bill * 0.1;
}
else {console.log("Have a great day!")}

var i = 0;
while(i<9){
  console.log("*********")
i++;
}

var i = 0;
while (i<1){
  console.log("   *   ")
  console.log("  ***  ")
  console.log(" ***** ")
  console.log("*******")
i++;
}



for (var i = 1; i <= 100; i++){
   if ((i%3 === 0) || (i%5 === 0)
   console.log(i);
  }

  var num = 2;
  for (var i = 1; i <= 12; i++){
     var table = num * i;
    console.log("2 * " + i + " = " + table)
    }

    console.log("┏" + "━"  +"━" + "┓" )
    console.log("┃"+"   " + "┃")
    console.log("┃"  + "   "   + "┃")
    console.log("┗"+ "━" +"━"+"┛")



  ??  var row = "";
  for (var j = 0; j < 6; j++){
    for (var i = 0; i < 6; i++){
      row += "*";

      }
      console.log(row)
    }
