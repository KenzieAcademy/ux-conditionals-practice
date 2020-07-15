/*
    Ternary Switch and Logic Practice

    Complete the Following Exercises.
*/

/*
Exercise One

Is it larger than 10?
*/

let number = 5;

// 1. Create an if statement where the number is greater than 10.
// If it is, then log "It is bigger than 10!" using console.log().

if (number > 10) {
    console.log("It is bigger than 10!")
} else { 
    console.log(false)
}


// 2. Change the number variable to something larger than 10, run your code and
// make sure it works.
let number1 = 13;
if (number1 > 10) {
    console.log("It is bigger than 10!")
} else { 
    console.log(false)
}
/*
---------------------------------------------------------------------------
Exercise Two

Determining a color
*/

// let color = "";
// 1. Pick either "blue", "red", or "green" and assign it to the color variable.
let color = "blue";
// 2. Create an if statement, if the color is "blue", then log "The sky is blue." using console.log
if ( color == "blue" ) {
    console.log("The sky is blue.")
}

// 3. Create an else if statement, and if the color is "red" then log "The flower is red."
let color1 = "red";

if ( color1 == "red" ) {
    console.log("The flower is red.")
  } else if ( color1 == "blue") {
    console.log("The flower is blue.")
  } else {
    console.log("The flower is yellow polka dots!")
  }

// 4. create another else if statement where if the color is "green" then log "The Leaf is green."

  let color2 = "green";

if ( color2 == "red" ) {
    console.log("The flower is red.")
  } else if ( color2 == "green") {
    console.log("The Leaf is green.")
  } else {
    console.log("The flower is yellow polka dots!")
  }
// 5. Finally, create an else statement and log "It is a different color".

let color3 = "blue";

if ( color3 == "red" ) {
    console.log("The flower is red.")
  } else if ( color3 == "green") {
    console.log("The Leaf is green.")
  } else {
    console.log("It is a different color, possibly yellow polka dots!")
  }
// 6. Test your code! Change the value of the color variable to different colors and run your code.
// The correct message should log to the console.
let color4 = "yellow";

if ( color4 == "red" ) {
    console.log("The flower is red.")
  } else if ( color4 == "green") {
    console.log("The Leaf is green.")
  } else {
    console.log("It is a different color, possibly yellow polka dots!")
  }
/*
---------------------------------------------------------------------------
Exercise Three

Create conditional statements to create the following results.

If the number is greater than 10, and the number is less than 20, then print "Between 10 and 20!" *./
If the number is greater than or equal to 20, then print "20 or greater!"
If the number is exactly 16, then print "16!"
If the number is less than or equal to 10, print "10 or less!";

Hint: You may need to rearrange your conditions to make this easy!
A good practice is to take the most restrictive condition and check it first (like 16),
then work your way to the most broad condition ("Some other number").

Hint Two: You can either do this with nested if statements, or you can do it with 
a chain of if else statements, some of those just might need multible conditions (like: if (a && b) )
*/

// let number = 12;
// Your code here.
let number2 = "15";

if ( number2 > 10 && number2 < 20 ) {
  console.log("Between 10 and 20!")
}

  let number3 = 22;

if ( number3 >= 20 ) {
  console.log("20 or greater!")
}

let number4 = 16;

if ( number4 = 16 ) {
  console.log("16!")
}

let number5 = 9;

if ( number5 <= 10 ) {
  console.log("10 or less!")
}