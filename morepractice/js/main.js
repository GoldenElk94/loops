// var myChars = [" Hans Solo", "C3PO", "R2-D2", "Luke Skywalker", "Greedo"];
// var i = myChars.indexOf("Senator Palpatine");
// alert(i);
// var i = myChars.indexOf("Greedo");
// alert(i);


//  snippet two
// var characters = [" Hans Solo", "C3PO", "R2-D2", "Luke Skywalker", "Greedo"];
// var somecharacters = characters.slice(2,3);
// alert(somecharacters);
// alert(characters);

//  snippet three
// var characters = [" Hans Solo", "C3PO", "R2-D2", "Luke Skywalker", "Greedo"];
// var somecharacters = characters.splice(2,3);
// alert(somecharacters);
// alert(characters);

//  Practice Javascript if / else Statements

// var characters = ["Hans Solo", " C3PO", " R2-D2", " Luke Skywalker", " Greedo"];
// var character1 = 2;
// var character2 = 1;

// if (((characters[character1] == "C3PO") && (caracters[character2] == "R2-D2"))) or
//     ((characters[character2] == "C3PO") && (characters[character1] == "R2-D2"))
// {
//     alert("Here come the droids");
// }

// //  Thrd code snippet

// var x = 5;
// var y = 5;

// if ((++x < 5) && (++y > 5))
//     alert(x);
//     alert(y);

//  Ternary Statement
// 1.
// x = 10;
// y = 20;
// alert((y > x) ? "double" : "half");

// // 2.
// x = "two";
// y = "three";
// alert((x < y) ? "less" : "more");

// // 3.
// x = 5;
// y = 6;
// z = 7;
// alert(((z > y) && (x < y)) ? "first" : "second");

//  Switch Statement

var characters = ["Han Solo", "C3PO", "R2-D2", "Luke Skywalker", "Greedo"];

switch (characters[3]) {
    case "Han Solo":
    case "Grredo":
        alert("Scoundrel");
        break;
    case "C3PO":
    case "R2-D2":
        alert("Droid");
        break;
    case "Luke Skywalker":
        alert("Jedi");
        break;
    case "Luke Skywalker":
        alert("Rebel");
        break;
}

//  Switch no Break

var characters = ["Han Solo", "C3PO", "R2-D2", "Luke Skywalker", "Greedo"];

switch (characters[0]) {
    case "Han Solo":
    case "Grredo":
        alert("Scoundrel");
    case "C3PO":
    case "R2-D2":
        alert("Droid");
    case "Luke Skywalker":
        alert("Jedi");
    case "Luke Skywalker":
        alert("Rebel");
}

//  #3rd Code Snippet with switch statement slides

alert(5 >=4) ? "greater or eqaul" : "less";