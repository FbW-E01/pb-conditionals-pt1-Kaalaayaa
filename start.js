// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
const age1 = 58;
const age2 = 17;

if(age1 >= 50 && age1 <= 99 || age2 >= 50 && age2 <= 99){
    console.log(true);
} else{
    console.log(false);
}

((age1 >= 50 && age1 <= 99) || (age2 >= 50 && age2 <= 99)) ? console.log(true) : console.log(false);

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
const age3 = 79;

if(age1 >= 50 && age1 <= 99 || age2 >= 50 && age2 <= 99 || age3 >= 50 && age3 <= 99){
    console.log(true);
} else{
    console.log(false);
}
((age1 >= 50 && age1 <= 99) || (age2 >= 50 && age2 <= 99) || (age3 >= 50 && age3 <= 99)) ? console.log(true) : console.log(false);


// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
const a = 79;
const b = 10;
const c = 78;

if ( a > b && a > c){
    console.log(a);
} else if ( b > a && b > c){
    console.log(b);
} else{
    console.log(c);
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
const givenString = "thon"
const newString = "Py" + givenString;

if(givenString[0] == "P" && givenString[1] == "y"){
    console.log(givenString);
} else{
    console.log(newString);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
if((a + b) >= 50 && (a + b) <= 80){
    console.log(65);
} else {
    console.log(80);
}

((a + b >= 50 && a + b <= 80)) ? console.log(65) : console.log(80);

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
const d = 0;
const e = 8;

if((d + e === 8) || (d - e === 8 || e - d === 8)){
    console.log(true);
} else{
    console.log(false);
}

((d + e === 8) || (d - e === 8 || e - d === 8)) ? console.log(true) : console.log(false);


// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
const f = 8;
const g = 15;

if((f === 15 || g === 15) || (f + g === 15)){
    console.log(true);
} else{
    console.log(false);
}

((f === 15 || g === 15)|| (f + g === 15)) ? console.log(true) : console.log(false);

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let numFive = 14;
let numSix = 23;
if ((numFive/7 === 2) || (numSix/7 === 2)) {
    console.log("It's obviously true");
}
else {
    console.log("That couldn't work");
}
// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
const h = 7;
const i = 7;
if (h === i){
    console.log((i + h)*3);
}
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
const specifiednumber = 20;
const difference = specifiednumber - 19;
if((specifiednumber > 19)){
    console.log(difference*2);
}

(specifiednumber > 19) ? console.log(difference*2): console.log();
// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 
const firstName = "Kalaya";
const age = 26;
if( age < 13){
    console.log(`${firstName} is a child`)
} else if (age >= 13 && age<= 20){
    console.log(`${firstName} is a teenager`)
} else if (age >= 20 && age<= 30){
    console.log(`${firstName} is a young adult`)
} else {
    console.log(`${firstName} is an adult`)
}
// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 