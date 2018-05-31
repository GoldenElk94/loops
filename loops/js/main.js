// var loopCounter;
// var myOutput="";

// for (loopCounter=0; loopCounter <10; loopCounter++)
//     myOutput += ++loopCounter + " ";
// alert(myOutput);

// // For loop 2

// var loopCounter;
// var myOutput="";

// for (loopCounter=0; loopCounter <10; loopCounter++)
//     myOutput += loopCounter++ + " ";
// alert(myOutput);

// //   For Loop 3

// var loopCounter;
// var myOutput="";

// for (loopCounter=0; loopCounter <10; loopCounter++)
//     myOutput += loopCounter + " ";
// alert(myOutput);

// //  Fore Lopp 4

// var loopCounter;
// var myOutput="";

// for (loopCounter=0; ++loopCounter <10; loopCounter++)
//     myOutput += ++loopCounter + " ";
// alert(myOutput);

// Counting By Five

// var loopCounter;
// var sumdiv5 = 0;

// for (loopCounter=1; loopCounter <= 100; loopCounter ++)
//     if (loopCounter % 5 == sumdiv5 ) {
//         alert(sumdiv5 + loopCounter);
//     }else {
//         alert("wrong");
//     }

// Counting By three, from one to 16

//    var loopCounter; 
//   for(loopCounter = 1; loopCounter <= 16; loopCounter +=3){
//       alert(sumdiv5 + loopCounter);
//   }

//   Looping over Strings Number one
// var searchString = "May the force be with you!";
// if (searchString.split('x').length - 1 == 0) {
//     alert("Not Found");
// }else {
//     alert("Found");
// }



// Looping over Strings Number two

// var searchString = "May the force be with you!";
// if(searchString.split('o').length - 1 == 2){
//     alert("Found");
// }else {
//     alert("Not Found");
// }


// var i = 0;
// for(i = 2; i<= 22; i+=4) {
//     alert(i);
// }

// Continue and Break

// var i = 0;
// for (i = 2; i <= 22; i +=4) {
//     if(i == 14)
//         continue;
//         alert(i);
// }

// Snippet 2

var i = 0;

for(i = 1; i <= 40; i ++) { 
    if ( i == 1 || i==3 || i==5 || i==7 || i==9 || i==11 || i==13 || i==15 || i==17 || i==19 || i==21)
    continue;
    if (i == 14)
    continue;
    if (i == 20)
    continue;
    if(i == 23)
    break;
    alert(i);
    
    
}

    
