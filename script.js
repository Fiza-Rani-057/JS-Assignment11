//  Question 1

 document.write( "<h1>" + "Question 1" + "<br>"  + "</h1>");

  var number = parseFloat(prompt("Enter a positive number"));
  var roundoffNumber = Math.round(number);
  var ceilValue = Math.ceil(number);
  var floorValue = Math.floor(number);

  document.write("Number:" + number + "<br>");
  document.write("Round off Value:" + roundoffNumber + "<br>");
  document.write("Ceil Value is:" + ceilValue + "<br>");
  document.write("Floor Value is:" + floorValue + "<br>");

//  Question 2

  document.write( "<h1>" + "Question 2" + "<br>"  + "</h1>");

  var negNumber = parseFloat(prompt("Enter a negative number"));
  var roundNumber = Math.round(negNumber);
  var ceilNumber = Math.ceil(negNumber);
  var floorNumber = Math.floor(negNumber);

  document.write("Number:" + negNumber + "<br>");
  document.write("Round off Value:" + roundNumber + "<br>");
  document.write("Ceil Value is:" + ceilNumber + "<br>");
  document.write("Floor Value is:" + floorNumber + "<br>");

//   Question 3

 document.write( "<h1>" + "Question 3" + "<br>"  + "</h1>");

 var value = parseFloat(prompt("Enter a number"));
 var absValue = Math.abs(value);

 document.write("The absolute Value of " + value + " is: " + absValue); 


//  Question 4

  document.write( "<h1>" + "Question 4" + "<br>"  + "</h1>");

  var dice1 = Math.floor(Math.random() *6) +1;
  var dice2 = Math.floor(Math.random() *6 ) +1;

  document.write("Random dice value " + dice1 + "<br>")
  document.write("Random dice value " + dice2 );

//   Question 5

 document.write( "<h1>" + "Question 5" + "<br>"  + "</h1>");

 var coin = Math.floor(Math.random() *2) +1;
 
  if(coin === 1){
    document.write(coin + "<br>");
    document.write("Random coin Value: " + coin);
  }
  else{
    document.write(coin + "<br>");
    document.write("Random Coin Value: " + coin);
  }

//   Question 6 
 
 document.write( "<h1>" + "Question 6" + "<br>"  + "</h1>");

 var round = Math.floor(Math.random() *100) +1;

 document.write("Random Numbers bettween 1 and 100 are:" + round);

//  Question 7 

  document.write( "<h1>" + "Question 7" + "<br>"  + "</h1>");

  var weight = prompt("Enter your Weight in kilograms");
  var userWeight = parseFloat(weight);

  document.write("The weight of the user is: " + userWeight);


//   Question 8 

 document.write( "<h1>" + "Question 8" + "<br>"  + "</h1>");

 var secretNumber = 8;
  var promptNumber = parseInt(prompt( "Guess the secret number"));

if (promptNumber === secretNumber){
   alert("Congrats! you find the secret number");
}
 else{
    alert("Try again");
 }
  
 document.write("Alert Message");
