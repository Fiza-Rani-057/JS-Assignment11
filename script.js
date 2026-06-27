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


