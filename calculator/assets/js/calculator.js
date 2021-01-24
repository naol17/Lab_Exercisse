//Simple Calculator!!!

opratercontainer = ['1: Addition\n', '2: Subtraction\n', '3: multiplication\n', '4: Division\n', '5: Square Number'];

let entry;
entry = window.prompt(opratercontainer);


switch (entry) {
    case "1":
        addition();
        break;
    case "2":
        Subtraction();
        break;
    case "3":
        multiplication();
        break;
    case "4":
        division();
        break;
    case "5":
        square();
        break;
    default:
        window.prompt("Error Out of range!!..")
        break;

}

function addition() {
    let sum = 0
    let intake = new Array();
    let amount = prompt("enter amount of nums to add")
    for (let i = 0; i < parseInt(amount); i++) {
        intake[i] = prompt("enter the numbers" + (i + 1));
    }
    intake.forEach(function(member) {
        sum = sum + parseInt(member);

    })
    window.alert("The answer of your number is: " + sum);

}

function Subtraction() {
    let x = prompt("first num");
    let y = prompt("second num");
    w = parseInt(x);
    v = parseInt(y);
    var z = w - v;
    window.alert(z);
}

function multiplication() {
    let sum = 1
    let intake = new Array();
    let amount = prompt("enter amount of nums to Mutiply")
    for (let i = 0; i < parseInt(amount); i++) {
        intake[i] = prompt("enter the numbers" + (i + 1));
    }
    intake.forEach(function(member) {
        sum = sum * parseInt(member);

    })
    window.alert("The answer of your number is: " + sum);

}

function division() {
    let x = prompt("Enter The Numerator");
    let y = prompt("Enter The Denominator");
    w = parseInt(x);
    v = parseInt(y);

    if (v < 1) {
        window.alert("Sorry number can't divided for Zero!!! ")

    } else {
        var z = w / v;
        window.alert("Your Answer is: " + z);
    }



}

function square() {
    let answer;;
    let x = prompt("Enter the number to be squared")
    let y = parseInt(x);

    answer = Math.pow(x, 2);
    window.alert("Square of number is: " + answer)


}