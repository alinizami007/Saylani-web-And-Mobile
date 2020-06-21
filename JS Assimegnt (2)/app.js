
                // <----- 21-25 ------>

//   <----- 1. take 2 input first name , last name, n merge in full name --->
// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullName = `${fname} ${lname}` ;
// alert("Welcome! " + fullName);




// <---- 2 .Favourite mobile model ---->

// var fmobile = prompt("enter your favourite mobile model");
// var lstring = fmobile.length ;
// document.write("My favourite mobile model is " + fmobile + "<br>");
// document.write("Length of string is: " + lstring);


//  <----- 3.find index of n in pakistani ---->

// var name = "Pakistani" ;
// var nindex = name.indexOf("n");
// document.write("String is:  Pakistani" + "<br>");
// document.write("index of n is: " + nindex);


// <----- 4. find last index of letter l ----->

// var name = "Hello world" ;
// var nindex = name.lastIndexOf("l");
// document.write("String is:  Hello world " + "<br>");
// document.write("Last index of letter l is: " + nindex);


// < ----- 5. find the character at index 3 ----->

// var name = "Pakistani" ;
// var char = name.charAt(3);
// document.write(`String is: ${name}<br>`);
// document.write(`Character at index 3 is: ${char}<br>`);


// // <---- 6 .concatensate ---->

// var fname = prompt("Enter your first name");
// var lname = prompt("Enter your last name");
// var fullName = `${fname} ${lname}` ;
// alert(`Welcome! ${fullName}`);


// // <-----  7. after replacement -----> 

// var name = "Hyderabad" ;
// var nname = name.slice(5);
// var newn = `Islam${nname}`;
// document.write(`City : ${name}<br>` );
// document.write(`after replacement : ${newn}<br>` );


// // <---- 8. replace and with & ----->


// var message = "Ali and Sami are best friends.They play cricket and football together.";

// for (let i = 0; i < message.length; i++) {
//     var nmessage = message.replace(/and/g , "&");
// alert(i + nmessage); 
// document.write(nmessage);   
//     break;
// }


// // <---- 9. value n type ----->


// var value = "472";
// document.write(`Value: ${value}<br>`);
// document.write("Type: " + typeof(value) + "<br>");
// document.write("Value: " + value + "<br>");
// value = +(value);
// document.write(`Type: ${typeof (value)}<br>`);




// // <----- 10. to upper case ----->

// var input = prompt("Enter any word");
// document.write(`User input: ${input}<br>`);
// input = input.toUpperCase();
// document.write(`UPPER CASE : ${input}<br>`);


// // <---- 11.show user input in title case ------>

// var input = prompt("Enter any word");
// for (let i = 0; i < input.length; i++) {
//     if (input[0] !== " "){
//    var  ninput = input.slice(0, 1);
// //    alert(ninput);
//    ninput = ninput.toUpperCase();
//    input = input.slice(1);
// //    alert(input);
//    var input = ninput + input ;
// //    alert(input);
//    break;
//   }

  
//   }

//   for (let i = 0; i < input.length; i++) {
//     //   alert(input + " second loop" + i);
//       if (input[i] == " "){
//         var  ninput = input.slice(i, i+2);
//         // alert( "sexond loop"+ ninput + i);
//         ninput = ninput.toUpperCase();
//         input = input.slice(0, i) + ninput + input.slice(i+2);
//         // alert("sexond loop " + input + i ); 
        
         
//        }
      
//   }
//   document.write(input);







//   // <----- 12. convert 35.36 to 3536 ----->

//   var input = 35.36;
// input = input.toString();
// alert(input);
//   for (let i = 0; i < input.length; i++) {
      
//       if (input[i] == "."){
        
//         input = input.slice(0, i)  + input.slice(i+1);
//         alert(`second loop ${input}`  );        
//        }
//   }
//   document.write(input)





  
// // <----- 13. enter only valid char ------>

// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   for( i = 0; i < x.length; i++){
//   if (x.charAt(i) == "!" || x.charAt(i) == "," || x.charAt(i) == "."
//   || x.charAt(i) == "@") {
//     alert("enter valid name");
//     return false;
//   }
//   }
// }






// // <----- 14. user input searching in an array ---->

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;

// var uinput = prompt("Welcome to ABC Bakery, what do you want to order sir/madam");
// uinput = uinput.toLowerCase();


// for (let i = 0; i < A.length; i++) {
  
  
//   if (A.indexOf(uinput) >= 0) {
//     alert(`${uinput}available at index ${i}in our Bakery`);
    
//   }
//   else {
//     alert(`We are sorry ${uinput} is not available in our bakery`);
//   }
//   break;
// } 





// // <---- 15. ENTER password with validation min 6 char + alphanumeric + first char not number ----->

// var upassword = prompt("Please enter password", "password should be alphanumeric, at least 6 character long, should not start with number");
// var illegalchar = true;
// if ( !isNaN(upassword.charAt(0)) == false){
//   illegalchar = false;
//   // var letters = /^[0-9a-zA-Z]+$/;
//   var letters1 = /^[a-zA-Z]+$/;
//   var letters2 = /^[0-9]+$/;

//   alert("first char is not a number");
//   alert(typeof(upassword));
//   for (let i = 0; i < upassword.length; i++) {
   

// // if((upassword.charAt(i)).match(letters1) ) {
// if ( upassword.charAt(i).match(letters2) && upassword.length >= 6) {
//   alert("number found and its length is minimum 6" );

//   for (let j = 0; j < upassword.length; j++) {
//     if ((upassword.charAt(j)).match(letters1)) {
//       alert("character found");
//       illegalchar = true; 

//        }
    
//       }

//     }  
//   }



//    if ( illegalchar === true){
//      alert("password is valid");
//      document.write(`Entered password : ${upassword}<br>`)
//      document.write(`Password is valid <br>`);
//    }
//    else {
//      illegalchar = false;
//      alert("Sorry password is not valid , okease enter a valid password");
//      document.write(`Entered password : ${upassword}<br>`)
//      document.write(`Password is invalid because first character is not number OR it does not contain alphabet n numbers OR its not minimum 6 characters long <br>`);
//    }
   


//  }

//   else {
//     alert("Sorry password is not valid , okease enter a valid password");
//     document.write(`Entered password : ${upassword}<br>`)
//      document.write("Password is invalid" + "<br>");
//   }
  





//   // <---- 16. split into array ---->

//   var university = "University of Karachi" ;
// var newUniversity = university.split("");
// document.write(newUniversity);
// for (let i = 0; i < newUniversity.length; i++) {

// document.write(newUniversity[i] + "<br>");  
// }





// // <---- 17. last index ----->

// var userinput = prompt("Please input Pakistan");
// document.write("User input : " + userinput + "<br>");
// document.write("Last character : " + userinput.charAt(userinput.length -1) + "<br>");



// //  <----- 18. occurence of " the"
// //  You have a string 
// //  “The quick brown fox jumps over the lazy dog”. 
// //  Write a program to count number of occurrences of word 
// //  “the” in given string. ------->


// var Text = "The quick brown fox jumps over the lazy dog" ;
// var occurence = 0;
// alert(Text);
// for (let i = 0; i < Text.length; i++) {
//   if(Text.slice(i, i+3).toLowerCase() == "the"){
//     occurence = ++occurence ;
//     alert("occurence " + occurence);
    
//     alert("the found");
//   }

  
// }
// document.write( `Text ${Text}<br>`);
// document.write(`There are ${occurence}occurence (s)  of 'the' <br>`);




//chapter 21-25 completed at this point






// chapter 26-30 started


// // <---- 1. enter any number and round, ceil, floor ----->


// var number = +prompt("enter any number including fractional numbers");
// if ( number > 0 ){
// alert("value is positive");

// document.write(`number: ${number}<br>`);
// document.write("round off value: " + Math.round(number) + "<br>");
// document.write("floor value: " + Math.floor(number) + "<br>");
// document.write("ceil value: " + Math.ceil(number) + "<br>");
// }

// else {
//   alert("value is negative, please enter positive number");
// }





// // <----- 2. negative float value ------>

// var number = parseFloat(prompt("enter negative float value"));
// if (number < 0 && (number % 1 !== 0 ) ){
//   alert("number is negative and float value");
//   document.write(" number: " + number +"<br>");
//   document.write(`round off number : ${Math.round(number)}<br>`);
//   document.write(` ceil value of number : ${Math.ceil(number)}<br>`);
//   document.write(` Floor value : ${Math.floor(number)}<br>`);

// }

// else {
//   alert("number is invalid , please enter negative float value");
// }





// // <----- 3. absolute value ------>
// var number = +prompt("enter any number");

// if ( number < 0 ){
//   number = number* -1;
// document.write(` The absolute value of -${number} is ${number}`);  
// }

// else {
//   document.write(` The absolute value of ${number} is ${number}`);
// }



// // <---- 4. random dice value ----->

// document.write("<input onclick='dicefun()' type='button' value='Dice through'>");

// function   dicefun(){
//   // var randomnumber = prompt(" enter any number form 1 to 10");
//   var improvedNum = Math.random() * 10 + 1;
//   var newNum = Math.floor(improvedNum);
//   document.write(`Random dice value: ${newNum}`);
// }





// // <---- 5. random coin value ---->

// document.write("<input onclick='dicefun()' type='button' value='Coin toss'>");

// function   dicefun(){
//   // var randomnumber = prompt(" enter any number form 1 to 10");
//   var improvedNum = Math.random() * 2 + 1;
//   var newNum = Math.floor(improvedNum);
//   if ( newNum == 2){
//     document.write(`Random coin value : Heads ${newNum}`);

//   }

//   else {
//     document.write(`Random coin value : Tails ${newNum}`);

//   }
// }





// //<----- 6 . random number between 1 - 100 ----->

// document.write("<input onclick='dicefun()' type='button' value='Random number between 1-100'>");

// function   dicefun(){
//   // var randomnumber = prompt(" enter any number form 1 to 10");
//   var improvedNum = Math.random() * 100 + 1;
//   var newNum = Math.floor(improvedNum);
//   document.write(`Random number between 1 -100 is: ${newNum}`);

// }





// // <------ 7. user weight  ------> 

// var userweight = prompt("enter your weight");
// if (userweight % 1 == 0 ) {
//   userweight = parseInt(userweight);

//   document.write(`The weight of use is: ${userweight}kilograms<br>`);
//   document.write(`The weight of use is: ${Math.floor(userweight)}kilograms<br>`);

//   document.write(`The weight of use is: ${Math.round(userweight)}kilograms<br>`);

//   document.write(`The weight of use is: ${Math.ceil(userweight)}kilograms<br>`);

// }

// else {
//   userweight = parseFloat(userweight);
//   alert("else executed");
//   document.write(`The weight of use is: ${userweight}kilograms<br>`);
  
//   document.write(`The weight of use is: ${Math.floor(userweight)}kilograms<br>`);

//   document.write(`The weight of use is: ${Math.round(userweight)}kilograms<br>`);

//   document.write(`The weight of use is: ${Math.ceil(userweight)}kilograms<br>`);

// }


// <------- Task No.08 ------>

//     var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 10) + 1;
//     var numberSecret = Math.floor(improvedNum);

//     var userInput =prompt("Enter your any number in between 1 to 10?");
//     if (numberSecret === userInput)
//     document.write("<h1> Congratulations the user");
//     else
//     document.write(`<h1> Try again${numberSecret}`);




//<------- Chapter No.31 to 34 ----->


// //----Task No.1

// var rightNow= new Date();
// document.write(`<h1>${rightNow}`);




// // <---- Task No.2 ------>


//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var rightNow= new Date();
//     var theMonth= rightNow.getMonth()
//     document.write("<h1> Current month: "+ monthName[theMonth]);



// // <---- Task No.3 ------>

//     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var now = new Date();
//     var theDay = now.getDay();
//     var nameOfToday = dayNames[theDay];
//     document.write(`<h1> Today is ${nameOfToday}`);



// //  <---- Task No.4 ----->

//     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var now = new Date();
//     var theDay = now.getDay();
//     var nameOfToday = dayNames[theDay];
//     if (theDay === 0 || theDay === 6)
//         document.write("<h1> its Fun Day ");

//     else 
//         document.write("<h1> Its working Day ");
    




// // <---- Task No.5 ---->

//     var now = new Date();
//     var theDate = now.getDate();
//     if (theDate < 15 )
//         document.write("<h1> First fifteen days of the month.");
//     else 
//         document.write("<h1> Last days of the month ");
  


// //< ---- Task No.6 ---->

//     var firstDate = new Date("Jan 1, 1970");
//     var today= new Date();
//     var msTday=today.getTime();
//     var msFirstDate=firstDate.getTime();
//     // var msDiff=msRamzanDate-msTday;
//     var msDiff=msTday-msFirstDate;
//     var mintDiff = msDiff / (1000 * 60);
//     // dayDiff = Math.floor(dayDiff);

//     document.write(`<h2> Current Date: ${today}`);
//     document.write(`<br> Elapsed milliseconds since January 1, 1970: ${msDiff}`);
//     document.write(`<br> Elapsed minutes since January 1, 1970: ${mintDiff}`);



// // <---- Task No.7 ------>


//     var now = new Date();
//     var theHours = now.getHours;
//     if (theHours >= 12 )
//         document.write("<h1> It's PM.");

//     else 
//         document.write("<h1> It's AM ");


// // <----- Task No.8 ----->

//     var laterDate = new Date("Dec 31, 2020");
//     document.write("<h1> Later date: " + laterDate)


// <------ Task No.9 ----->


    // var ramzanDate = new Date("June 18, 2015");
    // var today= new Date();
    // var msTday=today.getTime();
    // var msRamzanDate=ramzanDate.getTime();
    // // var msDiff=msRamzanDate-msTday;
    // var msDiff=msTday-msRamzanDate
    // var dayDiff = msDiff / (1000 * 60 * 60 * 24);
    // dayDiff = Math.floor(dayDiff);
    // document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");

    // // var dateDiff= today-laterDate;
    // // document.write("<h1> Later date: " + laterDate)
    // // document.write("<br> today date: " + today)
    // // document.write("<br> Diff date: " + dateDiff)


// // <------Task No.10 ------>


//     var referDate = new Date("Dec 05, 2015");
//     var beginningDate = new Date("Jan 1, 2015");
//     var msReferDate=referDate.getTime();
//     var msBeginningDate=beginningDate.getTime();
//     var msDiff=msReferDate-msBeginningDate;
//     var secondDiff = msDiff / (1000 * 60 );
//     secondDiff = Math.floor(secondDiff);
//     document.write(`<h1> On reference date ${referDate}` );

//     document.write(`<br> ${secondDiff} second had passed sience beginning of 2015`);



// <-----Task No.11 ----->



    // var today = new Date();
    // var oneHourAgo =  new Date();   
    // oneHourAgo.setHours(today.getHours() - 1);
    // document.write(`<h1> Current date: ${today}` );
    // document.write(`<br> 1 hour ago, it was ${oneHourAgo}`);



// // <----- Task No.12 ----->



//     var today = new Date();
//     var hundredYearsAgo =  new Date();   
//     hundredYearsAgo.setFullYear(today.getFullYear() - 100);
//     alert(`Current date: ${today}
// 100 years back, it was ${hundredYearsAgo}`);




// //<------ Task No.13 ----->



//     var age=prompt("Enter your age");
//     var birthYear = new Date();
//     birthYear.setFullYear(birthYear.getFullYear() - age);

//     document.write(`<h1> Your age is ${age}` );
//     document.write("<br> Your birth year is " + birthYear.getFullYear());



// // <------- Task No.14   ------>


//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var name="ABC Customer";
//     var currentDate = new Date();
//     var month=currentDate.getMonth();
//     var consumedUnit=410;
//     var pricePerUnit=16;
//     var surcharge=350;
//     var netAmount=consumedUnit*pricePerUnit;
//     var grossAmount=netAmount+surcharge;

//     document.write("<h1> K-Electric Bill </h1>");
//     document.write(`<h2> <br>  Customer Name: ${name}`);
//     document.write("<br> Month: " + monthName[month]);
//     document.write(`<br> Number of units: ${consumedUnit}`);
//     document.write(`<br> Charges per unit: ${pricePerUnit}`);
//     document.write(`<br><br> Net Amount Payable (within Due Date): ${netAmount}` );
//     document.write(`<br> Late payment surcharge: ${surcharge}`);
//     document.write(`<br> Gross Amount Payable (after Due Date): ${grossAmount}` );




            // <----------- CHAPTERS NO.35 TO 38  --------->



// <----- Task No.1 ------->


// var now= new Date();
// document.write("<h1>" + now);
// 



// <----- Task No.2   ------->

// function greets(firstName, lastName){
//     var fullName=firstName+lastName;
// document.write("<h1> Welcome " +fullName);
// }



// <---- Task No.3 ----->

// function add(){
//     var a =+prompt("Enter first number?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=add(a,b);
//     document.write("<h1>Sum: " +c);
// }
// function add(num1,num2){
//     return(num1 +num2);
// }




// ///////---- Task No.4
// function Calculator(){
//     var a =+prompt("Enter first number?");
//     var op =prompt("Enter operator for operatioin?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=calculator35(a,op,b);
//     document.write("<h1>Result: " +c);
// }
// function calculator35(num1,op, num2){
//     switch(op){
//         case "+" :
//             return(num1+num2);
//             break;
//         case "-" :
//             return(num1-num2);
//             break;
//         case "*" :
//             return(num1*num2);
//             break;
//         case "/" :
//             return(num1/num2);
//             break;
//         case "%" :
//             return(num1%num2);
//             break;
//         default :
//             return("Invalid!")
//     }
// }



// <------- Task No.5 >
// function squares(num1){
//     document.write("<h1> Squares= " + (num1*num1));
// }



// // <------ Task No.6  ------->
// // function fac(){
// //     var n=+prompt("Enter any number for factorial?");
// //     document.write("<h1> Factorial of "+n+ " is: "+ factorial(n));
// // }



// function factorial(num){
//     var fact=1;
//     for (let i=num; i>=1; i--)
//         {
//             fact=fact*i;
//         }
//         return fact;
// }




// <-------- Task No.7 ------>

// function count(){
//     var startNum=+prompt("Enter start number?");
//     var endNum=+prompt("Enter end limit?");
//     for (let i=startNum; i<=endNum; i++)
//         {
//             document.write(i+"<br>");
//         }
// }



// <------ Task No.8 ------->


//     var base=+prompt("Enter base of triangle?");
//     var perpendicular =+prompt("Enter perpendicular?");
//     var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
//     document.write("<h1> Hypotenuse of a right angle triangle is: " +calculateSquar(hypotenuse));





// <------ Task No.9 ------->

// function areaOfTriangle(width, height){
//     return (width*height);
// }
// function calculateAreaOfTriangle(){
//     var width=prompt("Enter width of Triangle?");
//     var height=prompt("Enter height of Triangle?");
//     document.write("<h1> Area of Triangle is: " +areaOfTriangle(width,height))
// }



// <------- Task No.10 ------->

//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;


//     var str=prompt("Enter any string for Palindrome check?");
//     if (palindrome(str))
//         {
//             document.write("<h1> The string " + str +" is palindrome.")
//         }
//     else
//         document.write("<h1> The string " + str +" is not palindrome.")





// <---- Task No.11  ----->


//     stringTitalCase()




// <----- Task No.12 ------->



//     var strSplit = str.split(' ');
    
//     var longestWord = 0;
//     var longestIndex = 0;

//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){ 
//       longestWord = strSplit[i].length; 
//       longestIndex=i;
//       
//     
//     // return longestWord; 
//     return strSplit[longestIndex];
//   

//     var str=prompt("Enter any string for finding longest word?")
//     document.write("<h1> Longest word is: "+ findLongestWord(str));




// <------- Task No.13 ------->


//     var a = str.toLowerCase();   
//     var a = a.split(""); 
  
//     // search for pattern in a 
//     let count = 0; 
//     for (let i = 0; i <= a.length; i++)  
//     { 
    
//     if (a[i] === word) 
//         count++; 
//     }
//     return count;
// }

//     var str=prompt("Enter string?");
//     var word=prompt("Enter letter to check its occurrence?");

//     document.write("<h1> Occurrence of letter " + word +" is: " + wordCount(str,word)); 





// // <------------ Task No.14   --------->

//     const pi=3.14;
//     return 2*pi*radi;
// 
// function calArea(radi){
//     const pi=3.14;
//     return pi*radi*radi;
// }

//     var r=prompt("Enter radius of circle?");
//     document.write("<h1> The circumference is " + calCircumference(r));
//     document.write("<br> The area is " + calArea(r));
